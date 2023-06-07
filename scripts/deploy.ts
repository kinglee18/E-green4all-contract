import { ethers } from "hardhat";

async function main() {

  const [deployer] = await ethers.getSigners();
  const SolarInvestment = await ethers.getContractFactory("SolarInvestment");
  const investmentsContract = await SolarInvestment.deploy();
  await investmentsContract.deployed();

  console.log(`MyToken deployed to ${investmentsContract.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});