import { WagmiConfig, createConfig, configureChains } from "wagmi";

import { appWithTranslation, useTranslation } from "next-i18next";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";

import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

import { theme } from "@/theme/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConfigProvider } from "@/context/ConfigContext";
import { infuraProvider } from "wagmi/providers/infura";
import { ContractsProvider } from "@/context/ContractsContext";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

import { blast, blastSepolia } from "@/config/chains";
import { isDev } from "@/config";

export const supportChains = !isDev ? [blast] : [blastSepolia];

const { chains, publicClient, webSocketPublicClient } = configureChains(
  supportChains,
  [
    infuraProvider({ apiKey: "09aa6cafd8cb4cac9d725bcf0b817ee6" }),
    publicProvider(),
  ]
);
const queryClient = new QueryClient();
// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    // new MetaMaskConnector({ chains }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     projectId: "5bfcecd0ffc981fa732653bff3fac489",
    //   },
    // }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Box
      as="main"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgColor="purple.100"
      fontFamily="VonwaonBitmap"
    >
      <Head>
        <title>MASBRO</title>
        <meta
          name="description"
          content="a project by Manta's earliest founder"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <WagmiConfig config={config}>
          <ChakraProvider theme={theme}>
            <ConfigProvider>
              <ContractsProvider>
                <Header></Header>

                <Box
                  margin="0px auto 0"
                  maxWidth="1920px"
                  minWidth={{ base: "100%", md: "1440px" }}
                >
                  <Box minHeight="100vh" padding={{ base: "0px", md: "85px" }}>
                    <Component {...pageProps} />
                    <Footer />
                  </Box>
                </Box>
                <ToastContainer className="toast-custom" />
              </ContractsProvider>
            </ConfigProvider>
          </ChakraProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </Box>
  );
}
export default appWithTranslation(App);
