import { bscTestnet, bsc } from "viem/chains";
import { Chain } from "wagmi";
import { blastSepolia } from "./chains";

export enum CoinEnum {
  "ASTR-USDT" = "ASTR-USDT",
}

export enum MSPID {
  LP = 0,
}

export enum PriceCate {
  Chainlink = "Chainlink",
  UniswapV2 = "UniswapV2",
}

export interface IPool {
  name: CoinEnum;
  icon1: string;
  icon2?: string;
  token: string;
  priceCategory: PriceCate;
  priceAddr?: string;
  decimals: number;
  pid: number;
  rewardPerSecond: string;
  ipo: string;
  tvl?: string;
  apr?: string;
  staked?: string;
  claimable?: string;
}

export interface IConfig {
  beg: string;
  routerV2: string;
  factory: string;
  weth: string;
  claim: string;
}

const config: Record<string, IConfig> = {
  [blastSepolia.id]: {
    beg: "0x63b21aF3C4a6421954832e389771515080ab1308",
    routerV2: "0x61BcE66E0236199796bbFf68f7E3fB0ACEDa546D",
    factory: "0xe37ACCebEf1dC02306701D7F94eeA5D9e149379C",
    weth: "0x4200000000000000000000000000000000000023",
    claim: "0x37095f9440614bCf5a25786bD938D4ace9DCca4e",
  },
};

export default config;
