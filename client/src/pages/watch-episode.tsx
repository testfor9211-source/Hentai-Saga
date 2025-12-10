import { useState } from "react";
import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimeCard } from "@/components/anime-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Download
} from "lucide-react";

import imgFantasy from "@assets/generated_images/anime_poster_fantasy_adventure.png";
import imgMecha from "@assets/generated_images/anime_poster_sci-fi_mecha.png";
import imgSchool from "@assets/generated_images/anime_poster_slice_of_life_school.png";
import imgDark from "@assets/generated_images/anime_poster_dark_fantasy.png";

export default function WatchEpisode() {
  const params = useParams();
  const animeSlug = params.slug || "Sample-page";
  // Parse episode from "episode-1" format
  const episodeParam = params.episode || "episode-1";
  const episodeNumber = episodeParam.replace("episode-", "") || "1";
  
  const [showFullSummary, setShowFullSummary] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const animeData = {
    title: "Kanojo Face The Animation",
    alternativeTitle: "彼女フェイス THE ANIMATION",
    coverImage: imgFantasy,
    rating: 3.6,
    totalRatings: "4.1K",
    views: "4651598",
    studio: "Pink Pineapple",
    genres: ["Romance", "Drama", "School", "Slice of Life"],
    tags: ["HD", "Subbed"],
    releaseYear: "2025",
    favorites: "2,510",
    currentEpisode: parseInt(episodeNumber),
    totalEpisodes: 2,
    episodes: [
      { number: 1, title: "Episode 1", date: "February 6, 2025", thumbnail: imgSchool, duration: "23:45" },
      { number: 2, title: "Episode 2", date: "February 13, 2025", thumbnail: imgMecha, duration: "24:12" },
    ],
    summary: `"Kanojo Face The Animation" is an anime series that delves into the intricate dynamics of relationships. In this episode, viewers are introduced to a narrative that intertwines passion with complex character interactions. The episode centers around the protagonist's evolving connection with a significant female character, exploring themes of love, understanding, and the nuances of personal boundaries. The animation quality is notable, with detailed character designs and fluid motion that enhance the storytelling.`,
    relatedAnime: [
      { title: "Midnight Chronicles", image: imgDark, episode: "4", rating: "8.9", type: "TV" },
      { title: "Shadow Covenant", image: imgFantasy, episode: "3", rating: "9.2", type: "TV" },
      { title: "Steel Angel", image: imgMecha, episode: "6", rating: "8.7", type: "OVA" },
      { title: "Cherry Blossom Arc", image: imgSchool, episode: "2", rating: "9.0", type: "Movie" },
    ]
  };

  const currentEpisode = animeData.episodes.find(ep => ep.number === animeData.currentEpisode) || animeData.episodes[0];
  const prevEpisode = animeData.currentEpisode > 1 ? animeData.currentEpisode - 1 : null;
  const nextEpisode = animeData.currentEpisode < animeData.totalEpisodes ? animeData.currentEpisode + 1 : null;

  const allTags = ["Anime", "Subbed", "HD", "Romance", "Drama", "School", "Slice of Life", "Animation", "Series", "Popular"];

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
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-1" data-testid="heading-title">
          {animeData.title} - Episode {episodeNumber}
        </h1>
        <p className="text-muted-foreground mb-6" data-testid="text-alternative-title">
          {animeData.alternativeTitle}
        </p>

        {/* Episode Navigation - Above Video Player */}
        <div className="flex items-center justify-between mb-4">
          {prevEpisode ? (
            <Link href={`/watch/${animeSlug}/episode-${prevEpisode}`}>
              <Button variant="outline" className="gap-2" data-testid="button-prev-episode">
                <ChevronLeft className="w-4 h-4" />
                Episode {prevEpisode}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          
          <Button variant="outline" className="gap-2" data-testid="button-download">
            <Download className="w-4 h-4" />
            Download
          </Button>
          
          {nextEpisode ? (
            <Link href={`/watch/${animeSlug}/episode-${nextEpisode}`}>
              <Button variant="outline" className="gap-2" data-testid="button-next-episode">
                Episode {nextEpisode}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Video Player Section */}
        <div className="mb-8">
          <div 
            className="relative w-full aspect-video bg-black rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setIsPlaying(!isPlaying)}
            data-testid="video-player"
          >
            {/* Video Thumbnail/Placeholder */}
            <img 
              src={currentEpisode.thumbnail} 
              alt={`${animeData.title} Episode ${episodeNumber}`}
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white fill-white ml-1" />
                </div>
              </div>
            )}

            {/* Video Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <div className="flex items-center justify-between text-white text-sm">
                <span data-testid="text-episode-duration">{currentEpisode.duration}</span>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">HD</span>
                  <span className="text-muted-foreground">SUB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <Card className="p-6 border-white/10 mb-8">
          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-4">
            {renderStars(animeData.rating)}
            <span className="text-2xl font-bold text-white ml-2" data-testid="text-rating-number">
              {animeData.rating.toFixed(1)}
            </span>
            <span className="text-muted-foreground ml-2">({animeData.totalRatings} ratings)</span>
          </div>

          {/* Info Grid */}
          <div className="space-y-3">
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Views</span>
              <span className="text-muted-foreground" data-testid="text-views">
                {animeData.views} Total views
              </span>
            </div>
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Studio</span>
              <span className="text-muted-foreground" data-testid="text-studio">
                {animeData.studio}
              </span>
            </div>
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Genre(s)</span>
              <span className="text-muted-foreground" data-testid="text-genres">
                {animeData.genres.join(", ")}
              </span>
            </div>
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Release</span>
              <span className="text-muted-foreground" data-testid="text-release">
                {animeData.releaseYear}
              </span>
            </div>
            <div className="flex">
              <span className="text-primary font-medium w-28 flex-shrink-0">Episodes</span>
              <span className="text-muted-foreground" data-testid="text-total-episodes">
                {animeData.currentEpisode} / {animeData.totalEpisodes}
              </span>
            </div>
            
            {/* Quality Badge */}
            <div className="flex justify-center py-4 gap-2">
              <Badge 
                variant="outline" 
                className="px-6 py-2 text-base border-primary text-primary"
                data-testid="badge-quality"
              >
                HD Quality
              </Badge>
              <Badge 
                variant="outline" 
                className="px-6 py-2 text-base border-primary text-primary"
                data-testid="badge-subbed"
              >
                Subbed
              </Badge>
            </div>
          </div>
        </Card>

        {/* All Episodes Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-all-episodes">
              ALL EPISODES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {animeData.episodes.map((episode) => (
              <Link 
                key={episode.number}
                href={`/watch/${animeSlug}/episode-${episode.number}`}
              >
                <Card 
                  className={`flex items-center gap-4 p-3 hover-elevate cursor-pointer border-white/10 ${
                    episode.number === animeData.currentEpisode ? 'border-primary bg-primary/10' : ''
                  }`}
                  data-testid={`card-episode-${episode.number}`}
                >
                  <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded-md relative">
                    <img 
                      src={episode.thumbnail} 
                      alt={episode.title}
                      className="w-full h-full object-cover"
                    />
                    {episode.number === animeData.currentEpisode && (
                      <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white truncate" data-testid={`text-episode-title-${episode.number}`}>
                      {episode.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-episode-date-${episode.number}`}>
                      {episode.date}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground flex-shrink-0">
                    {episode.duration}
                  </div>
                </Card>
              </Link>
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

        {/* Related Anime Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-related">
              YOU MAY ALSO LIKE
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {animeData.relatedAnime.map((anime, index) => (
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
      </main>

      <Footer />
    </div>
  );
}
