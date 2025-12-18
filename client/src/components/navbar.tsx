import { Link, useLocation } from "wouter";
import { Search, Menu, Home, Flame, Monitor, Lock, LockOpen, Calendar, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const genres = [
  "3D", "Ahegao", "Anal", "Blackmail", "Blowjob", "Bondage", 
  "Creampie", "Cosplay", "NTR", "Dark Skin", "DeepThroat", "Femdom",
  "Harem", "Horny Slut", "Incest", "Lolicon", "Large Breasts", "Public Sex", "Rape", "School Girls", "Tits Fuck", "Uncensored", "Vanilla",
  "Virgins", "X-Ray", "Yuri",  "Dub Hentai", "SUB Hentai"
];

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [, navigate] = useLocation();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?s=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo - Mobile Only */}
        <Link href="/" className="flex items-center gap-2 group md:hidden">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-display font-bold text-xl group-hover:bg-primary/80 transition-colors">
            H
          </div>
          <span className="font-display text-lg font-bold tracking-wider text-white group-hover:text-primary transition-colors">
            HENTAI SAGA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7 md:-ml-4 lg:-ml-8 xl:-ml-[65px]">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors" data-testid="nav-home">
            <Home className="h-4 w-4" />
            Home
          </Link>
          
          <Link href="/trending" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="nav-trending">
            <Flame className="h-4 w-4" />
            Trending
          </Link>
          
          {/* Genres Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="nav-genres">
              <Monitor className="h-4 w-4" />
              Genres
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto bg-card border-white/10">
              <div className="grid grid-cols-2 gap-1 p-2">
                {genres.map((genre) => (
                  <DropdownMenuItem 
                    key={genre} 
                    className="cursor-pointer hover:bg-primary/20 hover:text-primary"
                    data-testid={`nav-genre-${genre.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="text-muted-foreground mr-2">-</span>
                    {genre}
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link href="/censored" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="nav-censored">
            <Lock className="h-4 w-4" />
            Censored
          </Link>
          
          <Link href="/uncensored" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="nav-uncensored">
            <LockOpen className="h-4 w-4" />
            Uncensored
          </Link>
          
          <Link href="/2025" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="nav-2025">
            <Calendar className="h-4 w-4" />
            2025
          </Link>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop Search */}
          <div className="hidden md:flex relative w-auto">
            <div className={`flex items-center gap-2 transition-all duration-300 ease-out ${isSearchOpen ? "w-72" : "w-10"} overflow-hidden`}>
              {isSearchOpen ? (
                <div className="flex items-center gap-2 w-full animate-in slide-in-from-right-4 duration-300">
                  <Input 
                    placeholder="Search anime..." 
                    className="flex-1 pl-3 bg-secondary border-transparent focus-visible:ring-primary text-sm"
                    data-testid="input-search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    autoFocus
                  />
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded gap-1 px-2 flex-shrink-0"
                    onClick={handleSearch}
                    data-testid="button-search-submit"
                  >
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    data-testid="button-search-close"
                    className="flex-shrink-0"
                  >
                    <span className="text-lg">×</span>
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsSearchOpen(true)}
                  data-testid="button-search-open"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Search */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            data-testid="button-search-mobile"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-l border-white/10 overflow-y-auto">
              <div className="flex flex-col gap-4 mt-8">
                {/* Search Input for Mobile */}
                <div className="flex gap-2 mb-4">
                  <Input 
                    placeholder="Search anime..." 
                    className="flex-1 bg-secondary border-transparent focus-visible:ring-primary text-sm"
                    data-testid="input-search-mobile"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <Button 
                    size="icon"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={handleSearch}
                    data-testid="button-search-submit-mobile"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="h-px bg-white/10" />

                {/* Home */}
                <Link href="/" className="flex items-center gap-3 text-lg font-medium text-primary" data-testid="mobile-nav-home">
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                
                {/* Trending */}
                <Link href="/trending" className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-nav-trending">
                  <Flame className="h-5 w-5" />
                  Trending
                </Link>
                
                <div className="h-px bg-white/10 my-2" />
                
                {/* Genres Section */}
                <div className="flex items-center gap-3 text-lg font-medium text-white">
                  <Monitor className="h-5 w-5" />
                  Genres
                </div>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  {genres.map((genre) => (
                    <Link 
                      key={genre} 
                      href={`/genre/${genre.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      data-testid={`mobile-genre-${genre.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className="mr-2">-</span>
                      {genre}
                    </Link>
                  ))}
                </div>
                
                <div className="h-px bg-white/10 my-2" />
                
                {/* Censored */}
                <Link href="/censored" className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-nav-censored">
                  <Lock className="h-5 w-5" />
                  Censored
                </Link>
                
                {/* Uncensored */}
                <Link href="/uncensored" className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-nav-uncensored">
                  <LockOpen className="h-5 w-5" />
                  Uncensored
                </Link>
                
                {/* 2025 */}
                <Link href="/2025" className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-nav-2025">
                  <Calendar className="h-5 w-5" />
                  2025
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </nav>
  );
}
