import type { Destination, DestinationFilters, Event, SearchResult } from "@/types";
import { destinations } from "@/data/destinations";
import { provinces } from "@/data/provinces";
import { events } from "@/data/events";

export function filterDestinations(
  items: Destination[],
  filters: DestinationFilters
): Destination[] {
  let result = [...items];

  if (filters.regiao) {
    const slugs = provinces
      .filter((p) => p.region === filters.regiao)
      .map((p) => p.slug);
    result = result.filter((d) => slugs.includes(d.province));
  }

  if (filters.provincia) {
    result = result.filter((d) => d.province === filters.provincia);
  }

  if (filters.categoria) {
    result = result.filter((d) => d.category === filters.categoria);
  }

  if (filters.rating) {
    result = result.filter((d) => d.rating >= filters.rating!);
  }

  return sortDestinations(result, filters.sort);
}

export function sortDestinations(
  items: Destination[],
  sort?: DestinationFilters["sort"]
): Destination[] {
  const copy = [...items];
  switch (sort) {
    case "alphabetic":
      return copy.sort((a, b) => a.title.localeCompare(b.title, "pt"));
    case "recent":
      return copy.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating);
    case "popular":
    default:
      return copy.sort((a, b) => b.reviewCount - a.reviewCount);
  }
}

export function searchAll(query: string): SearchResult {
  if (!query.trim()) return { destinations: [], events: [] };

  const q = query.toLowerCase().trim();

  const matchedDestinations = destinations.filter(
    (d) =>
      d.title.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.provinceName.toLowerCase().includes(q) ||
      d.municipality.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.tags.some((t) => t.toLowerCase().includes(q))
  );

  const matchedEvents = events.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.provinceName.toLowerCase().includes(q) ||
      e.municipality.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q)
  );

  return { destinations: matchedDestinations, events: matchedEvents };
}

export function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

export function paginateArray<T>(items: T[], page: number, perPage: number): T[] {
  return items.slice((page - 1) * perPage, page * perPage);
}
