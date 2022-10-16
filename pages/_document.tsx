/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/favicon.svg"/>
        <title>Icetea Labs</title>
        <meta name="description" content="We support visionary founders and energetic teams to create a long-lasting positive impact through decentralization technologies." />
        <meta property="og:image" content="/og-image.png" id="og:image"/>
        <meta property="og:url" content="https://ilap.icetea.io" id="og:url"/>
        <meta property="og:title" content="The laboratory incubating and nurturing Polkadot projects, the trusted companion of visionary founders." id="og:title"/>
        <meta property="og:description" content="We support visionary founders and energetic teams to create a long-lasting positive impact through decentralization technologies." id="og:description"/>
        <meta property="og:site_name" content="Icetea Labs" id="og:site_name"/>
        <meta name="twitter:url" content="https://ilap.icetea.io" id="twitter:url"/>
        <meta name="twitter:title" content="The laboratory incubating and nurturing Polkadot projects, the trusted companion of visionary founders." id="twitter:title"/>
        <meta name="twitter:description" content="We support visionary founders and energetic teams to create a long-lasting positive impact through decentralization technologies." id="twitter:description"/>
        <meta name="twitter:image" content="/og-image.png" id="twitter:image"/>
        <meta name="twitter:site" content="@Icetea_Labs"/>
        <meta name="twitter:creator" content="@Icetea_Labs"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}