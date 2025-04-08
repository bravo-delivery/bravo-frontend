export const GET_BLOG_ARTICLES_QUERY = `query GetBlogArticles {
  allArticles {
    id
    title
    description
    images {
      alt
      url
    }
    mainContent {
      paragraph
    }
    mainImage {
      alt
      url
    }
    slug
  }
}`;

export const GET_ARTICLE_BY_SLUG = `query GetArticle($code: String!) {
  allArticles(filter: {slug: {eq: $code}}) {
    id,
    title,
    description
    images {
      alt
      url
    }
    mainContent {
      paragraph
    }
    mainImage {
      alt
      url
    }
    slug
  }
}`;

export const GET_MENU_BANNER = `query GetMenuBanner {
  banner {
    bannerDesk {
      url
    }
    bannerMob {
      url
    }
    bannerMobxl {
      url
    }
    bannerTab {
      url
    }
  }
}`;

export const GET_ALL_DISHES = `query GetAllDishes {
  allCategories {
    url
    title
    order
    id
    dishes {
      title
      price
      description
      calories
      weight
      id
      image {
        url
        alt
      }
    }
  }

    allDishes(filter: {shownOnMain: {eq: "true"}}) {
    image {
      alt
      url
    }
    id
    description
    calories
    price
    title
    weight
  }
}`;

export const GET_CATEGORY_METADATA = `query GetCategoryMetadata($code: String!) {
  category(filter: {url: {eq: $code}}) {
    metaTitle
    metaDescription
  }
}`;
