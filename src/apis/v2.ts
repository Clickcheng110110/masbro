import { instance } from "@/utils/request";

export enum GetMyNFTInfoStatus {
  Normal = 1,
  onSale = 2,
}

export enum UserTypeEnum {
  Normal = 0,
  Small = 1,
  Mid = 2,
  Big = 3,
}

export enum OperationVerifyStatus {
  MINT = 1,
  LIST = 2,
  BURN = 3,
  LISTING = 4,
  CANCELING = 5,
  BUYING = 6,
  SPLITTING = 7,
  SYNCING = 8,
}

export enum MergeStatus {
  Pending = 0,
  Continue = 1,
  Success = 2,
  Failed = 3,
  InValid = 4,
}

export interface CancelBindParams {
  address: string;
  authCode: string;
  cancelAddress: string;
}
export interface MergeResultResponse {
  blockTime: string;
  burnTokenId: number;
  id: number;
  lsAmount: string;
  lscAmount: string;
  mergeStatus: MergeStatus;
  newTokenId: number;
  newTransHash: string;
  newUrl: string;
  nextTransHash: string;
  star: number;
  taskId: number;
  tokenIds: any;
  updateTime: string;
  user: string;
}

export const userMessage = "Hello Lsc";

export const getMyNFTInfo = async (params: {
  address: string;
  nftStatus: number;

  page: number;
  pageSize: number;
  age?: number;
}) => {
  const data = await instance.post(`/info/mynft`, params);
  return data;
};

export const getMarketNFT = async (
  age: number,
  page: number,

  pageSize: number,
  tokenId: string,
  price: string
) => {
  const data = await instance.post(`/info/marketnft`, {
    age,
    page,
    pageSize,
    tokenId,
    price,
  });

  return data;
};

export const operateList = async (data: {
  address: string;
  sign: string;
  message: string;
  tokenId: number;
  status: OperationVerifyStatus;
}) => {
  const res = await instance.post(`/operate/list`, data);
  return res;
};

export const nftMergeResult = async (transHash: string) => {
  const res = await instance.get(`/info/nftMerge?transHash=${transHash}`);
  return res;
};

export const nftMergeList = async () => {
  const res = await instance.get(`/info/nftMerge/list`);
  return res;
};

export const rewardList = async (params: { address: string }) => {
  const res = await instance.get(`/info/release?address=${params.address}`);
  return res;
};

export const nftRewardList = async (params: { address: string }) => {
  const res = await instance.get(`/info/nft/record?address=${params.address}`);
  return res;
};

export const getUserInfo = async (data: {
  address: string;
  sign: string;
  message: string;
}) => {
  const res = await instance.get(
    `/info/info?address=${data.address.toLowerCase()}&sign=${
      data.sign
    }&message=${data.message}`
  );
  return res;
};

export const oldUserInfo = async ({ address }: { address: string }) => {
  const res = await instance.get(`/info/old?address=${address.toLowerCase()}`);
  return res;
};

export const marketTotal = async () => {
  const res = await instance.get("/info/market/param");
  return res;
};

export const manageAuth = async (address: string) => {
  const res = await instance.get(`/operate/manage/auth?address=${address}`);
  return res;
};

export const cancelBind = async (data: CancelBindParams) => {
  const res = await instance.post("/operate/manage/cancelBind", data);
  return res;
};
