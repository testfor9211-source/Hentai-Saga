import { Button } from "@/components/ui/button";
import { Play, Info, Plus } from "lucide-react";
import heroImage from "@assets/generated_images/anime_hero_banner_with_cybernetic_city.png";

export function HeroSection() {
  return (
    <div className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10 py-20">
        <div className="max-w-4xl space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              #1 Trending
            </span>
            <span className="text-white/90 text-sm font-medium tracking-wide">Action • Sci-Fi • 2024</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-[0.9] drop-shadow-xl tracking-tight">
            HENTAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">SAGA</span>
          </h1>
          
          <div className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed space-y-6 drop-shadow-md">
            <p className="font-medium">
              Welcome to <span className="text-primary font-bold">Hentai Saga</span>, the ultimate destination for premium free hentai streaming.
              Dive into a massive collection of uncensored hentai videos, anime hentai series, 3D hentai, doujin adaptations, and high-quality HD streams, all available instantly and without restrictions. Enjoy smooth playback, fast loading servers, and an endless world of pleasure, only on HentaiSaga.xxx.
            </p>
            <p className="text-base md:text-lg text-gray-300 border-l-2 border-primary/50 pl-4">
              At Hentai Saga, we believe true freedom comes with privacy.
              That’s why we designed the platform to be 100% anonymous: no comments, no watch history, no watchlists, no tracking, and no personal data stored.
              Just pure enjoyment with zero strings attached.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 gap-2 font-bold text-md shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300 transform hover:-translate-y-1">
              <Play className="h-5 w-5 fill-current" />
              WATCH NOW
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 gap-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
              <Plus className="h-5 w-5" />
              ADD TO LIST
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
