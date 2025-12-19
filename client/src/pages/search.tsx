import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Extract search query from URL
    // Navbar sends: /s?=query+with+spaces
    const search = window.location.search.substring(1); // Remove leading ?
    if (search.startsWith("=")) {
      // Handle ?=query format
      const query = search.substring(1).replace(/\+/g, " ");
      setSearchQuery(decodeURIComponent(query));
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 py-12">
          {/* Search Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <SearchIcon className="h-6 w-6 text-primary" />
              <h1 className="text-3xl md:text-4xl font-display font-black text-foreground" data-testid="text-search-title">
                Search Results
              </h1>
            </div>
            <p className="text-lg text-muted-foreground" data-testid="text-search-query">
              Results for: <span className="text-primary font-semibold">"{searchQuery}"</span>
            </p>
          </div>

          {/* Results Container */}
          <div className="space-y-4" data-testid="div-search-results">
            <Card className="p-6 text-center" data-testid="card-no-results">
              <div className="space-y-2">
                <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto opacity-50" />
                <p className="text-lg text-muted-foreground" data-testid="text-no-results">
                  No results found for "{searchQuery}"
                </p>
                <p className="text-sm text-muted-foreground/70">
                  Try searching with different keywords or browse our categories
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
