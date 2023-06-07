// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SolarInvestment is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    struct Project {
        string name;
        string description;
        uint256 cost;
        uint256 collectedAmount;
        uint256 energyProduction;
        uint256 completionTime;
        string lat;
        string lng;
        ProjectStatus status;
        string sunrise;
        string sunset;
    }

    mapping(uint256 => Project) public projects;
    mapping(uint256 => address[]) public projectInvestors;
    mapping(uint256 => mapping(address => uint256)) public investorInvestments;
    mapping(bytes32 => uint256) private requestToProject;
    enum ProjectStatus {
        InProgress,
        Active
    }

    uint256 public projectCount;
    event InvestmentMade(
        address indexed investor,
        uint256 indexed projectId,
        uint256 amount
    );

    uint256 private fee;
    address private oracle;
    bytes32 private jobId;

    constructor() {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        oracle = 0x40193c8518BB267228Fc409a613bDbD8eC5a97b3;
        jobId = "7d80a6386ef543a3abb52817f6707e3b";
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }

    function createProject(
        string memory _name,
        string memory _description,
        uint256 _cost,
        uint256 _energyProduced,
        uint256 _completionTime,
        string memory _lat,
        string memory _lng
    ) public {
        uint256 projectId = projectCount;
        Project memory newProject = Project(
            _name,
            _description,
            _cost,
            0,
            _energyProduced,
            _completionTime,
            _lat,
            _lng,
            ProjectStatus.InProgress,
            "",
            ""
        );

        projects[projectId] = newProject;
        projectCount++;
        requestRadiationData(projectId, _lat, _lng);
    }

    function invest(
        uint256 _projectId,
        address _tokenAddress,
        uint _amount
    ) public payable {
        require(_projectId < projectCount, "Invalid project ID");
        require(_amount > 0, "Investment amount must be greater than zero");

        address investor = msg.sender;

        IERC20 token = IERC20(_tokenAddress);

        // Transfer the tokens to this contract
        require(
            token.transferFrom(investor, address(this), _amount),
            "Token transfer failed"
        );

        projectInvestors[_projectId].push(investor);
        investorInvestments[_projectId][investor] += _amount;
        projects[_projectId].collectedAmount += _amount;
        projectCount += 1;
        emit InvestmentMade(investor, _projectId, _amount);
    }

    function requestRadiationData(
        uint256 _projectId,
        string memory _lat,
        string memory _lon
    ) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        string memory url = string(
            abi.encodePacked(
                "https://api.openweathermap.org/energy/1.0/solar/data?lat=18.9054139&lon=-98.9762044&date=2020-01-01&appid=8c9ab5efaa79dfe24d6277c1307fb4f9"
            )
        );
        req.add("get", url);
        req.add("path", "sunset");

        bytes32 reqId = sendChainlinkRequestTo(oracle, req, fee);

        requestToProject[reqId] = _projectId;

        return reqId;
    }

    function fulfill(
        bytes32 _requestId,
        string memory _sunrise
    ) public recordChainlinkFulfillment(_requestId) {
        uint projectId = requestToProject[_requestId];
        setSunriseSunset(projectId, _sunrise);
    }

    function setSunriseSunset(
        uint256 _projectId,
        string memory _sunrise
    ) internal {
        require(_projectId < projectCount, "Invalid project ID");
        projects[_projectId].sunrise = _sunrise;
    }

    function getProject(
        uint256 _index
    )
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            uint256,
            uint256,
            uint256,
            string memory,
            string memory,
            ProjectStatus,
            string memory,
            string memory
        )
    {
        require(_index < projectCount, "Invalid project index");

        Project memory project = projects[_index];
        return (
            project.name,
            project.description,
            project.cost,
            project.collectedAmount,
            project.energyProduction,
            project.completionTime,
            project.lat,
            project.lng,
            project.status,
            project.sunrise,
            project.sunset
        );
    }
}
