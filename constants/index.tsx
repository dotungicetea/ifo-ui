export const HeaderObjPath = [
  {
    key: "POOL",
    path: "pool",
    title: "Pool",
  },
  {
    key: "STAKING",
    path: "staking",
    title: "Staking",
  },
];

export const objPath = [{ POOL: "POOL", STAKING: "STAKING" }];

export const networksEnum = {
  ETHEREUM: "ETHEREUM",
  BSC: "BSC",
  POLYGON: "POLYGON",
};

export const walletsEnum = {
  METAMASK: "METAMASK",
  WALLETCONNECT: "WALLETCONNECT",
  BSCWALLET: "BSCWALLET",
  COINBASEWALLET: "COINBASEWALLET",
};

export const networks = [
  networksEnum.ETHEREUM,
  networksEnum.BSC,
  networksEnum.POLYGON,
];

export const wallet = [
  walletsEnum.METAMASK,
  walletsEnum.WALLETCONNECT,
  walletsEnum.BSCWALLET,
];

export const walletByNetwork = {
  ethereum: { wallets: wallet, networkName: walletsEnum.METAMASK },
  bsc: { wallets: wallet, networkName: networksEnum.BSC },
  polygon: { wallets: [walletsEnum.METAMASK, walletsEnum.WALLETCONNECT], networkName: networksEnum.POLYGON },
};
