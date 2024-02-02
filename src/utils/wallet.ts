export const detectMetamask = () => {
  if (
    typeof window.ethereum !== "undefined" ||
    (typeof window.web3 !== "undefined" &&
      typeof window.web3.currentProvider !== "undefined")
  ) {
    // MetaMask is installed
    console.log("MetaMask is installed");
    return true;
  } else {
    // MetaMask is not installed
    console.log("MetaMask is not installed");
    return false;
  }
};
