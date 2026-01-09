import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimeCard2 } from "@/components/anime-card-2";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Tag, Loader2 } from "lucide-react";
import { useGenres, useShowsByGenre } from "@/hooks/use-shows";

export default function GenrePage() {
  const params = useParams();
  const genreSlug = params.slug || "";
  const genreName = genreSlug.replace(/-/g, " ");

  const { data: genres, isLoading: genresLoading } = useGenres();
  const { data: animeList, isLoading: showsLoading } = useShowsByGenre(genreName);

  if (genresLoading || showsLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Tag className="h-6 w-6 text-primary" />
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white capitalize" data-testid="heading-genre-title">
            Genre: {genreName}
          </h1>
        </div>

        <p className="text-muted-foreground mb-8" data-testid="text-genre-description">
          Browse all anime in the {genreName} genre. Find your favorite series and discover new content.
        </p>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-anime-list">
              {genreName.toUpperCase()} ANIME
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {animeList?.map((show) => (
              <AnimeCard2 
                key={show.show_id}
                show={show}
              />
            ))}
            {(!animeList || animeList.length === 0) && (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                No anime found in this genre.
              </div>
            )}
          </div>
        </section>

        <section className="mb-8">
          <Card className="p-6 border-white/10">
            <h3 className="font-display font-bold text-sm text-muted-foreground mb-4" data-testid="heading-all-genres">
              ALL GENRES
            </h3>
            <div className="flex flex-wrap gap-2">
              {genres?.map((genre) => (
                <Link 
                  key={genre.genre_id} 
                  href={`/genre/${genre.genre_name.replace(/\s+/g, '-')}`}
                >
                  <Badge 
                    variant="outline" 
                    className={`cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors ${
                      genre.genre_name.toLowerCase() === genreName.toLowerCase() ? 'bg-primary text-white border-primary' : ''
                    }`}
                    data-testid={`badge-genre-${genre.genre_name.toLowerCase()}`}
                  >
                    {genre.genre_name}
                  </Badge>
                </Link>
              ))}
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
