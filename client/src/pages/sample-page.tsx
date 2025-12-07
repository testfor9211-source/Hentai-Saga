import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  ChevronRight, 
  ChevronDown,
  Heart,
  ListPlus
} from "lucide-react";

import imgFantasy from "@assets/generated_images/anime_poster_fantasy_adventure.png";
import imgMecha from "@assets/generated_images/anime_poster_sci-fi_mecha.png";
import imgSchool from "@assets/generated_images/anime_poster_slice_of_life_school.png";
import imgDark from "@assets/generated_images/anime_poster_dark_fantasy.png";

export default function SamplePage() {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const animeData = {
    title: "Kanojo Face The Animation",
    alternativeTitle: "彼女フェイス THE ANIMATION",
    coverImage: imgFantasy,
    rating: 3.6,
    totalRatings: "4.1K",
    views: "4651598",
    studio: "Pink Pineapple",
    genres: ["BBW", "Ecchi", "Femdom", "Hentai School"],
    tags: ["Censored"],
    releaseYear: "2025",
    favorites: "2,510",
    episodes: [
      { number: 2, title: "Episode 2", date: "February 6, 2025", thumbnail: imgMecha },
      { number: 1, title: "Episode 1", date: "February 6, 2025", thumbnail: imgSchool },
    ],
    summary: `"Kanojo Face The Animation" is an adult anime series that delves into the intricate dynamics of intimate relationships. In episode 1, viewers are introduced to a narrative that intertwines passion with complex character interactions. The episode centers around the protagonist's evolving connection with a significant female character, exploring themes of desire, consent, and the nuances of personal boundaries. The animation quality is notable, with detailed character designs and fluid motion that enhance the storytelling. The episode's pacing allows for a deep exploration of the characters' emotions, providing a balance between explicit scenes and narrative development. The musical score complements the visual elements, adding depth to the viewing experience.`,
    relatedAnime: [
      { title: "Bible Black Gaiden 2", image: imgDark },
      { title: "Shadow Covenant", image: imgFantasy },
      { title: "Steel Angel", image: imgMecha },
      { title: "Cherry Blossom Arc", image: imgSchool },
    ]
  };

  const allGenres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Magic", "Mecha", "Music", "Romance", "Sci-Fi"];
  
  const allTags = ["Anime Hentai", "Anime Porn", "Big Boobs", "Big Tits Hentai", "Blow Job", "Censored", "Creampie", "Free Hentai", "HD", "Hentai", "Hentai Anime", "Hentai Haven", "Hentai Stream", "School", "School Girl"];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />);
      } else if (i - rating < 1 && i - rating > 0) {
        stars.push(<Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500/50" />);
      } else {
        stars.push(<Star key={i} className="h-5 w-5 text-muted-foreground" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="breadcrumb-nav">
          <a href="/" className="hover:text-primary transition-colors" data-testid="link-home">Home</a>
          <ChevronRight className="h-4 w-4" />
          <a href="/anime" className="hover:text-primary transition-colors" data-testid="link-anime">All Hentai</a>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white" data-testid="text-current-anime">{animeData.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-1" data-testid="heading-title">
          {animeData.title}
        </h1>
        <p className="text-muted-foreground mb-6" data-testid="text-alternative-title">
          {animeData.alternativeTitle}
        </p>

        {/* Poster Image */}
        <div className="flex justify-center mb-8">
          <div className="w-48 md:w-56">
            <img 
              src={animeData.coverImage} 
              alt={animeData.title}
              className="w-full rounded-lg shadow-lg"
              data-testid="img-poster"
            />
          </div>
        </div>

        {/* Info Box */}
        <Card className="p-6 border-white/10 mb-8">
          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-4">
            {renderStars(animeData.rating)}
            <span className="text-2xl font-bold text-white ml-2" data-testid="text-rating-number">
              {Math.floor(animeData.rating)}
            </span>
          </div>

          {/* Info Grid */}
          <div className="space-y-3">
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Fapped</span>
              <span className="text-muted-foreground" data-testid="text-fapped">
                Average {animeData.rating} / 5 out of {animeData.totalRatings}
              </span>
            </div>
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Viewed</span>
              <span className="text-muted-foreground" data-testid="text-viewed">
                {animeData.views} Total views
              </span>
            </div>
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Alternative</span>
              <span className="text-muted-foreground" data-testid="text-alternative">
                {animeData.alternativeTitle}
              </span>
            </div>
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Author(s)</span>
              <span className="text-muted-foreground" data-testid="text-author">
                {animeData.studio}
              </span>
            </div>
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Genre(s)</span>
              <span className="text-muted-foreground" data-testid="text-genres">
                {animeData.genres.join(", ")}
              </span>
            </div>
            
            {/* Censored Badge */}
            <div className="flex justify-center py-4">
              <Badge 
                variant="outline" 
                className="px-8 py-2 text-base border-primary text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors"
                data-testid="badge-censored"
              >
                Censored
              </Badge>
            </div>
            
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Release</span>
              <span className="text-muted-foreground" data-testid="text-release">
                {animeData.releaseYear}
              </span>
            </div>
          </div>

          <Separator className="my-6 bg-white/10" />

          {/* Action Buttons */}
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-2 cursor-pointer group" data-testid="button-add-list">
              <ListPlus className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground">Add to list</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer group" data-testid="button-favorite">
              <Heart className="h-8 w-8 text-primary fill-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-muted-foreground text-center">
                {animeData.favorites} Users add this<br />as Favorite
              </span>
            </div>
          </div>
        </Card>

        {/* Watch Episodes Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-episodes">
              WATCH EPISODE HENTAI
            </h2>
          </div>

          <div className="space-y-4">
            {animeData.episodes.map((episode) => (
              <div 
                key={episode.number}
                className="flex items-center gap-4 hover-elevate cursor-pointer p-2 rounded-lg"
                data-testid={`row-episode-${episode.number}`}
              >
                <div className="w-28 h-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img 
                    src={episode.thumbnail} 
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white" data-testid={`text-episode-title-${episode.number}`}>
                    {episode.title}
                  </h3>
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-episode-date-${episode.number}`}>
                  {episode.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-summary">
              SUMMARY
            </h2>
          </div>

          <div className="text-muted-foreground leading-relaxed">
            <p data-testid="text-summary">
              {showFullSummary ? animeData.summary : animeData.summary.slice(0, 200) + "..."}
            </p>
            <button 
              onClick={() => setShowFullSummary(!showFullSummary)}
              className="flex items-center gap-1 mt-3 text-white font-medium hover:text-primary transition-colors"
              data-testid="button-show-more-summary"
            >
              {showFullSummary ? "Show less" : "Show more"}
              <ChevronDown className={`h-4 w-4 transition-transform ${showFullSummary ? "rotate-180" : ""}`} />
            </button>
          </div>
        </section>

        {/* See More Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-related">
              SEE MORE
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {animeData.relatedAnime.map((anime, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover-elevate cursor-pointer border-white/10 group"
                data-testid={`card-related-${index}`}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={anime.image} 
                    alt={anime.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                    <h3 className="font-bold text-white text-sm line-clamp-2" data-testid={`text-related-title-${index}`}>
                      {anime.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tags Section */}
        <section className="mb-8">
          <Card className="p-6 border-white/10">
            <h3 className="font-display font-bold text-sm text-muted-foreground mb-4" data-testid="heading-tags-box">
              TAGS
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        {/* Genres Section */}
        <section className="mb-8">
          <Card className="p-6 border-white/10">
            <h3 className="font-display font-bold text-sm text-muted-foreground mb-4" data-testid="heading-genres-box">
              GENRES
            </h3>
            <div className="flex flex-wrap gap-2">
              {allGenres.map((genre) => (
                <Badge 
                  key={genre} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  data-testid={`badge-genre-${genre.toLowerCase()}`}
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-card py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                H
              </div>
              <span className="font-display text-xl font-bold text-white">HENTAI SAGA</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Hentai Saga. All rights reserved.
            </p>
            <div className="flex gap-6 text-muted-foreground text-sm">
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-privacy">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-terms">Terms</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-dmca">DMCA</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
