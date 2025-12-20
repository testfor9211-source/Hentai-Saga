import { useState, useEffect } from "react";
import { useParams } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DownloadSource {
  id: number;
  label: string;
  url: string;
  countdown: number;
}

export default function DownloadPage() {
  const params = useParams();
  const slug = params.slug || "Sample-page";
  const episode = params.episode || "episode-1";

  // Episode thumbnails (same as in watch-episode)
  const episodeThumbnails: Record<string, string> = {
    "1": "https://yavuzceliker.github.io/sample-images/image-5.jpg",
    "2": "https://yavuzceliker.github.io/sample-images/image-6.jpg",
    "3": "https://yavuzceliker.github.io/sample-images/image-7.jpg",
  };
  
  const episodeNumber = episode.replace("episode-", "") || "1";
  const thumbnail = episodeThumbnails[episodeNumber] || episodeThumbnails["1"];

  const [sources, setSources] = useState<DownloadSource[]>([
    { id: 1, label: "Source 1", url: "https://sample1.com", countdown: 0 },
    { id: 2, label: "Source 2", url: "https://sample2.com", countdown: 0 },
    { id: 3, label: "Source 3", url: "https://sample3.com", countdown: 0 },
    { id: 4, label: "Source 4", url: "https://sample4.com", countdown: 0 },
    { id: 5, label: "Source 5", url: "https://sample5.com", countdown: 0 },
  ]);

  // Handle countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSources((prevSources) =>
        prevSources.map((source) => ({
          ...source,
          countdown: source.countdown > 0 ? source.countdown - 1 : 0,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadClick = (sourceId: number) => {
    setSources((prevSources) =>
      prevSources.map((source) =>
        source.id === sourceId ? { ...source, countdown: 15 } : source
      )
    );

    // After 15 seconds, redirect
    setTimeout(() => {
      const source = sources.find((s) => s.id === sourceId);
      if (source) {
        window.open(source.url, "_blank");
      }
    }, 15000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <Card className="w-full max-w-2xl bg-card border border-white/10 rounded-lg overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Video Thumbnail */}
            <div className="mb-6">
              <img
                src={thumbnail}
                alt={`${slug} - ${episode}`}
                className="w-full aspect-video object-cover rounded-md"
                data-testid="img-episode-thumbnail"
              />
            </div>

            <div className="border-t border-white/10 my-6" />

            {/* Download Buttons */}
            <div className="space-y-3 mb-6">
              {sources.map((source) => (
                <Button
                  key={source.id}
                  onClick={() => {
                    if (source.countdown === 0) {
                      handleDownloadClick(source.id);
                    }
                  }}
                  disabled={source.countdown > 0}
                  className={`w-full py-6 text-base font-semibold rounded-md transition-all ${
                    source.countdown > 0
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl"
                  }`}
                  data-testid={`button-download-source-${source.id}`}
                >
                  {source.countdown > 0 ? (
                    <span className="flex items-center gap-2">
                      <span>Redirecting in {source.countdown}s</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>{source.label}</span>
                    </span>
                  )}
                </Button>
              ))}
            </div>

            <div className="border-t border-white/10 my-6" />

            {/* Disclaimer Text */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                By clicking on any download button, You will be redirected to the third party website. 
                We are not responsible for the content of that website or the consequences it may have on you. 
                For more info kindly read our all policies specially{" "}
                <a href="/Privacy-Policy" className="text-primary hover:text-primary/80 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
