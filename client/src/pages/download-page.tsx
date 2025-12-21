import { useState, useEffect } from "react";
import { useParams } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

interface DownloadSource {
  id: number;
  label: string;
  url: string;
  countdown: number;
  isActive: boolean;
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
    { id: 1, label: "Download 1", url: "https://sample1.com", countdown: 0, isActive: false },
    { id: 2, label: "Download 2", url: "https://sample2.com", countdown: 0, isActive: false },
    { id: 3, label: "Download 3", url: "https://sample3.com", countdown: 0, isActive: false },
    { id: 4, label: "Download 4", url: "https://sample4.com", countdown: 0, isActive: false },
    { id: 5, label: "Download 5", url: "https://sample5.com", countdown: 0, isActive: false },
  ]);

  // Handle countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSources((prevSources) =>
        prevSources.map((source) => ({
          ...source,
          countdown: source.isActive && source.countdown > 0 ? source.countdown - 1 : source.countdown,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadClick = (sourceId: number) => {
    // Reset all other sources and set the current one as active
    setSources((prevSources) =>
      prevSources.map((source) =>
        source.id === sourceId 
          ? { ...source, countdown: 15, isActive: true }
          : { ...source, countdown: 0, isActive: false }
      )
    );
  };

  const handleOpenLink = (sourceId: number) => {
    const source = sources.find((s) => s.id === sourceId);
    if (source) {
      // Reset button state
      setSources((prevSources) =>
        prevSources.map((s) =>
          s.id === sourceId ? { ...s, countdown: 0, isActive: false } : s
        )
      );
      // Open the URL
      window.open(source.url, "_blank");
    }
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
                <div key={source.id}>
                  {source.isActive && source.countdown === 0 ? (
                    // Show "Open Link" button after countdown completes
                    <Button
                      onClick={() => handleOpenLink(source.id)}
                      className="w-full py-6 text-base font-semibold rounded-md bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                      data-testid={`button-open-link-${source.id}`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <ArrowRight className="h-5 w-5" />
                        <span>Open Link</span>
                      </span>
                    </Button>
                  ) : (
                    // Show download button or countdown
                    <Button
                      onClick={() => {
                        if (!source.isActive) {
                          handleDownloadClick(source.id);
                        }
                      }}
                      disabled={source.isActive}
                      className={`w-full py-6 text-base font-semibold rounded-md transition-all transform ${
                        source.isActive
                          ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg cursor-wait"
                          : "bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105"
                      }`}
                      data-testid={`button-download-${source.id}`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {source.isActive ? (
                          <>
                            <span className="inline-block h-2 w-2 bg-white rounded-full animate-pulse" />
                            <span>Wait {source.countdown}s</span>
                          </>
                        ) : (
                          <>
                            <Download className="h-5 w-5" />
                            <span>{source.label}</span>
                          </>
                        )}
                      </span>
                    </Button>
                  )}
                </div>
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
