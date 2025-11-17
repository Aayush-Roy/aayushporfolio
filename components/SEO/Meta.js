import React from "react";
import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Aayush Roy Portfolio</title>
      <meta charSet="utf-8" />
      <meta
        name="title"
        content="Aayush Roy Portfolio - Full Stack Developer"
      />
      <meta
        name="description"
        content="Aayush Roy's Personal Portfolio Website. MERN Stack Developer | SQL | JavaScript | Bootstrap | Tailwind | Open Source Contributor."
      />
      <meta name="author" content="Aayush Roy" />
      <meta
        name="keywords"
        content="aayush roy, aayush portfolio, aayush full stack developer, MERN portfolio, react developer, aayush github, aayush roy developer"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#141624" />

      {/* Search Engine */}
      <meta name="image" content="/images/logos/aayush.png" />

      {/* Schema.org for Google */}
      <meta itemProp="name" content="Aayush Roy - Full Stack Developer" />
      <meta
        itemProp="description"
        content="Portfolio website of Aayush Roy, MERN Stack Developer & Open Source Contributor."
      />
      <meta itemProp="image" content="/images/logos/aayush.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Aayush Roy Portfolio" />
      <meta
        name="twitter:description"
        content="Explore projects and skills of Aayush Roy, MERN Stack Developer."
      />
      <meta name="twitter:site" content="@aayushroy" />
      <meta name="twitter:creator" content="@aayushroy" />
      <meta name="twitter:image:src" content="/images/logos/aayush.png" />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta
        property="og:title"
        content="Aayush Roy Portfolio - Full Stack Developer"
      />
      <meta
        property="og:description"
        content="Explore Aayush Roy’s Portfolio — Full Stack Developer specialized in MERN, SQL, and modern UI/UX."
      />
      <meta property="og:image" content="/images/logos/aayush.png" />
      <meta property="og:url" content="https://aayush-portfolio.vercel.app" />
      <meta property="og:site_name" content="Aayush Roy Portfolio" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />

      {/* Icons & Fonts */}
      <link rel="icon" href="/images/logos/aayush.svg" />
      <link rel="apple-touch-icon" href="/images/logos/aayush.svg" />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
