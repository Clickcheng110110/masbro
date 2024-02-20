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
    routerV2: "0x65Ba667b1C099024bEd9c592Bd35c4094831154d",
    factory: "0x6C9ec0B9B5EA1CBB0A451ED5F90d604550cA650f",
    weth: "0x4200000000000000000000000000000000000023",
    claim: "0x37095f9440614bCf5a25786bD938D4ace9DCca4e",
  },
};

export default config;
