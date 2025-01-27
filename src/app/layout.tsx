import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rodrigo Méndez - Fotografía",
  description: "Rodrigo Méndez - Fotografía en Guadalajara",
  openGraph: {
    images: ["https://rodrigomendez.art/site-image.png"],
  },
  twitter: {
    images: ["https://rodrigomendez.art/site-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Rodrigo Méndez - Fotografía</title>
      <meta name="description" content={metadata.description ?? ""} />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <meta property="fb:app_id" content="" />
      <meta property="og:url" content="https://rodrigomendez.art" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title?.toString() ?? ""} />
      <meta
        property="og:image"
        content="https://rodrigomendez.art/site-image.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:description" content={metadata.description ?? ""} />
      <meta property="og:site_name" content="Rodrigo Méndez" />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:locale:alternate" content="es_MX" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:url" content="https://rodrigomendez.art" />
      <meta name="twitter:title" content={metadata.title?.toString() ?? ""} />
      <meta name="twitter:description" content={metadata.description ?? ""} />
      <meta
        name="twitter:image"
        content="https://rodrigomendez.art/site-image.png"
      />
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
