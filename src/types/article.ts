interface Image {
  alt: string;
  url: string;
}

export interface Paragraph {
  paragraph: string;
}
export interface Article {
  id: string;
  title: string;
  description: string;
  mainContent: Paragraph[];
  mainImage: Image;
  slug: string;
  images: Image[];
}
