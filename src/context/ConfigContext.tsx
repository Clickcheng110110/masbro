import config, { isDev } from "@/config";
import { bscTestnet, bsc } from "viem/chains";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Signer, ethers } from "ethers";
import { useIsMounted } from "usehooks-ts";

import {
  Chain,
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";

import * as allChains from "wagmi/chains";
import { supportChains } from "@/pages/_app";

import { blast, blastSepolia } from "@/config/chains";

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;
export type IConfigContext = Partial<ReturnType<typeof useConfig>>;

export const ConfigContext = createContext<IConfigContext>({});

export function useConfig() {
  const [signer, setSigner] = useState<Signer | null>();
  const [provider, setProvider] = useState<ethers.providers.JsonRpcProvider>();
  const [defaultChain, setDefaultChain] = useState<Chain>();

  const { chain: wagmiChain } = useNetwork();
  const { address, connector, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const balanceStatus = useBalance({ address: address });
  const switchNetworkStatus = useSwitchNetwork();

  const chain = wagmiChain || defaultChain;
  const isSupportChain = !!supportChains.find((item) => item.id === chain?.id);
  const curChianConfig = isSupportChain
    ? chain?.id
      ? config?.[chain?.id]
      : null
    : isDev
    ? config[blastSepolia.id]
    : config[blast.id];

  useEffect(() => {
    const getSignerAndProvider = async () => {
      const ethereum = (window as any).ethereum;
      const chainId = Number(ethereum.chainId);
      const chain = Object.values(allChains).find(
        (item) => item.id === chainId
      );

      const provider = new ethers.providers.JsonRpcProvider(
        blastSepolia?.rpcUrls?.default?.http[0]
      );
      const ethereumProvider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const signer = ethereumProvider.getSigner();
      setDefaultChain(chain);
      setProvider(isConnected && isSupportChain ? ethereumProvider : provider);
      setSigner(isConnected && isSupportChain ? signer : null);
    };
    getSignerAndProvider();
  }, [isConnected, isSupportChain]);

  const value = {
    signer: signer,
    provider,
    signerOrProvider: signer || provider,
    isConnected,
    balanceStatus: balanceStatus,
    address: address,
    chain: chain,
    connector,
    connectors,
    switchNetworkStatus,
    config: curChianConfig,
    isSupportChain,
    connect,
    disconnect,
  };

  return value;
}

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const config = useConfig();
  const isMounted = useIsMounted();

  return (
    <ConfigContext.Provider value={isMounted() ? config : {}}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfigContext = () => {
  const values = useContext(ConfigContext);
  return values;
};
