/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ChainlinkAggregatorABI,
  ChainlinkAggregatorABIInterface,
} from "../ChainlinkAggregatorABI";

const _abi = [
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ChainlinkAggregatorABI__factory {
  static readonly abi = _abi;
  static createInterface(): ChainlinkAggregatorABIInterface {
    return new utils.Interface(_abi) as ChainlinkAggregatorABIInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkAggregatorABI {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkAggregatorABI;
  }
}