import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AnimeCard } from "@/components/anime-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Flame, Trophy } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Import generated assets
import imgFantasy from "@assets/generated_images/anime_poster_fantasy_adventure.png";
import imgMecha from "@assets/generated_images/anime_poster_sci-fi_mecha.png";
import imgSchool from "@assets/generated_images/anime_poster_slice_of_life_school.png";
import imgDark from "@assets/generated_images/anime_poster_dark_fantasy.png";

export default function Home() {
  // Mock Data
  const trendingAnime = [
    { title: "Blade of the Spirit", image: imgFantasy, episode: "12", rating: "9.8", type: "TV" },
    { title: "Mecha Horizon Zero", image: imgMecha, episode: "05", rating: "9.5", type: "TV" },
    { title: "School Days Remix", image: imgSchool, episode: "08", rating: "8.9", type: "TV" },
    { title: "Shadow Covenant", image: imgDark, episode: "24", rating: "9.2", type: "TV" },
    { title: "Crystal Warrior", image: imgFantasy, episode: "03", rating: "8.7", type: "OVA" },
    { title: "Steel Angel", image: imgMecha, episode: "11", rating: "8.5", type: "TV" },
    { title: "Midnight Soul", image: imgDark, episode: "09", rating: "9.0", type: "TV" },
    { title: "Cherry Blossom Arc", image: imgSchool, episode: "01", rating: "9.1", type: "Movie" },
  ];

  const topTen = [
    { rank: 1, title: "Blade of the Spirit", views: "1.2M", image: imgFantasy },
    { rank: 2, title: "Shadow Covenant", views: "980K", image: imgDark },
    { rank: 3, title: "Mecha Horizon", views: "850K", image: imgMecha },
    { rank: 4, title: "School Days", views: "720K", image: imgSchool },
    { rank: 5, title: "Neon Genesis", views: "650K", image: imgMecha },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <HeroSection />

        <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="flex-1 space-y-12">
            
            {/* Recent Updates Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Flame className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-display font-bold text-white">RECENTLY UPLOADED</h2>
                </div>
                <Button variant="link" className="text-muted-foreground hover:text-primary group">
                  View All <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {trendingAnime.map((anime, i) => (
                  <AnimeCard key={i} {...anime} />
                ))}
              </div>
            </section>

            {/* Test 1 Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Flame className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl font-display font-bold text-white">Test 1</h2>
                </div>
                <Button variant="link" className="text-muted-foreground hover:text-primary group">
                  View All <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {trendingAnime.slice(0, 4).map((anime, i) => (
                  <AnimeCard key={`test1-${i}`} {...anime} />
                ))}
              </div>
            </section>

            {/* Test 2 Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Flame className="h-6 w-6 text-pink-500" />
                  <h2 className="text-2xl font-display font-bold text-white">Test 2</h2>
                </div>
                <Button variant="link" className="text-muted-foreground hover:text-primary group">
                  View All <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {trendingAnime.slice(0, 4).map((anime, i) => (
                  <AnimeCard key={`test2-${i}`} {...anime} />
                ))}
              </div>
            </section>

            {/* Test 3 Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Flame className="h-6 w-6 text-purple-500" />
                  <h2 className="text-2xl font-display font-bold text-white">Test 3</h2>
                </div>
                <Button variant="link" className="text-muted-foreground hover:text-primary group">
                  View All <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {trendingAnime.slice(0, 4).map((anime, i) => (
                  <AnimeCard key={`test3-${i}`} {...anime} />
                ))}
              </div>
            </section>

            {/* Test 4 Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Flame className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-display font-bold text-white">Test 4</h2>
                </div>
                <Button variant="link" className="text-muted-foreground hover:text-primary group">
                  View All <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {trendingAnime.slice(0, 4).map((anime, i) => (
                  <AnimeCard key={`test4-${i}`} {...anime} />
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-8">
            
            {/* Top Airing Widget */}
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <h3 className="font-display font-bold text-lg text-white">TOP HENTAI</h3>
              </div>

              <div className="space-y-4">
                {topTen.map((item) => (
                  <div key={item.rank} className="flex items-center gap-4 group cursor-pointer">
                    <div className={`
                      w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold rounded
                      ${item.rank === 1 ? 'bg-yellow-500 text-black' : 
                        item.rank === 2 ? 'bg-gray-400 text-black' :
                        item.rank === 3 ? 'bg-amber-700 text-black' : 'bg-muted text-muted-foreground'}
                    `}>
                      {item.rank}
                    </div>
                    <div className="relative w-12 h-16 flex-shrink-0 overflow-hidden rounded bg-muted">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-white truncate group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.views} views</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6 bg-white/10" />
              
              <div className="space-y-2">
                <h4 className="font-display font-bold text-sm text-muted-foreground mb-3">GENRES</h4>
                <div className="flex flex-wrap gap-2">
                  {["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Magic", "Mecha", "Music", "Romance", "Sci-Fi"].map((genre) => (
                    <Badge key={genre} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

          </aside>
        </div>
        
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
                <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms</a>
                <a href="#" className="hover:text-primary transition-colors">DMCA</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
