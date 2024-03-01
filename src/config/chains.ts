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
  id: 81457,
  name: "Blast Mainnet",
  network: "Blast Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.blast.io/"],
    },
    public: {
      http: ["https://rpc.blast.io/"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Blast Explorer",
      url: "https://blastscan.io/",
    },
    default: {
      name: "Blast Explorer",
      url: "https://blastscan.io/",
    },
  },
};
