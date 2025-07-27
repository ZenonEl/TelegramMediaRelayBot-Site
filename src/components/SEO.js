import React from "react";
import Head from "@docusaurus/Head";

const SEO = ({
  title = "TelegramMediaRelayBot - Powerful Telegram Media Bot",
  description = "Download and relay media from 1000+ platforms including YouTube, Reddit, TikTok with automatic forwarding. Free open-source Telegram bot with Tor support.",
  keywords = "telegram bot, media downloader, youtube downloader, reddit downloader, tiktok downloader, media relay, automated sharing, yt-dlp, gallery-dl, open source bot",
  image = "/img/Logo.jpg",
  url = "https://zenonel.github.io/TelegramMediaRelayBot-Site/",
  type = "website",
}) => {
  const fullImageUrl = image.startsWith("http")
    ? image
    : `https://zenonel.github.io/TelegramMediaRelayBot-Site${image}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ZenonEl" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="TelegramMediaRelayBot" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ru_RU" />

      {/* VK */}
      <meta property="vk:card" content="summary_large_image" />
      <meta property="vk:url" content={url} />
      <meta property="vk:title" content={title} />
      <meta property="vk:description" content={description} />
      <meta property="vk:image" content={fullImageUrl} />
      <meta property="vk:creator" content="@ZenonEl" />
      <meta property="vk:site" content="@ZenonEl" />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#2e8555" />
      <meta name="msapplication-TileColor" content="#2e8555" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://api.github.com" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "TelegramMediaRelayBot",
          description: description,
          url: url,
          downloadUrl:
            "https://github.com/ZenonEl/TelegramMediaRelayBot/releases/latest",
          author: {
            "@type": "Person",
            name: "ZenonEl",
            url: "https://github.com/ZenonEl",
          },
          operatingSystem: "Linux, Windows, macOS",
          applicationCategory: "ProductivityApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          keywords: keywords,
          programmingLanguage: ".NET",
          codeRepository: "https://github.com/ZenonEl/TelegramMediaRelayBot",
          license: "https://www.gnu.org/licenses/agpl-3.0.html",
        })}
      </script>
    </Head>
  );
};

export default SEO;
