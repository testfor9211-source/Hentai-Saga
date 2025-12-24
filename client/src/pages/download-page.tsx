import { useState, useEffect } from "react";
import { useParams } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Clock } from "lucide-react";
import { episodeData } from "@/pages/watch-episode";

interface DownloadSource {
  id: number;
  label: string;
  url: string;
  countdown: number;
  isActive: boolean;
  showOpenLink: boolean;
}

interface ButtonColors {
  normal: string;
  hover: string;
  waiting: string;
}

export default function DownloadPage() {
  const params = useParams();
  const slug = params.slug || "Sample-page";
  const episode = params.episode || "episode-1";

  const episodeNumber = episode.replace("episode-", "") || "1";
  const episodeInfo = episodeData[episodeNumber] || episodeData["1"];
  const thumbnail = episodeInfo.thumbnail;
  const downloadLinks = episodeInfo.downloadLinks;

  // Generate random indices for download links (different for each button)
  const getRandomDownloadLink = (sourceId: number) => {
    // Use sourceId as seed for consistent random selection per button
    const randomIndex = (sourceId * 7 + parseInt(episodeNumber)) % downloadLinks.length;
    return downloadLinks[randomIndex];
  };

  // Color schemes for each button
  const buttonColors: Record<number, ButtonColors> = {
    1: {
      normal: "bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500",
      hover: "hover:from-pink-600 hover:via-pink-500 hover:to-pink-600",
      waiting: "bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600"
    },
    2: {
      normal: "bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500",
      hover: "hover:from-cyan-600 hover:via-cyan-500 hover:to-cyan-600",
      waiting: "bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600"
    },
    3: {
      normal: "bg-gradient-to-r from-violet-500 via-violet-400 to-violet-500",
      hover: "hover:from-violet-600 hover:via-violet-500 hover:to-violet-600",
      waiting: "bg-gradient-to-r from-violet-600 via-violet-500 to-violet-600"
    },
    4: {
      normal: "bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500",
      hover: "hover:from-orange-600 hover:via-orange-500 hover:to-orange-600",
      waiting: "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600"
    },
    5: {
      normal: "bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500",
      hover: "hover:from-teal-600 hover:via-teal-500 hover:to-teal-600",
      waiting: "bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600"
    },
  };

  const [sources, setSources] = useState<DownloadSource[]>([
    { id: 1, label: "Download 1", url: getRandomDownloadLink(1), countdown: 0, isActive: false, showOpenLink: false },
    { id: 2, label: "Download 2", url: getRandomDownloadLink(2), countdown: 0, isActive: false, showOpenLink: false },
    { id: 3, label: "Download 3", url: getRandomDownloadLink(3), countdown: 0, isActive: false, showOpenLink: false },
    { id: 4, label: "Download 4", url: getRandomDownloadLink(4), countdown: 0, isActive: false, showOpenLink: false },
    { id: 5, label: "Download 5", url: getRandomDownloadLink(5), countdown: 0, isActive: false, showOpenLink: false },
  ]);

  // Handle countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSources((prevSources) =>
        prevSources.map((source) => {
          if (source.isActive && source.countdown > 0) {
            const newCountdown = source.countdown - 1;
            return {
              ...source,
              countdown: newCountdown,
              showOpenLink: newCountdown === 0 // Show Open Link when countdown reaches 0
            };
          }
          return source;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadClick = (sourceId: number) => {
    // Only reset other countdowns, don't touch showOpenLink
    setSources((prevSources) =>
      prevSources.map((source) =>
        source.id === sourceId 
          ? { ...source, countdown: 15, isActive: true, showOpenLink: false }
          : { ...source, countdown: 0, isActive: false } // Keep showOpenLink intact
      )
    );
  };

  const handleOpenLink = (sourceId: number) => {
    const source = sources.find((s) => s.id === sourceId);
    if (source) {
      // Open the URL
      window.open(source.url, "_blank");
      
      // Reset button state after opening
      setSources((prevSources) =>
        prevSources.map((s) =>
          s.id === sourceId ? { ...s, countdown: 0, isActive: false, showOpenLink: false } : s
        )
      );
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
              {sources.map((source) => {
                const colors = buttonColors[source.id];

                return (
                  <div key={source.id}>
                    {source.showOpenLink ? (
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
                            ? `${colors.waiting} text-white shadow-lg hover:shadow-xl`
                            : `${colors.normal} ${colors.hover} text-white shadow-lg hover:shadow-xl hover:scale-105`
                        }`}
                        data-testid={`button-download-${source.id}`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {source.isActive ? (
                            <>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span className="font-bold">{source.countdown}</span>
                              </div>
                              <span className="text-sm">Seconds Remaining</span>
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
                );
              })}
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
