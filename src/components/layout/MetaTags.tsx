import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

const DEFAULT_KEYWORDS = [
  "home renovation",
  "AI design",
  "room makeover",
  "interior design",
  "budget renovation",
  "home improvement",
  "RenoMate",
  "renovation ideas"
];

const MetaTags = ({
  title = "RenoMate - AI-Powered Room Design",
  description = "Transform your space with AI-powered room designs. Get personalized renovation ideas that fit your budget.",
  image = "/og-image.png",
  url = "https://renomate.com",
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl
}: MetaTagsProps) => {
  const fullTitle = `${title} | RenoMate`;
  const fullDescription = `${description} Try our AI-powered room design tool for free!`;
  const fullImageUrl = new URL(image, url).toString();
  const canonical = canonicalUrl || url;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="RenoMate" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6DCE87" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="RenoMate" />
      
      {/* Security */}
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default MetaTags; 