import { ethers } from "hardhat";
import  SolarInvestment  from "../artifacts/contracts/e-contract.sol/SolarInvestment.json";
import { expect } from "chai";


describe("Solar Investment Contract", function() {
  let solarInvestment;

  beforeEach(async function() {
    const SolarInvestmentFactory = await ethers.getContractFactory("SolarInvestment");
    solarInvestment = (await SolarInvestmentFactory.deploy()) as SolarInvestment.abi;
    await solarInvestment.deployed();
  });

  it("Should create a new project", async function() {
    await solarInvestment.createProject(
      "Project 1",
      "Description",
      1000,
      500,
      100,
      "12.34",
      "56.78"
    );

    const project = await solarInvestment.getProject(0);

    expect(project.name).to.equal("Project 1");
    expect(project.description).to.equal("Description");
    expect(project.cost).to.equal(1000);
  });

  it("Should allow to invest in a project", async function() {
    const [owner, addr1] = await ethers.getSigners();
    const initialBalance = await addr1.getBalance();

    await solarInvestment.connect(addr1).invest(0, owner.address, 100);

    const finalBalance = await addr1.getBalance();
    expect(finalBalance).to.be.lessThan(initialBalance);

    const project = await solarInvestment.getProject(0);
    expect(project.collectedAmount).to.equal(100);
  });
});
