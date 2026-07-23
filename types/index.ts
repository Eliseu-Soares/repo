export const CATEGORIES = [
  "Praia",
  "Natureza",
  "Cultura",
  "Aventura",
  "Gastronomia",
  "Histórico",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const SORT_OPTIONS = [
  { value: "popular", label: "Mais populares" },
  { value: "rating", label: "Melhor avaliados" },
  { value: "alphabetic", label: "A–Z" },
  { value: "recent", label: "Mais recentes" },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]["value"];

export interface LocalDish {
  name: string;
  description: string;
  icon: string;
}

export interface Province {
  id: string;
  name: string;
  slug: string;
  region: "Norte" | "Centro" | "Sul" | "Leste" | "Litoral";
  capital: string;
  description: string;
  image: string;
  destinationCount: number;
  coordinates?: { lat: number; lng: number };
  localDishes?: LocalDish[];
}

export interface DestinationActivity {
  icon: string;
  name: string;
  description: string;
}

export interface DestinationDetails {
  history: string;
  activities: DestinationActivity[];
  howToGet: string;
  usefulInfo: {
    hours?: string;
    entry?: string;
    bestSeason?: string;
    climate?: string;
  };
}

export interface Destination {
  id: string;
  slug: string;
  title: string;
  province: string;
  provinceName: string;
  municipality: string;
  category: Category;
  description: string;
  image: string;
  gallery?: string[];
  coordinates?: { lat: number; lng: number };
  details?: DestinationDetails;
  rating: number;
  reviewCount: number;
  tags: string[];
  featured?: boolean;
  createdAt: string;
}

export const EVENT_CATEGORIES = [
  "Festival",
  "Cultural",
  "Desportivo",
  "Gastronómico",
  "Musical",
] as const;

export type EventCategory = (typeof EVENT_CATEGORIES)[number];

export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  province: string;
  provinceName: string;
  municipality: string;
  location?: string;
  category: EventCategory;
  startDate: string;
  endDate: string;
  image: string;
  gallery?: string[];
  coordinates?: { lat: number; lng: number };
  schedule?: string;
  entry?: string;
  free: boolean;
  featured?: boolean;
}

export interface Review {
  id: string;
  destinationId: string;
  author: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface DestinationFilters {
  provincia?: string;
  regiao?: string;
  categoria?: Category;
  rating?: number;
  sort?: SortOption;
  page?: number;
}

export interface SearchResult {
  destinations: Destination[];
  events: Event[];
}

// ── Cultura ──────────────────────────────────────────────
export const CULTURA_CATEGORIES = ["Música","Dança","Artesanato","Línguas","Tradições","Arte"] as const;
export type CulturaCategory = (typeof CULTURA_CATEGORIES)[number];

export interface CulturalArticle {
  id: string;
  slug: string;       // e.g. "semba"
  catSlug: string;    // e.g. "musica"
  title: string;
  category: CulturaCategory;
  excerpt: string;
  body: string;
  image: string;
  region?: string;
  ethnicity?: string;
}

// ── Gastronomia ──────────────────────────────────────────
export const DISH_TYPES = ["Prato Principal","Entrada","Sobremesa","Bebida","Acompanhamento"] as const;
export type DishType = (typeof DISH_TYPES)[number];

export interface Dish {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  province: string;
  provinceName: string;
  image: string;
  type: DishType;
  ingredients?: string[];
  featured?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  province: string;
  provinceName: string;
  specialty: string;
  priceRange: "€" | "€€" | "€€€";
  image: string;
}

// ── Experiências ─────────────────────────────────────────
export const EXPERIENCE_CATEGORIES = ["Aventura","Ecoturismo","Mergulho","Safari","Caminhadas","Cultural"] as const;
export type ExperienceCategory = (typeof EXPERIENCE_CATEGORIES)[number];

export const EXPERIENCE_DIFFICULTIES = ["Fácil","Moderado","Difícil"] as const;
export type ExperienceDifficulty = (typeof EXPERIENCE_DIFFICULTIES)[number];

export interface Experience {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ExperienceCategory;
  province: string;
  provinceName: string;
  duration: string;
  difficulty: ExperienceDifficulty;
  operator: string;
  image: string;
  gallery?: string[];
  price?: string;
  includes?: string[];
  featured?: boolean;
}

// ── Favoritos & Planeador ────────────────────────────────
export type FavoriteItemType = "destino" | "evento" | "experiencia";

export interface FavoriteItem {
  id: string;
  type: FavoriteItemType;
  slug: string;
  title: string;
  image: string;
  subtitle: string;
  addedAt: string;
}

export interface PlanItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  provinceName: string;
  days: number;
}

// ── Notícias ─────────────────────────────────────────────
export const NEWS_CATEGORIES = ["Turismo","Cultura","Eventos","Investimento","Sustentabilidade"] as const;
export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

export interface NewsAuthor {
  name: string;
  avatar?: string;
  role?: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: NewsCategory;
  excerpt: string;
  body: string;
  image: string;
  author: NewsAuthor;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  tags?: string[];
}
