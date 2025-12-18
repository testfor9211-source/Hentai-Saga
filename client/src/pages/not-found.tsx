import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ChevronLeft, Zap } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 w-full flex items-center justify-center overflow-hidden relative">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
          {/* Error Code with Glow */}
          <div className="mb-8 space-y-4">
            <div className="inline-block">
              <div className="text-9xl md:text-[150px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary drop-shadow-lg animate-in fade-in slide-in-from-top-10 duration-700" data-testid="text-error-code">
                404
              </div>
              <div className="h-1 w-32 mx-auto mt-2 bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)]" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-3 mb-8 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
            <h1 className="text-4xl md:text-5xl font-display font-black text-foreground leading-tight" data-testid="text-not-found-title">
              Connection <span className="text-primary">Lost</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed" data-testid="text-not-found-description">
              The page you're searching for has disappeared into the digital void. This content doesn't exist in our streaming universe.
            </p>
          </div>

          {/* Status Messages */}
          <div className="mb-10 space-y-2 bg-secondary/50 border border-primary/30 rounded-md p-4 backdrop-blur-sm animate-in fade-in delay-200" data-testid="card-error-status">
            <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
              <Zap className="h-4 w-4" />
              <span>Error Code: 404 | Page Not Found</span>
            </div>
            <p className="text-xs text-muted-foreground">The requested URL does not exist on this server</p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center animate-in fade-in delay-300" data-testid="div-action-buttons">
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 gap-2 font-bold text-md shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              data-testid="button-go-home"
            >
              <ChevronLeft className="h-5 w-5" />
              Back to Home
            </Button>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
