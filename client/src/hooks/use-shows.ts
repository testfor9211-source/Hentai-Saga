import { useQuery } from "@tanstack/react-query";

export interface Show {
  show_id: number;
  title: string;
  image_url: string;
  total_episodes: number;
  rating: string | number;
  originality: string;
  years: string;
  time: string;
}

export interface Genre {
  genre_id: number;
  genre_name: string;
}

export interface Tag {
  tag_id: number;
  tag_name: string;
}

export interface Author {
  author_id: number;
  author_name: string;
}

export function useGenres() {
  return useQuery<Genre[]>({
    queryKey: ["/api/genres"],
  });
}

export function useShowsByGenre(genreName: string) {
  return useQuery<Show[]>({
    queryKey: ["/api/genres", genreName, "shows"],
    enabled: !!genreName,
  });
}

export function useTags() {
  return useQuery<Tag[]>({
    queryKey: ["/api/tags"],
  });
}

export function useShowsByTag(tagName: string) {
  return useQuery<Show[]>({
    queryKey: ["/api/tags", tagName, "shows"],
    enabled: !!tagName,
  });
}

export function useAuthors() {
  return useQuery<Author[]>({
    queryKey: ["/api/authors"],
  });
}

export function useRecentShows() {
  return useQuery<Show[]>({
    queryKey: ["/api/shows/recent"],
  });
}

export function useShowsByAuthor(authorName: string) {
  return useQuery<Show[]>({
    queryKey: ["/api/authors", authorName, "shows"],
    enabled: !!authorName,
  });
}
