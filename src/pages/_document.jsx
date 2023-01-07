import Document, { Html, Head, Main, NextScript } from "next/document";
import config from "../../site.config";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta name="googlebot" content="index" />
        <meta name="googlebot-news" content="snippet" />
        <meta name="robots" content="follow" />
        <meta name="twitter:title" content={`${config.siteMetadata.title}`} />
        <meta
          name="twitter:description"
          content={config.siteMetadata.description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteMetadata.title} />
        <meta property="og:title" content={`${config.siteMetadata.title}`} />
        <meta
          property="og:description"
          content={config.siteMetadata.description}
        />
        <meta property="og:url" content={config.siteMetadata.url} />
        <meta name="theme-color" content={config.siteMetadata.themeColor} />
        <link rel="canonical" href={config.siteMetadata.url} />
        <link
          href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
