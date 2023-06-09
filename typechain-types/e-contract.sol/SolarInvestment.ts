/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface SolarInvestmentInterface extends utils.Interface {
  functions: {
    "createProject(string,string,uint256,uint256,uint256,uint256)": FunctionFragment;
    "getProject(uint256)": FunctionFragment;
    "invest(uint256)": FunctionFragment;
    "investorInvestments(uint256,address)": FunctionFragment;
    "projectCount()": FunctionFragment;
    "projectInvestors(uint256,uint256)": FunctionFragment;
    "projects(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createProject"
      | "getProject"
      | "invest"
      | "investorInvestments"
      | "projectCount"
      | "projectInvestors"
      | "projects"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createProject",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getProject",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "invest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "investorInvestments",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "projectCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "projectInvestors",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "projects",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProject", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "investorInvestments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectInvestors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;

  events: {};
}

export interface SolarInvestment extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SolarInvestmentInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createProject(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _energyProduced: PromiseOrValue<BigNumberish>,
      _completionTime: PromiseOrValue<BigNumberish>,
      _solarCapacity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getProject(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;

    invest(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    investorInvestments(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    projectCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    projectInvestors(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        name: string;
        description: string;
        cost: BigNumber;
        collectedAmount: BigNumber;
        energyProduction: BigNumber;
        completionTime: BigNumber;
        solarCapacity: BigNumber;
      }
    >;
  };

  createProject(
    _name: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    _cost: PromiseOrValue<BigNumberish>,
    _energyProduced: PromiseOrValue<BigNumberish>,
    _completionTime: PromiseOrValue<BigNumberish>,
    _solarCapacity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getProject(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
  >;

  invest(
    _projectId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  investorInvestments(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  projectCount(overrides?: CallOverrides): Promise<BigNumber>;

  projectInvestors(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  projects(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      name: string;
      description: string;
      cost: BigNumber;
      collectedAmount: BigNumber;
      energyProduction: BigNumber;
      completionTime: BigNumber;
      solarCapacity: BigNumber;
    }
  >;

  callStatic: {
    createProject(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _energyProduced: PromiseOrValue<BigNumberish>,
      _completionTime: PromiseOrValue<BigNumberish>,
      _solarCapacity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getProject(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;

    invest(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    investorInvestments(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectCount(overrides?: CallOverrides): Promise<BigNumber>;

    projectInvestors(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        name: string;
        description: string;
        cost: BigNumber;
        collectedAmount: BigNumber;
        energyProduction: BigNumber;
        completionTime: BigNumber;
        solarCapacity: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    createProject(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _energyProduced: PromiseOrValue<BigNumberish>,
      _completionTime: PromiseOrValue<BigNumberish>,
      _solarCapacity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getProject(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    invest(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    investorInvestments(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectCount(overrides?: CallOverrides): Promise<BigNumber>;

    projectInvestors(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createProject(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _energyProduced: PromiseOrValue<BigNumberish>,
      _completionTime: PromiseOrValue<BigNumberish>,
      _solarCapacity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getProject(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    invest(
      _projectId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    investorInvestments(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projectInvestors(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
