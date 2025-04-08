/** @type {import('next-sitemap').IConfig} */

import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getDataFromCms(query) {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}api/datocms`,
      data: {
        query,
        variables: {},
        includeDrafts: false,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export const GET_DYNAMIC_PAGES_SLUGS = `query GetDynamicPagesSlugs {
  allCategories {
    url
  }
  allArticles {
    slug
  }
}`;

async function getDynamicPages() {
  const res = await getDataFromCms(GET_DYNAMIC_PAGES_SLUGS);

  const articles = res?.data?.allArticles || [];
  const articlesPages = articles.map((article) => `/blog/${article.slug}`);

  const categories = res?.data?.allCategories || [];
  const categoriesPages = categories.map(
    (categorie) => `/menu/${categorie.url}`
  );

  return [...articlesPages, ...categoriesPages, "/menu/all-dishes"];
}

const sitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  changefreq: "monthly",
  sitemapSize: 5000,
  priority: 0.7,
  generateIndexSitemap: false,
  exclude: ["/api/*"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/*" },
    ],
  },
  additionalPaths: async (config) => {
    const staticPages = [
      {
        loc: "/",
        changefreq: "weekly",
        priority: 1.0,
      },
      {
        loc: "/about",
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/delivery",
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/contacts",
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/blog",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        loc: "/checkout",
        changefreq: "monthly",
        priority: 0.6,
      },
      {
        loc: "/confirmation",
        changefreq: "monthly",
        priority: 0.6,
      },
    ];

    const staticPaths = await Promise.all(
      staticPages.map(async (page) => {
        const transformed = await config.transform(config, page.loc);
        return {
          ...transformed,
          changefreq: page.changefreq,
          priority: page.priority,
        };
      })
    );

    const dynamicPages = await getDynamicPages(config);
    const dynamicPaths = await Promise.all(
      dynamicPages.map((page) => config.transform(config, page))
    );

    return [...staticPaths, ...dynamicPaths];
  },
};

// Експортуємо конфігурацію
export default sitemapConfig;
