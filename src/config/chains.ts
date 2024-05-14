export const blastSepolia = {
  id: 168587773,
  name: "Blast Sepolia",
  network: "Blast Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.blast.io"],
    },
    public: {
      http: ["https://sepolia.blast.io"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Blast Spolia Explorer",
      url: "https://testnet.blastscan.io/",
    },
    default: {
      name: "Blast Spolia Explorer",
      url: "https://testnet.blastscan.io/",
    },
  },
};

export const blast = {
  id: 169,
  name: "Manta Pacific Mainnet",
  network: "Manta Pacific Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://pacific-rpc.manta.network/http"],
    },
    public: {
      http: ["https://pacific-rpc.manta.network/http"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Manta Pacific Explorer",
      url: "https://pacific-explorer.manta.network",
    },
    default: {
      name: "Manta Pacific Explorer",
      url: "https://pacific-explorer.manta.network",
    },
  },
};
