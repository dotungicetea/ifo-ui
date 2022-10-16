export const HeaderObjPath = [
  {
    key: "IFO",
    path: "ifo",
    title: "IFO",
  },
  {
    key: "PROJECTS",
    path: "projects",
    title: "Projects",
  },
  {
    key: "STAKE",
    path: "stake",
    title: "Stake",
  },
  {
    key: "FAQ",
    path: "faq",
    title: "FAQ",
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

export const networksImg = [
  { img: "/images/header/ETH.svg", title: 'Ethereum' },
  { img: "/images/header/BSC.svg", title: 'BSC' },
  { img: "/images/header/Polygon.svg", title: 'Polygon' },
];

export const wallet = [
  walletsEnum.METAMASK,
  walletsEnum.WALLETCONNECT,
  walletsEnum.BSCWALLET,
];

export const walletImg = [
  { img: "/images/header/metamask.png", title: 'Metamask' },
  { img: "/images/header/WalletConnect.png", title: 'Wallet Connect' },
  { img: "/images/header/bsc_wallet.svg", title: 'BSC Wallet' },
];

export const walletByNetwork = {
  ethereum: { wallets: walletImg, networkName: walletsEnum.METAMASK },
  bsc: { wallets: walletImg, networkName: networksEnum.BSC },
  polygon: {
    wallets: [
      { img: "/images/header/metamask.png", title: 'Metamask' },
      {
        img: "/images/header/WalletConnect.png",
        title: 'Wallet Connect',
      },
    ],
    networkName: networksEnum.POLYGON,
  },
};

export const socialsFooter = [
  { img: "/images/footer/twitter.svg", title: 'Twitter', url: '' },
  { img: "/images/footer/telegram.svg", title: 'Telegram', url: '' },
  { img: "/images/footer/facebook.svg", title: 'Facebook', url: '' },
  { img: "/images/footer/linkedin.svg", title: 'Linked In', url: '' },
]