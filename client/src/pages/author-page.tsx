import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimeCard2 } from "@/components/anime-card-2";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, User, Loader2 } from "lucide-react";
import { useAuthors, useShowsByAuthor } from "@/hooks/use-shows";

export default function AuthorPage() {
  const params = useParams();
  const authorSlug = params.slug || "";
  const authorName = authorSlug.replace(/-/g, " ");

  const { data: authors, isLoading: authorsLoading } = useAuthors();
  const { data: animeList, isLoading: showsLoading } = useShowsByAuthor(authorName);

  if (authorsLoading || showsLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const currentAuthor = authors?.find(a => a.author_name.toLowerCase() === authorName.toLowerCase());

  const authorInfo = {
    name: authorName,
    description: currentAuthor 
      ? `${authorName} is a renowned creator known for producing high-quality anime content. With years of experience in the industry, they have developed a unique style that has garnered a dedicated following.`
      : "Author not found in our database."
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="h-6 w-6 text-primary" />
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white capitalize" data-testid="heading-author-title">
            Author: {authorName}
          </h1>
        </div>

        <p className="text-muted-foreground mb-8" data-testid="text-author-description">
          {authorInfo.description}
        </p>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <h2 className="text-xl font-display font-bold text-white" data-testid="heading-anime-list">
              WORKS BY {authorName.toUpperCase()}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {animeList?.map((show) => (
              <AnimeCard2 
                key={show.show_id}
                show={show}
              />
            ))}
            {(!animeList || animeList.length === 0) && (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                No works found for this author.
              </div>
            )}
          </div>
        </section>

        <section className="mb-8">
          <Card className="p-6 border-white/10">
            <h3 className="font-display font-bold text-sm text-muted-foreground mb-4" data-testid="heading-popular-authors">
              POPULAR AUTHORS
            </h3>
            <div className="flex flex-wrap gap-2">
              {authors?.map((author) => (
                <Link 
                  key={author.author_id} 
                  href={`/author/${author.author_name.replace(/\s+/g, '-')}`}
                >
                  <Badge 
                    variant="outline" 
                    className={`cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors px-3 py-1 text-xs ${
                      author.author_name.toLowerCase() === authorName.toLowerCase() ? 'bg-primary text-white border-primary' : ''
                    }`}
                    data-testid={`badge-author-${author.author_name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {author.author_name}
                  </Badge>
                </Link>
              ))}
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
