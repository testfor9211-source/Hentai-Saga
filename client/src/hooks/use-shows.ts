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
