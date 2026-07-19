// sidey.config.ts

export const sideyConfig = {
  /**
   * Global SEO and Site Identity
   * -------------------------------------------------------------------------
   * These values populate your HTML meta tags, RSS feed definitions,
   * and structural header components across the template.
   */
  site: {
    // The main title displayed in browser tabs and search engine results
    title:
      "aanushh | Software Engineer building scalable Architectures & Seamless Digital Experiences",

    // A short fallback summary of your site used for SEO and social share cards
    description:
      "Portfolio and writings of Anush kumar N — a Software Engineer specializing in TypeScript, React, and scalable architectures.",

    // The production domain where your site is deployed (no trailing slash)
    url: "https://portfolio.aanushh.com",

    // Your name, utilized in copyright strings and author meta tags
    author: "Anush kumar N",

    // The primary language attribute for HTML accessibility engines (e.g., "en", "id")
    locale: "en",
  },

  /**
   * Primary Sidebar Navigation
   * -------------------------------------------------------------------------
   * Controls the links rendered inside your fixed navigation panel.
   * You can add, reorder, or remove objects here to update your site's structure.
   */
  navigation: [
    { label: "Home", href: "/" },
    { label: "Writings", href: "/writings" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ],
}

export type SideyConfigType = typeof sideyConfig
