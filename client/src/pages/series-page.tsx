import { useParams } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimeCard } from "@/components/anime-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Tv } from "lucide-react";

import imgFantasy from "@assets/generated_images/anime_poster_fantasy_adventure.png";
import imgMecha from "@assets/generated_images/anime_poster_sci-fi_mecha.png";
import imgSchool from "@assets/generated_images/anime_poster_slice_of_life_school.png";
import imgDark from "@assets/generated_images/anime_poster_dark_fantasy.png";

export default function SeriesPage() {
  const params = useParams();
  const seriesSlug = params.slug || "Sample-page";
  const seriesName = seriesSlug.replace(/-/g, " ");

  const seriesInfo = {
    name: seriesName,
    totalSeasons: 3,
    totalEpisodes: 24,
    status: "Ongoing",
    releaseYear: "2024",
    studio: "Pink Pineapple",
    description: `${seriesName} is an acclaimed anime series that has captivated audiences worldwide. Known for its compelling storylines and stunning animation, this series continues to set the standard for quality entertainment.`
  };

  const animeList = [
    { title: `${seriesName} Season 1`, image: imgDark, episode: "8", rating: "8.5", type: "TV" },
    { title: `${seriesName} Season 2`, image: imgFantasy, episode: "8", rating: "9.2", type: "TV" },
    { title: `${seriesName} Season 3`, image: imgMecha, episode: "8", rating: "8.7", type: "TV" },
    { title: `${seriesName} OVA`, image: imgSchool, episode: "2", rating: "9.0", type: "OVA" },
  ];

  const relatedSeries = [
    { title: "Midnight Chronicles", image: imgDark, episode: "4", rating: "8.5", type: "TV" },
    { title: "Shadow Covenant", image: imgFantasy, episode: "12", rating: "9.2", type: "TV" },
    { title: "Steel Angel", image: imgMecha, episode: "6", rating: "8.7", type: "OVA" },
    { title: "Cherry Blossom Arc", image: imgSchool, episode: "2", rating: "9.0", type: "Movie" },
  ];

  const popularSeries = ["Bible Black", "Discipline", "Resort Boin", "Kanojo x Kanojo", "Overflow", "Redo of Healer", "Interspecies Reviewers"];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Tv className="h-6 w-6 text-primary" />
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white capitalize" data-testid="heading-series-title">
            Series: {seriesName}
          </h1>
        </div>

        <p className="text-muted-foreground mb-8" data-testid="text-series-description">
          {seriesInfo.description}
        </p>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-series-content">
              {seriesName.toUpperCase()} COLLECTION
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {animeList.map((anime, index) => (
              <AnimeCard 
                key={index}
                title={anime.title}
                image={anime.image}
                episode={anime.episode}
                rating={anime.rating}
                type={anime.type}
              />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-related-series">
              RELATED SERIES
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {relatedSeries.map((anime, index) => (
              <AnimeCard 
                key={index}
                title={anime.title}
                image={anime.image}
                episode={anime.episode}
                rating={anime.rating}
                type={anime.type}
              />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <Card className="p-6 border-white/10">
            <h3 className="font-display font-bold text-sm text-muted-foreground mb-4" data-testid="heading-popular-series">
              POPULAR SERIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularSeries.map((series) => (
                <Badge 
                  key={series} 
                  variant="outline" 
                  className={`cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors ${
                    series.toLowerCase() === seriesName.toLowerCase() ? 'bg-primary text-white border-primary' : ''
                  }`}
                  data-testid={`badge-series-${series.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {series}
                </Badge>
              ))}
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
