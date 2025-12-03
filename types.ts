export enum Category {
  DOCUMENTARY = 'Documental',
  EVENTS = 'Eventos'
}

export interface Photo {
  id: string;
  url: string;
  title: string;
  category: Category;
  description?: string;
  width?: number; // for masonry layout calculations if needed
  height?: number;
}

export interface Service {
  id: string;
  title: string;
  priceRange: string;
  description: string;
  features: string[];
}

export interface SectionContent {
  title: string;
  subtitle: string;
  body: string;
}