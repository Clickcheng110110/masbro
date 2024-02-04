import { instance } from "@/utils/request";

export const getEligible = async (wallet: string) => {
  const res = await instance.get(`/beg/claimsign?wallet=${wallet}`);
  return res;
};
