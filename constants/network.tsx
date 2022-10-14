export const ETH_CHAIN_ID = process?.env?.NEXT_PUBLIC_ETH_CHAIN_ID as string;
export const BSC_CHAIN_ID = process?.env?.NEXT_PUBLIC_BSC_CHAIN_ID as string;
export const POLYGON_CHAIN_ID = process?.env?.NEXT_PUBLIC_POLYGON_CHAIN_ID as string;
export const NETWORK_ETH_NAME = process?.env?.NEXT_PUBLIC_NETWORK_ETH_NAME;
export const NETWORK_BSC_NAME = process?.env?.NEXT_PUBLIC_NETWORK_BSC_NAME;
export const NETWORK_POLYGON_NAME = process?.env?.NEXT_PUBLIC_NETWORK_POLYGON_NAME;

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  BSC_TESTNET = 97,
  BSC_MAINNET = 56,
  POLYGON_MAINNET = 137,
  MUMBAI_POLYGON_TESTNET = 80001,
  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,
}

export type chainId = Extract<
  ChainId,
  | ChainId.MAINNET
  | ChainId.ROPSTEN
  | ChainId.RINKEBY
  | ChainId.GOERLI
  | ChainId.KOVAN
  | ChainId.BSC_MAINNET
  | ChainId.BSC_TESTNET
  | ChainId.POLYGON_MAINNET
  | ChainId.MUMBAI_POLYGON_TESTNET
  | ChainId.AVALANCHE
  | ChainId.AVALANCHE_TESTNET
>;

export const ChainIdNameMapping: { [key in ChainId]: string } = {
  [ChainId.MAINNET]: "Mainnet",
  [ChainId.ROPSTEN]: "Ropsten",
  [ChainId.GOERLI]: "Goerli",
  [ChainId.KOVAN]: "Kovan",
  [ChainId.RINKEBY]: "Rinkeby",
  [ChainId.BSC_MAINNET]: "BSC Mainnet",
  [ChainId.BSC_TESTNET]: "BSC Testnet",
  [ChainId.POLYGON_MAINNET]: "Polygon Mainnet",
  [ChainId.MUMBAI_POLYGON_TESTNET]: "Mumbai Testnet",
  [ChainId.AVALANCHE]: "Avalanche Network",
  [ChainId.AVALANCHE_TESTNET]: "Avalanche FUJI C-Chain",
};

export const NETWORK_NAME_MAPPINGS: any = {
  "1": "Mainnet",
  "3": "Ropsten",
  "5": "Goerli",
  "42": "Kovan",
  "4": "Rinkeby",
  "56": "BSC Mainnet",
  "97": "BSC Testnet",
  "137": "Polygon Mainnet",
  "80001": "Mumbai Testnet",
  "43114": "Avalanche Network",
  "43113": "Avalanche FUJI C-Chain",
};

export interface NetworkInfo {
  name: string;
  id?: string | undefined;
  icon: string;
  disableIcon: string;
  currency?: string;
  [k: string]: any;
}

export enum APP_NETWORKS_NAME {
  METAMASK = "METAMASK",
  BSC = "BSC",
  POLYGON = "POLYGON",
}

export type appNetworkType = Extract<APP_NETWORKS_NAME, APP_NETWORKS_NAME.METAMASK | APP_NETWORKS_NAME.BSC | APP_NETWORKS_NAME.POLYGON>

export const APP_NETWORKS: {[key in APP_NETWORKS_NAME]: NetworkInfo } = {
  [APP_NETWORKS_NAME.METAMASK]: {
    name: 'Ethereum',
    id: ETH_CHAIN_ID,
    icon: "/images/ethereum.svg",
    disableIcon: "/images/ethereum-disabled.png"
  },
  [APP_NETWORKS_NAME.BSC]: {
    name: 'BSC',
    id: BSC_CHAIN_ID ,
    icon: "/images/bsc.svg",
    disableIcon: "/images/binance-disabled.png"
  },
  [APP_NETWORKS_NAME.POLYGON]: {
    name: 'Polygon',
    id: POLYGON_CHAIN_ID ,
    icon: "/images/polygon-matic.svg",
    disableIcon: "/images/polygon-matic-disabled.svg"
  },
}

export const appNetwork: { [key: string]: string } = {
  [ETH_CHAIN_ID]: NETWORK_ETH_NAME as string,
  [BSC_CHAIN_ID]: NETWORK_BSC_NAME as string,
  [POLYGON_CHAIN_ID]: NETWORK_POLYGON_NAME as string,
}

export const APP_NETWORKS_SUPPORT: {[key: number]: NetworkInfo } = {
  [ETH_CHAIN_ID]: {
    name: 'Ethereum',
    id: ETH_CHAIN_ID,
    icon: "/images/ethereum.svg",
    disableIcon: "/images/ethereum-disabled.png",
    currency: 'ETH',
    networkName: NETWORK_NAME_MAPPINGS[ETH_CHAIN_ID],
    details: {
      chainId: `0x${(+ETH_CHAIN_ID).toString(16)}`,
      chainName: NETWORK_NAME_MAPPINGS[ETH_CHAIN_ID],
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [],
      blockExplorerUrls: [],
    }
  },
  [BSC_CHAIN_ID]: {
    name: 'BSC Mainnet',
    id: BSC_CHAIN_ID ,
    icon: "/images/bsc.svg",
    disableIcon: "/images/binance-disabled.png",
    currency: 'BNB',
    networkName: NETWORK_NAME_MAPPINGS[BSC_CHAIN_ID],
    details: {
      chainId: `0x${(+BSC_CHAIN_ID).toString(16)}`,
      chainName: NETWORK_NAME_MAPPINGS[BSC_CHAIN_ID],
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: [process.env.REACT_APP_BSC_RPC_URL],
      blockExplorerUrls: [process.env.REACT_APP_BSCSCAN_BASE_URL],
    }
  },
  [POLYGON_CHAIN_ID]: {
    name: 'Polygon',
    id: POLYGON_CHAIN_ID ,
    icon: "/images/polygon-matic.svg",
    disableIcon: "/images/polygon-matic-disabled.svg",
    currency: 'MATIC',
    networkName: NETWORK_NAME_MAPPINGS[POLYGON_CHAIN_ID],
    details: {
      chainId: `0x${(+POLYGON_CHAIN_ID).toString(16)}`,
      chainName: NETWORK_NAME_MAPPINGS[POLYGON_CHAIN_ID],
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: [process.env.REACT_APP_POLYGON_RPC_URL],
      blockExplorerUrls: [process.env.REACT_APP_POLSCAN_BASE_URL],
    }
  },
}
