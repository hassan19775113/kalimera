import { Helmet } from 'react-helmet-async';
import { SITE_INFO } from '../utils/constants';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  structuredData?: object;
}

const SEO = ({
  title,
  description = SITE_INFO.description,
  path = '',
  image,
  type = 'website',
  structuredData
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_INFO.title}` : SITE_INFO.title;
  const canonical = `${SITE_INFO.url}${path}`;
  const ogImage = image || SITE_INFO.ogImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
