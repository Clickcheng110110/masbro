import { getUserInfo, userMessage } from "@/apis/v2";
import { create } from "zustand";

interface IState {
  data: any;
  isLoading: boolean;
  handleSignUserInfo: (address: string) => Promise<null | undefined>;
}

const useUserStore = create<IState>((set) => ({
  data: null,
  isLoading: false,
  handleSignUserInfo: async (address: string) => {
    try {
      if (!address) return null;
      set({ isLoading: true });
      const ethereum = (window as any).ethereum;
      await ethereum.enable();
      const sign = await ethereum.request({
        method: "personal_sign",
        params: [userMessage, address],
      });
      const res = await getUserInfo({ address, sign, message: userMessage });
      set({ data: res?.data });
    } catch (error) {
      set({ data: null });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUserStore;
