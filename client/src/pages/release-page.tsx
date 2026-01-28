import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimeCard2 } from "@/components/anime-card-2";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Loader2, Calendar, Star } from "lucide-react";
import { useShowsByReleaseYear, useYears } from "@/hooks/use-shows";

export default function ReleasePage() {
  const params = useParams();
  const year = params.slug || "";

  const { data: years, isLoading: yearsLoading } = useYears();
  const { data: animeList, isLoading: showsLoading } = useShowsByReleaseYear(year);

  if (yearsLoading || showsLoading) {
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
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-anime-list">
              {year} ANIME
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
                No anime found for this release year.
              </div>
            )}
          </div>
        </section>

        <section className="mb-8">
          <Card className="p-6 border-white/10">
            <h3 className="font-display font-bold text-sm text-muted-foreground mb-4" data-testid="heading-all-years">
              ALL RELEASE YEARS
            </h3>
            <div className="flex flex-wrap gap-2">
              {years?.map((y) => (
                <Link 
                  key={y.year_id} 
                  href={`/release/${y.release_year}`}
                >
                  <Badge 
                    variant="outline" 
                    className={`cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors px-3 py-1 text-xs ${
                      y.release_year === year ? 'bg-primary text-white border-primary' : ''
                    }`}
                    data-testid={`badge-year-${y.release_year}`}
                  >
                    {y.release_year}
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
