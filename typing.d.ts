/// <reference types="next-images" />

type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

declare interface Window {
  evabaseConfig: any;
  ethereum: any;
  web3: any;
  createjs: any;
}

declare module "web3";
