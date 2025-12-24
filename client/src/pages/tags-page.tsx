import { useParams } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimeCard } from "@/components/anime-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Hash } from "lucide-react";

import imgFantasy from "@assets/generated_images/anime_poster_fantasy_adventure.png";
import imgMecha from "@assets/generated_images/anime_poster_sci-fi_mecha.png";
import imgSchool from "@assets/generated_images/anime_poster_slice_of_life_school.png";
import imgDark from "@assets/generated_images/anime_poster_dark_fantasy.png";

export default function TagsPage() {
  const params = useParams();
  const tagSlug = params.slug || "Sample-page";
  const tagName = tagSlug.replace(/-/g, " ");

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

  const allTags = ["Anime Hentai", "Anime Porn", "Big Boobs", "Big Tits Hentai", "Blow Job", "Censored", "Creampie", "Free Hentai", "HD", "Hentai", "Hentai Anime", "Hentai Haven", "Hentai Stream", "School", "School Girl", "Uncensored"];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Hash className="h-6 w-6 text-primary" />
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white capitalize" data-testid="heading-tag-title">
            Tag: {tagName}
          </h1>
        </div>

        <p className="text-muted-foreground mb-8" data-testid="text-tag-description">
          Browse all anime tagged with "{tagName}". Find related content and discover new favorites.
        </p>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-anime-list">
              {tagName.toUpperCase()} CONTENT
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
            <h3 className="font-display font-bold text-sm text-muted-foreground mb-4" data-testid="heading-all-tags">
              ALL TAGS
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className={`cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors ${
                    tag.toLowerCase() === tagName.toLowerCase() ? 'bg-primary text-white border-primary' : ''
                  }`}
                  data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tag}
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
