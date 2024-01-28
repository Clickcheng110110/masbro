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
} from "./common";

export interface IdoInterface extends utils.Interface {
  functions: {
    "astrPerAmount()": FunctionFragment;
    "astrToken()": FunctionFragment;
    "createIdo(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "getAstrAmount(uint256,address)": FunctionFragment;
    "getClaimableAstrAmount(uint256,address)": FunctionFragment;
    "getReleaseAstrAmount(uint256,address)": FunctionFragment;
    "idoBatch(uint256,address[])": FunctionFragment;
    "idoInfos(uint256)": FunctionFragment;
    "nftAddress()": FunctionFragment;
    "nftIdo()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setNFTAddress(address)": FunctionFragment;
    "setTime(uint256,uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "usdtToken()": FunctionFragment;
    "userWithdraw(uint256)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
    "withdrawBNB(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "astrPerAmount"
      | "astrToken"
      | "createIdo"
      | "getAstrAmount"
      | "getClaimableAstrAmount"
      | "getReleaseAstrAmount"
      | "idoBatch"
      | "idoInfos"
      | "nftAddress"
      | "nftIdo"
      | "owner"
      | "renounceOwnership"
      | "setNFTAddress"
      | "setTime"
      | "transferOwnership"
      | "usdtToken"
      | "userWithdraw"
      | "withdraw"
      | "withdrawBNB"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "astrPerAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "astrToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createIdo",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAstrAmount",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableAstrAmount",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReleaseAstrAmount",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "idoBatch",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "idoInfos",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nftAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nftIdo", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNFTAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTime",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "usdtToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "userWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;
  encodeFunctionData(functionFragment: "withdrawBNB", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "astrPerAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "astrToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createIdo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAstrAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableAstrAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReleaseAstrAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "idoBatch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "idoInfos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftIdo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNFTAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdtToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBNB",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "withdrawEvent(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "withdrawEvent"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface withdrawEventEventObject {
  userAddress: string;
  sendAmount: BigNumber;
}
export type withdrawEventEvent = TypedEvent<
  [string, BigNumber],
  withdrawEventEventObject
>;

export type withdrawEventEventFilter = TypedEventFilter<withdrawEventEvent>;

export interface Ido extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IdoInterface;

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
    astrPerAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    astrToken(overrides?: CallOverrides): Promise<[string]>;

    createIdo(
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _unlockTime: BigNumberish,
      _uamount: BigNumberish,
      _totalShare: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getClaimableAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReleaseAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    idoBatch(
      pid: BigNumberish,
      batchAddress: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    idoInfos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        startTime: BigNumber;
        endTime: BigNumber;
        uamount: BigNumber;
        totalShare: BigNumber;
        unlockTime: BigNumber;
      }
    >;

    nftAddress(overrides?: CallOverrides): Promise<[string]>;

    nftIdo(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setNFTAddress(
      _nftAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setTime(
      pid: BigNumberish,
      _endTime: BigNumberish,
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    usdtToken(overrides?: CallOverrides): Promise<[string]>;

    userWithdraw(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdraw(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawBNB(
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  astrPerAmount(overrides?: CallOverrides): Promise<BigNumber>;

  astrToken(overrides?: CallOverrides): Promise<string>;

  createIdo(
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    _unlockTime: BigNumberish,
    _uamount: BigNumberish,
    _totalShare: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getAstrAmount(
    pid: BigNumberish,
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getClaimableAstrAmount(
    pid: BigNumberish,
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReleaseAstrAmount(
    pid: BigNumberish,
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  idoBatch(
    pid: BigNumberish,
    batchAddress: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  idoInfos(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      startTime: BigNumber;
      endTime: BigNumber;
      uamount: BigNumber;
      totalShare: BigNumber;
      unlockTime: BigNumber;
    }
  >;

  nftAddress(overrides?: CallOverrides): Promise<string>;

  nftIdo(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setNFTAddress(
    _nftAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setTime(
    pid: BigNumberish,
    _endTime: BigNumberish,
    _unlockTime: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  usdtToken(overrides?: CallOverrides): Promise<string>;

  userWithdraw(
    pid: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdraw(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawBNB(
    recipient: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    astrPerAmount(overrides?: CallOverrides): Promise<BigNumber>;

    astrToken(overrides?: CallOverrides): Promise<string>;

    createIdo(
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _unlockTime: BigNumberish,
      _uamount: BigNumberish,
      _totalShare: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaimableAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReleaseAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    idoBatch(
      pid: BigNumberish,
      batchAddress: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    idoInfos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        startTime: BigNumber;
        endTime: BigNumber;
        uamount: BigNumber;
        totalShare: BigNumber;
        unlockTime: BigNumber;
      }
    >;

    nftAddress(overrides?: CallOverrides): Promise<string>;

    nftIdo(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setNFTAddress(
      _nftAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTime(
      pid: BigNumberish,
      _endTime: BigNumberish,
      _unlockTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    usdtToken(overrides?: CallOverrides): Promise<string>;

    userWithdraw(pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdraw(_tokenAddress: string, overrides?: CallOverrides): Promise<void>;

    withdrawBNB(recipient: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "withdrawEvent(address,uint256)"(
      userAddress?: string | null,
      sendAmount?: null
    ): withdrawEventEventFilter;
    withdrawEvent(
      userAddress?: string | null,
      sendAmount?: null
    ): withdrawEventEventFilter;
  };

  estimateGas: {
    astrPerAmount(overrides?: CallOverrides): Promise<BigNumber>;

    astrToken(overrides?: CallOverrides): Promise<BigNumber>;

    createIdo(
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _unlockTime: BigNumberish,
      _uamount: BigNumberish,
      _totalShare: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaimableAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReleaseAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    idoBatch(
      pid: BigNumberish,
      batchAddress: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    idoInfos(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    nftAddress(overrides?: CallOverrides): Promise<BigNumber>;

    nftIdo(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setNFTAddress(
      _nftAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setTime(
      pid: BigNumberish,
      _endTime: BigNumberish,
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    usdtToken(overrides?: CallOverrides): Promise<BigNumber>;

    userWithdraw(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdraw(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawBNB(
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    astrPerAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    astrToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createIdo(
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _unlockTime: BigNumberish,
      _uamount: BigNumberish,
      _totalShare: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimableAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReleaseAstrAmount(
      pid: BigNumberish,
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    idoBatch(
      pid: BigNumberish,
      batchAddress: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    idoInfos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nftAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftIdo(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setNFTAddress(
      _nftAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setTime(
      pid: BigNumberish,
      _endTime: BigNumberish,
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    usdtToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userWithdraw(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawBNB(
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
