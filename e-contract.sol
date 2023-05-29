// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SolarInvestment {
    struct Project {
        string name;
        string description;
        uint256 cost;
        uint256 collectedAmount;
        uint256 energyProduction;
        uint256 completionTime;
        uint256 solarCapacity;
        address[] investors;
        mapping(address => uint256) investedAmounts;
    }

    Project[] public projects;

    function createProject(
        string memory _name,
        string memory _description,
        uint256 _cost,
        uint256 _energyProduction,
        uint256 _completionTime,
        uint256 _solarCapacity
    ) public {
        Project memory newProject = Project(
            _name,
            _description,
            _cost,
            0,
            _energyProduction,
            _completionTime,
            _solarCapacity,
            new address[](0)
        );
        projects.push(newProject);
    }

    function invest(uint256 _projectIndex) public payable {
        require(_projectIndex < projects.length, "Invalid project index");
        Project storage project = projects[_projectIndex];

        require(msg.value > 0, "Investment amount must be greater than zero");

        project.investors.push(msg.sender);
        project.investedAmounts[msg.sender] += msg.value;
        project.collectedAmount += msg.value;
    }

    function getProjectCount() public view returns (uint256) {
        return projects.length;
    }

    function getProject(uint256 _index)
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            address[] memory
        )
    {
        require(_index < projects.length, "Invalid project index");

        Project memory project = projects[_index];
        return (
            project.name,
            project.description,
            project.cost,
            project.collectedAmount,
            project.energyProduction,
            project.completionTime,
            project.solarCapacity,
            project.investors
        );
    }

    function getInvestedAmount(uint256 _projectIndex, address _investor)
        public
        view
        returns (uint256)
    {
        require(_projectIndex < projects.length, "Invalid project index");
        Project memory project = projects[_projectIndex];
        return project.investedAmounts[_investor];
    }
}
