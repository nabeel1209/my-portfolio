import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

const SEOHead = ({ title, description, url, image }: SEOHeadProps) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nabeel Muhammad",
            "url": url,
            "sameAs": [
              "https://github.com/nabeel1209", 
              "https://www.linkedin.com/in/nabeelmuhammad12/"
            ]
          }),
        }}
      />
    </Head>
  );
};

export default SEOHead;
