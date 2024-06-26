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

export interface Erc721Interface extends utils.Interface {
  functions: {
    "AstrolIDO()": FunctionFragment;
    "LuckMerge()": FunctionFragment;
    "NFTMarket()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "baseTokenURI()": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "burnAndMint(uint256,uint256,address,address)": FunctionFragment;
    "endTime()": FunctionFragment;
    "getAge(uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "getNextSellTime(uint256)": FunctionFragment;
    "getPrice(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "nextSellPerid1()": FunctionFragment;
    "nextSellPerid2()": FunctionFragment;
    "nextSellPerid3()": FunctionFragment;
    "normalMint(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "root(uint256)": FunctionFragment;
    "round()": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "setAddressInfo(address,address,address)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setBaseTokenURI(string)": FunctionFragment;
    "setInfo(uint256,uint256,uint256)": FunctionFragment;
    "setPrice(uint256,uint256)": FunctionFragment;
    "setRoot(uint256,address)": FunctionFragment;
    "setRoundInfo(uint256,uint256,uint256,uint256)": FunctionFragment;
    "startTime()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalShare()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AstrolIDO"
      | "LuckMerge"
      | "NFTMarket"
      | "approve"
      | "balanceOf"
      | "baseTokenURI"
      | "burn"
      | "burnAndMint"
      | "endTime"
      | "getAge"
      | "getApproved"
      | "getNextSellTime"
      | "getPrice"
      | "isApprovedForAll"
      | "name"
      | "nextSellPerid1"
      | "nextSellPerid2"
      | "nextSellPerid3"
      | "normalMint"
      | "owner"
      | "ownerOf"
      | "renounceOwnership"
      | "root"
      | "round"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "setAddressInfo"
      | "setApprovalForAll"
      | "setBaseTokenURI"
      | "setInfo"
      | "setPrice"
      | "setRoot"
      | "setRoundInfo"
      | "startTime"
      | "supportsInterface"
      | "symbol"
      | "tokenURI"
      | "totalShare"
      | "transferFrom"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "AstrolIDO", values?: undefined): string;
  encodeFunctionData(functionFragment: "LuckMerge", values?: undefined): string;
  encodeFunctionData(functionFragment: "NFTMarket", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "baseTokenURI",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "burnAndMint",
    values: [BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "endTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAge",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextSellTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextSellPerid1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextSellPerid2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextSellPerid3",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "normalMint", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "root", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "round", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddressInfo",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseTokenURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setInfo",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoot",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoundInfo",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "AstrolIDO", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LuckMerge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "NFTMarket", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "baseTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burnAndMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextSellTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextSellPerid1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextSellPerid2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextSellPerid3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "normalMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "round", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAddressInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBaseTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRoundInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalShare", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

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

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface Erc721 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Erc721Interface;

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
    AstrolIDO(overrides?: CallOverrides): Promise<[string]>;

    LuckMerge(overrides?: CallOverrides): Promise<[string]>;

    NFTMarket(overrides?: CallOverrides): Promise<[string]>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    baseTokenURI(overrides?: CallOverrides): Promise<[string]>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    burnAndMint(
      price: BigNumberish,
      age: BigNumberish,
      userAddress: string,
      _root: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    endTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAge(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNextSellTime(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPrice(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nextSellPerid1(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextSellPerid2(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextSellPerid3(overrides?: CallOverrides): Promise<[BigNumber]>;

    normalMint(
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    root(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    round(overrides?: CallOverrides): Promise<[BigNumber]>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setAddressInfo(
      _AstrolIDO: string,
      _LuckMerge: string,
      _NFTMarket: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setBaseTokenURI(
      _baseTokenURI: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setInfo(
      _nextSellPerid1: BigNumberish,
      _nextSellPerid2: BigNumberish,
      _nextSellPerid3: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPrice(
      tokenId: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setRoot(
      tokenId: BigNumberish,
      _root: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setRoundInfo(
      _round: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _totalShare: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  AstrolIDO(overrides?: CallOverrides): Promise<string>;

  LuckMerge(overrides?: CallOverrides): Promise<string>;

  NFTMarket(overrides?: CallOverrides): Promise<string>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  baseTokenURI(overrides?: CallOverrides): Promise<string>;

  burn(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  burnAndMint(
    price: BigNumberish,
    age: BigNumberish,
    userAddress: string,
    _root: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  endTime(overrides?: CallOverrides): Promise<BigNumber>;

  getAge(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getNextSellTime(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPrice(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  nextSellPerid1(overrides?: CallOverrides): Promise<BigNumber>;

  nextSellPerid2(overrides?: CallOverrides): Promise<BigNumber>;

  nextSellPerid3(overrides?: CallOverrides): Promise<BigNumber>;

  normalMint(
    user: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  root(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  round(overrides?: CallOverrides): Promise<BigNumber>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setAddressInfo(
    _AstrolIDO: string,
    _LuckMerge: string,
    _NFTMarket: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setBaseTokenURI(
    _baseTokenURI: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setInfo(
    _nextSellPerid1: BigNumberish,
    _nextSellPerid2: BigNumberish,
    _nextSellPerid3: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPrice(
    tokenId: BigNumberish,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setRoot(
    tokenId: BigNumberish,
    _root: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setRoundInfo(
    _round: BigNumberish,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    _totalShare: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalShare(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    AstrolIDO(overrides?: CallOverrides): Promise<string>;

    LuckMerge(overrides?: CallOverrides): Promise<string>;

    NFTMarket(overrides?: CallOverrides): Promise<string>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseTokenURI(overrides?: CallOverrides): Promise<string>;

    burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    burnAndMint(
      price: BigNumberish,
      age: BigNumberish,
      userAddress: string,
      _root: string,
      overrides?: CallOverrides
    ): Promise<void>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    getAge(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getNextSellTime(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    nextSellPerid1(overrides?: CallOverrides): Promise<BigNumber>;

    nextSellPerid2(overrides?: CallOverrides): Promise<BigNumber>;

    nextSellPerid3(overrides?: CallOverrides): Promise<BigNumber>;

    normalMint(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    root(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    round(overrides?: CallOverrides): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setAddressInfo(
      _AstrolIDO: string,
      _LuckMerge: string,
      _NFTMarket: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setBaseTokenURI(
      _baseTokenURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setInfo(
      _nextSellPerid1: BigNumberish,
      _nextSellPerid2: BigNumberish,
      _nextSellPerid3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrice(
      tokenId: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoot(
      tokenId: BigNumberish,
      _root: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoundInfo(
      _round: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _totalShare: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalShare(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
  };

  estimateGas: {
    AstrolIDO(overrides?: CallOverrides): Promise<BigNumber>;

    LuckMerge(overrides?: CallOverrides): Promise<BigNumber>;

    NFTMarket(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseTokenURI(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    burnAndMint(
      price: BigNumberish,
      age: BigNumberish,
      userAddress: string,
      _root: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    getAge(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNextSellTime(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nextSellPerid1(overrides?: CallOverrides): Promise<BigNumber>;

    nextSellPerid2(overrides?: CallOverrides): Promise<BigNumber>;

    nextSellPerid3(overrides?: CallOverrides): Promise<BigNumber>;

    normalMint(
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    root(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    round(overrides?: CallOverrides): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setAddressInfo(
      _AstrolIDO: string,
      _LuckMerge: string,
      _NFTMarket: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setBaseTokenURI(
      _baseTokenURI: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setInfo(
      _nextSellPerid1: BigNumberish,
      _nextSellPerid2: BigNumberish,
      _nextSellPerid3: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPrice(
      tokenId: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setRoot(
      tokenId: BigNumberish,
      _root: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setRoundInfo(
      _round: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _totalShare: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalShare(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AstrolIDO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LuckMerge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NFTMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseTokenURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    burnAndMint(
      price: BigNumberish,
      age: BigNumberish,
      userAddress: string,
      _root: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    endTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAge(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextSellTime(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextSellPerid1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextSellPerid2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextSellPerid3(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    normalMint(
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    root(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    round(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setAddressInfo(
      _AstrolIDO: string,
      _LuckMerge: string,
      _NFTMarket: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setBaseTokenURI(
      _baseTokenURI: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setInfo(
      _nextSellPerid1: BigNumberish,
      _nextSellPerid2: BigNumberish,
      _nextSellPerid3: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPrice(
      tokenId: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setRoot(
      tokenId: BigNumberish,
      _root: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setRoundInfo(
      _round: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _totalShare: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
