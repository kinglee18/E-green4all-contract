require("@nomiclabs/hardhat-ganache");
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    localGanache: {
      accounts: ['0xb87a448602292826e57ce14b9db349e6dd31ddcf6bfad24c22a6af1a2969f85f'],
      url: 'HTTP://127.0.0.1:7545'
    },    
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/0Z8bgqW0ESlNsj7Zl7GoLtzL9yVhwqmh",
      accounts: ['971ed11debc906a4e745602dcd10f5c6e4667cb66c009855324a45ea7bf9b8a9'],
      allowUnlimitedContractSize: true,
      gas: 2100000,
      gasPrice: 8000000000,
      blockGasLimit: 100000000429720,
      
    },
  }
};

export default config;
