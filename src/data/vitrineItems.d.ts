export interface VitrineItem {
  src: string;
  alt: string;
  caption: string;
  price?: string;
  href?: string;
}

export const items: VitrineItem[];