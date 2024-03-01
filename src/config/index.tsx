import { bscTestnet, bsc } from "viem/chains";
import { Chain } from "wagmi";
import { blast, blastSepolia } from "./chains";

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

export const isDev = process.env.NEXT_PUBLIC_BRANCH === "dev";

console.log("isDev", isDev, process.env.NEXT_PUBLIC_BRANCH);

const config: Record<string, IConfig> = {
  [blastSepolia.id]: {
    beg: "0x63b21aF3C4a6421954832e389771515080ab1308",
    routerV2: "0xb83DC23de672235882540728848B66c2f6EDD3A3",
    factory: "0x9fdd0684690750aa654F33eBff42174E68FfbbcF",
    weth: "0x4200000000000000000000000000000000000023",
    claim: "0x37095f9440614bCf5a25786bD938D4ace9DCca4e",
  },
  [blast.id]: {
    beg: "0x215f4cd7e4e21ac125f3135a767b2fdd9bc0f163",
    routerV2: "0xeF01834c9B5F40a79Bbf8632F88996B600041598",
    factory: "0xB2baD75be3dE544475121AE258b02fefDb55a602",
    weth: "0x4300000000000000000000000000000000000004",
    claim: "0x37095f9440614bCf5a25786bD938D4ace9DCca4e",
  },
};

export default config;
