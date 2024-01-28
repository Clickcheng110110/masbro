import { bscTestnet, bsc } from "viem/chains";
import { Chain } from "wagmi";

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
  astr: string;
  usdt: string;
  lp: string;
  masterChief: string;
  ido: string;
  chainInfo: Chain;
  stakePools: any;
  userBind: string;
  nftMarket: string;
  nft: string;
  ls: string;
  burn: string;
  nftMerge: string;
  awardCenter: string;
}

const config: Record<Chain["id"], IConfig> = {
  [bscTestnet.id]: {
    ido: "0x3FCF153371eCf98a26FDBEBC1fB71C8adA95d52E",
    astr: "0x5839240cAE7dabA5993E3D9b12A65A9868041E6A",
    usdt: "0x59f201CC9966946EfCE51c52de8Ae8C55E5FdCae",
    lp: "0xF44c5A51bE033a1d8c9Bd194484A7c4758EB336c",
    masterChief: "0xc19C629CCf63B4197fe4dE7F9A14A8EA985eF5AD",
    userBind: "0x18072Dfe631fc099aA6AEA55f36E58780aA033d0",
    nftMarket: "0xdffD00ae8a395Be37eD1f52C68311826FEAB85EE",
    nft: "0x2c26C3Dc7A86CEb2f88fb07D8052fFCf89014217",
    ls: "0x2D3B3F21854895BaB64C005DAfFf0c2E4db0DBAa",
    nftMerge: "0xab5fa99FA6Ffd9778129d902d210449717912Fe8",
    burn: "0xFecD4840d2857a3860ca4B54efCE86F9bD312fde",
    awardCenter: "0x79363AeE9058511a8AFd4B51139ce53e30d72429",
    chainInfo: bscTestnet,
    stakePools: [
      {
        name: CoinEnum["ASTR-USDT"],
        icon1: "",
        icon2: "",
        token: "0x78c9Fc8891A0623C4e4d31A53d56cf8E761CafD9",
        priceCategory: PriceCate.UniswapV2,
        decimals: 18,
        pid: MSPID.LP,
        rewardPerSecond: "321502057613168724",
      },
    ],
  },
  [bsc.id]: {
    astr: "0x2b3559c3DBdB294cbb71f2B30a693F4C6be6132d",
    usdt: "0x55d398326f99059ff775485246999027b3197955",
    lp: "0xfa80b6d671B9c4322cD34AD6C8F79B3494A3e310",
    masterChief: "0x2c28e2cd0c591aca928d39b3439285be976657eb",
    ido: "0x03e60C5a7115ea50b4dafCB00abD8E96c0a19D2b",
    userBind: "0xB7EE62138EBe25a7dF583a85BE7CE637f1194548",
    nftMarket: "0x501A10306C1618f1af059bA8CE140881A4546583",
    nft: "0xBEfA008Bf998a9EaA8C22d0e792a6F237671526D",
    ls: "0x1924b3348c953783aC19EC18d37978B726B57358",
    nftMerge: "0x409F8C7534F484b6Ac8B10B6F52Bf37407D04123",
    burn: "0x5a9A914242b44C2c40Cd0C0bFb045Bc3e5bcFd4C",
    awardCenter: "0xae3dA67ed09723343fC6a93ADFDA44237dCf3f8D",
    chainInfo: bsc,
    stakePools: [
      {
        name: CoinEnum["ASTR-USDT"],
        icon1: "",
        icon2: "",
        token: "0xfa80b6d671B9c4322cD34AD6C8F79B3494A3e310",
        priceCategory: PriceCate.UniswapV2,
        decimals: 18,
        pid: MSPID.LP,
        rewardPerSecond: "50000000000000000",
      },
    ],
  },
};

export default config;
