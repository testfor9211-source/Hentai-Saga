import { useParams } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimeCard2 } from "@/components/anime-card-2";
import { Loader2, Calendar } from "lucide-react";
import { useShowsByReleaseYear } from "@/hooks/use-shows";

export default function ReleasePage() {
  const params = useParams();
  const year = params.slug || "";

  const { data: animeList, isLoading } = useShowsByReleaseYear(year);

  if (isLoading) {
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
          <Calendar className="h-6 w-6 text-primary" />
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white" data-testid="heading-release-title">
            Released in {year}
          </h1>
        </div>

        <p className="text-muted-foreground mb-8" data-testid="text-release-description">
          Browse all anime released in {year} where this is the primary release year.
        </p>

        <section className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {animeList?.map((show) => (
              <AnimeCard2 
                key={show.show_id}
                show={show}
              />
            ))}
            {(!animeList || animeList.length === 0) && (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                No anime found for this release year.
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
