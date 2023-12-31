/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface IVotingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getCandidateData"
      | "getCandidateLength"
      | "getCandidates"
      | "getVoterData"
      | "getVoterLength"
      | "setCandidate"
      | "vote"
      | "voterRight"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getCandidateData",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCandidateLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCandidates",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVoterData",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVoterLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCandidate",
    values: [BigNumberish, string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voterRight",
    values: [string, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCandidateData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCandidateLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCandidates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoterData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoterLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCandidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voterRight", data: BytesLike): Result;
}

export interface IVoting extends BaseContract {
  connect(runner?: ContractRunner | null): IVoting;
  waitForDeployment(): Promise<this>;

  interface: IVotingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getCandidateData: TypedContractMethod<
    [_candidateAddress: AddressLike],
    [[bigint, string, bigint, bigint, string]],
    "view"
  >;

  getCandidateLength: TypedContractMethod<[], [bigint], "view">;

  getCandidates: TypedContractMethod<[], [string[]], "view">;

  getVoterData: TypedContractMethod<
    [_candidateAddress: AddressLike],
    [[bigint, string, string, bigint, bigint, boolean]],
    "view"
  >;

  getVoterLength: TypedContractMethod<[], [bigint], "view">;

  setCandidate: TypedContractMethod<
    [_age: BigNumberish, _name: string, _candidateAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  vote: TypedContractMethod<
    [_candidateAddress: AddressLike, _candidateVoteId: BigNumberish],
    [void],
    "nonpayable"
  >;

  voterRight: TypedContractMethod<
    [name: string, voterAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getCandidateData"
  ): TypedContractMethod<
    [_candidateAddress: AddressLike],
    [[bigint, string, bigint, bigint, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCandidateLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCandidates"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getVoterData"
  ): TypedContractMethod<
    [_candidateAddress: AddressLike],
    [[bigint, string, string, bigint, bigint, boolean]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVoterLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setCandidate"
  ): TypedContractMethod<
    [_age: BigNumberish, _name: string, _candidateAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [_candidateAddress: AddressLike, _candidateVoteId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "voterRight"
  ): TypedContractMethod<
    [name: string, voterAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
