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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface SolarInvestmentInterface extends utils.Interface {
  functions: {
    "createProject(string,string,uint256,uint256,uint256,string,string)": FunctionFragment;
    "fulfill(bytes32,string)": FunctionFragment;
    "getProject(uint256)": FunctionFragment;
    "invest(uint256,address,uint256)": FunctionFragment;
    "investorInvestments(uint256,address)": FunctionFragment;
    "projectCount()": FunctionFragment;
    "projectInvestors(uint256,uint256)": FunctionFragment;
    "projects(uint256)": FunctionFragment;
    "requestRadiationData(uint256,string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createProject"
      | "fulfill"
      | "getProject"
      | "invest"
      | "investorInvestments"
      | "projectCount"
      | "projectInvestors"
      | "projects"
      | "requestRadiationData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createProject",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfill",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProject",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "invest",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
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
  encodeFunctionData(
    functionFragment: "requestRadiationData",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "createProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
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
  decodeFunctionResult(
    functionFragment: "requestRadiationData",
    data: BytesLike
  ): Result;

  events: {
    "ChainlinkCancelled(bytes32)": EventFragment;
    "ChainlinkFulfilled(bytes32)": EventFragment;
    "ChainlinkRequested(bytes32)": EventFragment;
    "InvestmentMade(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChainlinkCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InvestmentMade"): EventFragment;
}

export interface ChainlinkCancelledEventObject {
  id: string;
}
export type ChainlinkCancelledEvent = TypedEvent<
  [string],
  ChainlinkCancelledEventObject
>;

export type ChainlinkCancelledEventFilter =
  TypedEventFilter<ChainlinkCancelledEvent>;

export interface ChainlinkFulfilledEventObject {
  id: string;
}
export type ChainlinkFulfilledEvent = TypedEvent<
  [string],
  ChainlinkFulfilledEventObject
>;

export type ChainlinkFulfilledEventFilter =
  TypedEventFilter<ChainlinkFulfilledEvent>;

export interface ChainlinkRequestedEventObject {
  id: string;
}
export type ChainlinkRequestedEvent = TypedEvent<
  [string],
  ChainlinkRequestedEventObject
>;

export type ChainlinkRequestedEventFilter =
  TypedEventFilter<ChainlinkRequestedEvent>;

export interface InvestmentMadeEventObject {
  investor: string;
  projectId: BigNumber;
  amount: BigNumber;
}
export type InvestmentMadeEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  InvestmentMadeEventObject
>;

export type InvestmentMadeEventFilter = TypedEventFilter<InvestmentMadeEvent>;

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
      _lat: PromiseOrValue<string>,
      _lng: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fulfill(
      _requestId: PromiseOrValue<BytesLike>,
      _sunrise: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getProject(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number,
        string,
        string
      ]
    >;

    invest(
      _projectId: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
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
        string,
        string,
        number,
        string,
        string
      ] & {
        name: string;
        description: string;
        cost: BigNumber;
        collectedAmount: BigNumber;
        energyProduction: BigNumber;
        completionTime: BigNumber;
        lat: string;
        lng: string;
        status: number;
        sunrise: string;
        sunset: string;
      }
    >;

    requestRadiationData(
      _projectId: PromiseOrValue<BigNumberish>,
      _lat: PromiseOrValue<string>,
      _lon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createProject(
    _name: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    _cost: PromiseOrValue<BigNumberish>,
    _energyProduced: PromiseOrValue<BigNumberish>,
    _completionTime: PromiseOrValue<BigNumberish>,
    _lat: PromiseOrValue<string>,
    _lng: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fulfill(
    _requestId: PromiseOrValue<BytesLike>,
    _sunrise: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getProject(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      number,
      string,
      string
    ]
  >;

  invest(
    _projectId: PromiseOrValue<BigNumberish>,
    _tokenAddress: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
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
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      number,
      string,
      string
    ] & {
      name: string;
      description: string;
      cost: BigNumber;
      collectedAmount: BigNumber;
      energyProduction: BigNumber;
      completionTime: BigNumber;
      lat: string;
      lng: string;
      status: number;
      sunrise: string;
      sunset: string;
    }
  >;

  requestRadiationData(
    _projectId: PromiseOrValue<BigNumberish>,
    _lat: PromiseOrValue<string>,
    _lon: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createProject(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _energyProduced: PromiseOrValue<BigNumberish>,
      _completionTime: PromiseOrValue<BigNumberish>,
      _lat: PromiseOrValue<string>,
      _lng: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    fulfill(
      _requestId: PromiseOrValue<BytesLike>,
      _sunrise: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getProject(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number,
        string,
        string
      ]
    >;

    invest(
      _projectId: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
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
        string,
        string,
        number,
        string,
        string
      ] & {
        name: string;
        description: string;
        cost: BigNumber;
        collectedAmount: BigNumber;
        energyProduction: BigNumber;
        completionTime: BigNumber;
        lat: string;
        lng: string;
        status: number;
        sunrise: string;
        sunset: string;
      }
    >;

    requestRadiationData(
      _projectId: PromiseOrValue<BigNumberish>,
      _lat: PromiseOrValue<string>,
      _lon: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "ChainlinkCancelled(bytes32)"(
      id?: PromiseOrValue<BytesLike> | null
    ): ChainlinkCancelledEventFilter;
    ChainlinkCancelled(
      id?: PromiseOrValue<BytesLike> | null
    ): ChainlinkCancelledEventFilter;

    "ChainlinkFulfilled(bytes32)"(
      id?: PromiseOrValue<BytesLike> | null
    ): ChainlinkFulfilledEventFilter;
    ChainlinkFulfilled(
      id?: PromiseOrValue<BytesLike> | null
    ): ChainlinkFulfilledEventFilter;

    "ChainlinkRequested(bytes32)"(
      id?: PromiseOrValue<BytesLike> | null
    ): ChainlinkRequestedEventFilter;
    ChainlinkRequested(
      id?: PromiseOrValue<BytesLike> | null
    ): ChainlinkRequestedEventFilter;

    "InvestmentMade(address,uint256,uint256)"(
      investor?: PromiseOrValue<string> | null,
      projectId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): InvestmentMadeEventFilter;
    InvestmentMade(
      investor?: PromiseOrValue<string> | null,
      projectId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): InvestmentMadeEventFilter;
  };

  estimateGas: {
    createProject(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _energyProduced: PromiseOrValue<BigNumberish>,
      _completionTime: PromiseOrValue<BigNumberish>,
      _lat: PromiseOrValue<string>,
      _lng: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fulfill(
      _requestId: PromiseOrValue<BytesLike>,
      _sunrise: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getProject(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    invest(
      _projectId: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
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

    requestRadiationData(
      _projectId: PromiseOrValue<BigNumberish>,
      _lat: PromiseOrValue<string>,
      _lon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createProject(
      _name: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _energyProduced: PromiseOrValue<BigNumberish>,
      _completionTime: PromiseOrValue<BigNumberish>,
      _lat: PromiseOrValue<string>,
      _lng: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fulfill(
      _requestId: PromiseOrValue<BytesLike>,
      _sunrise: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getProject(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    invest(
      _projectId: PromiseOrValue<BigNumberish>,
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
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

    requestRadiationData(
      _projectId: PromiseOrValue<BigNumberish>,
      _lat: PromiseOrValue<string>,
      _lon: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
