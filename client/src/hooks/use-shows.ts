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

export function useShows() {
  return useQuery<Show[]>({
    queryKey: ["/api/shows"],
  });
}
