import { blogPosts, services } from "@/lib/data";

const siteUrl = "https://sport-psychologist.vercel.app";

export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "Спортивный психолог",
    description:
      "Профессиональная психологическая помощь детям и подросткам в спорте.",
    url: siteUrl,
    telephone: "+79000000000",
    email: "info@sport-psychologist.ru",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Саратов",
      addressCountry: "RU",
    },
    areaServed: ["Саратов", "Россия"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги спортивного психолога",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: `Психологическая помощь: ${s.title.toLowerCase()}`,
        description: s.description,
        url: `${siteUrl}/uslugi/${s.slug}`,
      })),
    },
  };

  const blogSchemas = blogPosts.map((post) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "[Имя специалиста]",
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Спортивный психолог",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      {blogSchemas.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
