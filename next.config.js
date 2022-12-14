/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_ETH_CHAIN_ID: process?.env?.NEXT_PUBLIC_ETH_CHAIN_ID,
    NEXT_PUBLIC_BSC_CHAIN_ID: process?.env?.NEXT_PUBLIC_BSC_CHAIN_ID,
    NEXT_PUBLIC_POLYGON_CHAIN_ID: process?.env?.NEXT_PUBLIC_POLYGON_CHAIN_ID,
    NEXT_PUBLIC_NETWORK_ETH_NAME: process?.env?.NEXT_PUBLIC_NETWORK_ETH_NAME,
    NEXT_PUBLIC_NETWORK_BSC_NAME: process?.env?.NEXT_PUBLIC_NETWORK_BSC_NAME,
    NEXT_PUBLIC_NETWORK_POLYGON_NAME: process?.env?.NEXT_PUBLIC_NETWORK_POLYGON_NAME,
    NEXT_PUBLIC_NETWORK_URL: process?.env?.NEXT_PUBLIC_NETWORK_URL,
    NEXT_PUBLIC_ETHERSCAN_BASE_URL: process?.env?.NEXT_PUBLIC_ETHERSCAN_BASE_URL,
    NEXT_PUBLIC_BSCSCAN_BASE_URL: process?.env?.NEXT_PUBLIC_BSCSCAN_BASE_URL,
    NEXT_PUBLIC_POLSCAN_BASE_URL: process?.env?.NEXT_PUBLIC_POLSCAN_BASE_URL,
  }
}

module.exports = nextConfig
