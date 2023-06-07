/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SolarInvestment,
  SolarInvestmentInterface,
} from "../../e-contract.sol/SolarInvestment";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_energyProduced",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_completionTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_solarCapacity",
        type: "uint256",
      },
    ],
    name: "createProject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getProject",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "invest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "investorInvestments",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projectCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "projectInvestors",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "projects",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collectedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "energyProduction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "completionTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "solarCapacity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506111fe806100206000396000f3fe6080604052600436106100705760003560e01c80632e2c7d801161004e5780632e2c7d80146100fd57806336fbad261461013a5780638b44da9514610165578063f0f3f2c8146101a257610070565b806304c956bf14610075578063107046bd1461009e5780632afcf480146100e1575b600080fd5b34801561008157600080fd5b5061009c600480360381019061009791906109b5565b6101e5565b005b3480156100aa57600080fd5b506100c560048036038101906100c09190610a7a565b6102ba565b6040516100d89796959493929190610b35565b60405180910390f35b6100fb60048036038101906100f69190610a7a565b61040c565b005b34801561010957600080fd5b50610124600480360381019061011f9190610c10565b6105a9565b6040516101319190610c50565b60405180910390f35b34801561014657600080fd5b5061014f6105ce565b60405161015c9190610c50565b60405180910390f35b34801561017157600080fd5b5061018c60048036038101906101879190610c6b565b6105d4565b6040516101999190610cba565b60405180910390f35b3480156101ae57600080fd5b506101c960048036038101906101c49190610a7a565b610622565b6040516101dc9796959493929190610b35565b60405180910390f35b6000600354905060006040518060e001604052808981526020018881526020018781526020016000815260200186815260200185815260200184815250905080600080848152602001908152602001600020600082015181600001908161024c9190610ee1565b5060208201518160010190816102629190610ee1565b5060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060155905050600360008154809291906102ab90610fe2565b91905055505050505050505050565b60006020528060005260406000206000915090508060000180546102dd90610d04565b80601f016020809104026020016040519081016040528092919081815260200182805461030990610d04565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b50505050509080600101805461036b90610d04565b80601f016020809104026020016040519081016040528092919081815260200182805461039790610d04565b80156103e45780601f106103b9576101008083540402835291602001916103e4565b820191906000526020600020905b8154815290600101906020018083116103c757829003601f168201915b5050505050908060020154908060030154908060040154908060050154908060060154905087565b6003548110610450576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044790611076565b60405180910390fd5b60003411610493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048a90611108565b60405180910390fd5b6000339050600034905060016000848152602001908152602001600020829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806002600085815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105719190611128565b9250508190555080600080858152602001908152602001600020600301600082825461059d9190611128565b92505081905550505050565b6002602052816000526040600020602052806000526040600020600091509150505481565b60035481565b600160205281600052604060002081815481106105f057600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60608060008060008060006003548810610671576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610668906111a8565b60405180910390fd5b60008060008a81526020019081526020016000206040518060e00160405290816000820180546106a090610d04565b80601f01602080910402602001604051908101604052809291908181526020018280546106cc90610d04565b80156107195780601f106106ee57610100808354040283529160200191610719565b820191906000526020600020905b8154815290600101906020018083116106fc57829003601f168201915b5050505050815260200160018201805461073290610d04565b80601f016020809104026020016040519081016040528092919081815260200182805461075e90610d04565b80156107ab5780601f10610780576101008083540402835291602001916107ab565b820191906000526020600020905b81548152906001019060200180831161078e57829003601f168201915b50505050508152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820154815250509050806000015181602001518260400151836060015184608001518560a001518660c00151975097509750975097509750975050919395979092949650565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61088c82610843565b810181811067ffffffffffffffff821117156108ab576108aa610854565b5b80604052505050565b60006108be610825565b90506108ca8282610883565b919050565b600067ffffffffffffffff8211156108ea576108e9610854565b5b6108f382610843565b9050602081019050919050565b82818337600083830152505050565b600061092261091d846108cf565b6108b4565b90508281526020810184848401111561093e5761093d61083e565b5b610949848285610900565b509392505050565b600082601f83011261096657610965610839565b5b813561097684826020860161090f565b91505092915050565b6000819050919050565b6109928161097f565b811461099d57600080fd5b50565b6000813590506109af81610989565b92915050565b60008060008060008060c087890312156109d2576109d161082f565b5b600087013567ffffffffffffffff8111156109f0576109ef610834565b5b6109fc89828a01610951565b965050602087013567ffffffffffffffff811115610a1d57610a1c610834565b5b610a2989828a01610951565b9550506040610a3a89828a016109a0565b9450506060610a4b89828a016109a0565b9350506080610a5c89828a016109a0565b92505060a0610a6d89828a016109a0565b9150509295509295509295565b600060208284031215610a9057610a8f61082f565b5b6000610a9e848285016109a0565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ae1578082015181840152602081019050610ac6565b60008484015250505050565b6000610af882610aa7565b610b028185610ab2565b9350610b12818560208601610ac3565b610b1b81610843565b840191505092915050565b610b2f8161097f565b82525050565b600060e0820190508181036000830152610b4f818a610aed565b90508181036020830152610b638189610aed565b9050610b726040830188610b26565b610b7f6060830187610b26565b610b8c6080830186610b26565b610b9960a0830185610b26565b610ba660c0830184610b26565b98975050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bdd82610bb2565b9050919050565b610bed81610bd2565b8114610bf857600080fd5b50565b600081359050610c0a81610be4565b92915050565b60008060408385031215610c2757610c2661082f565b5b6000610c35858286016109a0565b9250506020610c4685828601610bfb565b9150509250929050565b6000602082019050610c656000830184610b26565b92915050565b60008060408385031215610c8257610c8161082f565b5b6000610c90858286016109a0565b9250506020610ca1858286016109a0565b9150509250929050565b610cb481610bd2565b82525050565b6000602082019050610ccf6000830184610cab565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d1c57607f821691505b602082108103610d2f57610d2e610cd5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610d977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610d5a565b610da18683610d5a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610dde610dd9610dd48461097f565b610db9565b61097f565b9050919050565b6000819050919050565b610df883610dc3565b610e0c610e0482610de5565b848454610d67565b825550505050565b600090565b610e21610e14565b610e2c818484610def565b505050565b5b81811015610e5057610e45600082610e19565b600181019050610e32565b5050565b601f821115610e9557610e6681610d35565b610e6f84610d4a565b81016020851015610e7e578190505b610e92610e8a85610d4a565b830182610e31565b50505b505050565b600082821c905092915050565b6000610eb860001984600802610e9a565b1980831691505092915050565b6000610ed18383610ea7565b9150826002028217905092915050565b610eea82610aa7565b67ffffffffffffffff811115610f0357610f02610854565b5b610f0d8254610d04565b610f18828285610e54565b600060209050601f831160018114610f4b5760008415610f39578287015190505b610f438582610ec5565b865550610fab565b601f198416610f5986610d35565b60005b82811015610f8157848901518255600182019150602085019450602081019050610f5c565b86831015610f9e5784890151610f9a601f891682610ea7565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fed8261097f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361101f5761101e610fb3565b5b600182019050919050565b7f496e76616c69642070726f6a6563742049440000000000000000000000000000600082015250565b6000611060601283610ab2565b915061106b8261102a565b602082019050919050565b6000602082019050818103600083015261108f81611053565b9050919050565b7f496e766573746d656e7420616d6f756e74206d7573742062652067726561746560008201527f72207468616e207a65726f000000000000000000000000000000000000000000602082015250565b60006110f2602b83610ab2565b91506110fd82611096565b604082019050919050565b60006020820190508181036000830152611121816110e5565b9050919050565b60006111338261097f565b915061113e8361097f565b925082820190508082111561115657611155610fb3565b5b92915050565b7f496e76616c69642070726f6a65637420696e6465780000000000000000000000600082015250565b6000611192601583610ab2565b915061119d8261115c565b602082019050919050565b600060208201905081810360008301526111c181611185565b905091905056fea26469706673582212209d7eaa0e9deb11a5ece9132984dbf2744d0ea7228bc39fd65bc7694af34f843664736f6c63430008120033";

type SolarInvestmentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SolarInvestmentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SolarInvestment__factory extends ContractFactory {
  constructor(...args: SolarInvestmentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SolarInvestment> {
    return super.deploy(overrides || {}) as Promise<SolarInvestment>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SolarInvestment {
    return super.attach(address) as SolarInvestment;
  }
  override connect(signer: Signer): SolarInvestment__factory {
    return super.connect(signer) as SolarInvestment__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SolarInvestmentInterface {
    return new utils.Interface(_abi) as SolarInvestmentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SolarInvestment {
    return new Contract(address, _abi, signerOrProvider) as SolarInvestment;
  }
}