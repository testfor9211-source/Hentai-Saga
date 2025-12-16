import { useParams } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimeCard } from "@/components/anime-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Tag } from "lucide-react";

import imgFantasy from "@assets/generated_images/anime_poster_fantasy_adventure.png";
import imgMecha from "@assets/generated_images/anime_poster_sci-fi_mecha.png";
import imgSchool from "@assets/generated_images/anime_poster_slice_of_life_school.png";
import imgDark from "@assets/generated_images/anime_poster_dark_fantasy.png";

export default function GenrePage() {
  const params = useParams();
  const genreSlug = params.slug || "Sample-page";
  const genreName = genreSlug.replace(/-/g, " ");

  const animeList = [
    { title: "Midnight Chronicles", image: imgDark, episode: "4", rating: "8.5", type: "TV" },
    { title: "Shadow Covenant", image: imgFantasy, episode: "12", rating: "9.2", type: "TV" },
    { title: "Steel Angel", image: imgMecha, episode: "6", rating: "8.7", type: "OVA" },
    { title: "Cherry Blossom Arc", image: imgSchool, episode: "2", rating: "9.0", type: "Movie" },
    { title: "Dragon's Path", image: imgFantasy, episode: "8", rating: "8.9", type: "TV" },
    { title: "Cyber Dreams", image: imgMecha, episode: "3", rating: "8.4", type: "OVA" },
    { title: "School Days", image: imgSchool, episode: "5", rating: "8.6", type: "TV" },
    { title: "Dark Ritual", image: imgDark, episode: "2", rating: "9.1", type: "Movie" },
  ];

  const allGenres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Magic", "Mecha", "Music", "Romance", "Sci-Fi", "Ecchi", "Harem", "School", "Slice of Life"];

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
          <Card className="p-6 border-white/10">
            <h3 className="font-display font-bold text-sm text-muted-foreground mb-4" data-testid="heading-all-genres">
              ALL GENRES
            </h3>
            <div className="flex flex-wrap gap-2">
              {allGenres.map((genre) => (
                <Badge 
                  key={genre} 
                  variant="outline" 
                  className={`cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors ${
                    genre.toLowerCase() === genreName.toLowerCase() ? 'bg-primary text-white border-primary' : ''
                  }`}
                  data-testid={`badge-genre-${genre.toLowerCase()}`}
                >
                  {genre}
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
