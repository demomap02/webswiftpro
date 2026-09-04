export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebSwiftPro",
  alternateName: "WebSwiftPro India",
  url: "https://webswiftpro.in",
  logo: "https://webswiftpro.in/logo.png",
  description:
    "WebSwiftPro is a freelance web development studio offering AI chatbot development, agentic AI automation, mobile app development, and digital solutions for modern businesses.",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "WebSwiftPro Founder",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98765-43210",
    contactType: "Customer Service",
    email: "hello@webswiftpro.in",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://twitter.com/webswiftpro",
    "https://linkedin.com/company/webswiftpro",
    "https://github.com/webswiftpro",
  ],
  offers: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Development",
        description: "Custom websites and web applications",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AI Chatbot Development",
        description: "Intelligent conversational agents",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Agentic AI Automation",
        description: "Autonomous AI systems for business workflows",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mobile App Development",
        description: "Native and cross-platform mobile applications",
      },
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WebSwiftPro",
  url: "https://webswiftpro.in",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://webswiftpro.in/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "WebSwiftPro",
  },
};

export const serviceJsonLd = (
  name: string,
  description: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: name,
  description,
  provider: {
    "@type": "Organization",
    name: "WebSwiftPro",
    url: "https://webswiftpro.in",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  url,
});

export const faqJsonLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});