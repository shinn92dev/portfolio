import type { MetaDescriptor } from "react-router";

import { siteContent } from "@/contents/en";

type OpenGraphType = "website" | "article";

type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

interface CreateSeoMetaOptions {
  title: string;
  description: string;
  path: string;
  type?: OpenGraphType;
  noIndex?: boolean;
  structuredData?: StructuredData;
}

export const createSeoMeta = ({
  title,
  description,
  path,
  type = "website",
  noIndex = false,
  structuredData,
}: CreateSeoMetaOptions): MetaDescriptor[] => {
  const canonicalUrl = new URL(path, siteContent.metadata.siteUrl).toString();

  const descriptors: MetaDescriptor[] = [
    {
      title,
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "robots",
      content: noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large",
    },
    {
      property: "og:type",
      content: type,
    },
    {
      property: "og:site_name",
      content: siteContent.identity.displayName,
    },
    {
      property: "og:locale",
      content: "en_CA",
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:url",
      content: canonicalUrl,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      tagName: "link",
      rel: "canonical",
      href: canonicalUrl,
    },
  ];

  if (structuredData) {
    descriptors.push({
      "script:ld+json": structuredData,
    });
  }

  return descriptors;
};

export const portfolioStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteContent.metadata.siteUrl}/#website`,
    name: `${siteContent.identity.displayName} Portfolio`,
    url: siteContent.metadata.siteUrl,
    inLanguage: "en-CA",
    description: siteContent.metadata.description,
    author: {
      "@id": `${siteContent.metadata.siteUrl}/#person`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteContent.metadata.siteUrl}/#person`,
    name: siteContent.identity.displayName,
    alternateName: siteContent.identity.fullName,
    url: siteContent.metadata.siteUrl,
    email: `mailto:${siteContent.contact.email}`,
    jobTitle: siteContent.identity.role,
    description: siteContent.identity.positioning,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    sameAs: siteContent.socialLinks
      .filter((link) => link.external)
      .map((link) => link.href),
    knowsLanguage: [
      {
        "@type": "Language",
        name: "Korean",
        alternateName: "ko",
      },
      {
        "@type": "Language",
        name: "Japanese",
        alternateName: "ja",
      },
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
    ],
  },
] satisfies Array<Record<string, unknown>>;
