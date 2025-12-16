import { useState } from "react";
import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimeCard } from "@/components/anime-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VideoPlayer, { PlaylistItem } from "@/components/VideoPlayer";
import { 
  Star, 
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Download,
  List
} from "lucide-react";

import imgFantasy from "@assets/generated_images/anime_poster_fantasy_adventure.png";
import imgMecha from "@assets/generated_images/anime_poster_sci-fi_mecha.png";
import imgSchool from "@assets/generated_images/anime_poster_slice_of_life_school.png";
import imgDark from "@assets/generated_images/anime_poster_dark_fantasy.png";

// Episode-specific video playlists
const defaultVideo = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const episodePlaylists: Record<string, PlaylistItem[]> = {
  "1": [
    { id: 1, title: 'Episode 1 - Main', duration: '23:45', src: defaultVideo },
    { id: 2, title: 'Episode 1 - Alt 1', duration: '23:45', src: defaultVideo },
    { id: 3, title: 'Episode 1 - Alt 2', duration: '23:45', src: defaultVideo },
    { id: 4, title: 'Episode 1 - Backup', duration: '23:45', src: 'https://sample.mp4' },
    { id: 5, title: 'Episode 1 - Mirror', duration: '23:45', src: defaultVideo },
  ],
  "2": [
    { id: 1, title: 'Episode 2 - Main', duration: '24:12', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' },
    { id: 2, title: 'Episode 2 - Alt 1', duration: '24:12', src: defaultVideo },
    { id: 3, title: 'Episode 2 - Alt 2', duration: '24:12', src: defaultVideo },
    { id: 4, title: 'Episode 2 - Backup', duration: '24:12', src: 'https://sample.mp4' },
    { id: 5, title: 'Episode 2 - Mirror', duration: '24:12', src: defaultVideo },
  ],
  "3": [
    { id: 1, title: 'Episode 3 - Main', duration: '24:30', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
    { id: 2, title: 'Episode 3 - Alt 1', duration: '24:30', src: defaultVideo },
    { id: 3, title: 'Episode 3 - Alt 2', duration: '24:30', src: defaultVideo },
    { id: 4, title: 'Episode 3 - Backup', duration: '24:30', src: 'https://sample.mp4' },
    { id: 5, title: 'Episode 3 - Mirror', duration: '24:30', src: defaultVideo },
  ],
};

export default function WatchEpisode() {
  const params = useParams();
  const animeSlug = params.slug || "Sample-page";
  // Parse episode from "episode-1" format
  const episodeParam = params.episode || "episode-1";
  const episodeNumber = episodeParam.replace("episode-", "") || "1";
  
  const [showFullSummary, setShowFullSummary] = useState(false);

  // Get the playlist for the current episode
  const currentPlaylist = episodePlaylists[episodeNumber] || episodePlaylists["1"];
  
  // Get the current episode's thumbnail
  const episodeThumbnails: Record<string, string> = {
    "1": "https://yavuzceliker.github.io/sample-images/image-5.jpg",
    "2": "https://yavuzceliker.github.io/sample-images/image-6.jpg",
    "3": "https://yavuzceliker.github.io/sample-images/image-7.jpg",
  };
  const currentThumbnail = episodeThumbnails[episodeNumber] || episodeThumbnails["1"];

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
    totalEpisodes: 3,
    episodes: [
      { number: 1, title: "Episode 1", date: "February 6, 2025", thumbnail: "https://yavuzceliker.github.io/sample-images/image-5.jpg", duration: "23:45" },
      { number: 2, title: "Episode 2", date: "February 13, 2025", thumbnail: "https://yavuzceliker.github.io/sample-images/image-6.jpg", duration: "24:12" },
      { number: 3, title: "Episode 3", date: "February 20, 2025", thumbnail: "https://yavuzceliker.github.io/sample-images/image-7.jpg", duration: "24:30" },
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
  
  const allGenres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Magic", "Mecha", "Music", "Romance", "Sci-Fi"];

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
        <div className="flex items-center justify-end gap-1.5 mb-4">
          <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-colors" data-testid="button-download">
            <Download className="w-3.5 h-3.5" />
            Download
          </button>
          
          {prevEpisode && (
            <Link href={`/watch/${animeSlug}/episode-${prevEpisode}`}>
              <button className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-md bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-colors" data-testid="button-prev-episode">
                <ChevronLeft className="w-3.5 h-3.5" />
                Prev
              </button>
            </Link>
          )}
          
          <Link href={`/${animeSlug}`}>
            <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-colors" data-testid="button-hentai-info">
              <List className="w-3.5 h-3.5" />
              Hentai Info
            </button>
          </Link>
          
          {nextEpisode && (
            <Link href={`/watch/${animeSlug}/episode-${nextEpisode}`}>
              <button className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-md bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-colors" data-testid="button-next-episode">
                Next
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          )}
        </div>

        {/* Video Player Section */}
        <div className="mb-8" data-testid="video-player">
          <VideoPlayer playlist={currentPlaylist} thumbnail={currentThumbnail} />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <Footer />
    </div>
  );
}
