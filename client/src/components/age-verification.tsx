import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react"; // Using Zap as a replacement for the bolt logo

export function AgeVerification() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already verified
    const isVerified = localStorage.getItem("age-verified");
    if (!isVerified) {
      setIsOpen(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem("age-verified", "true");
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleExit = () => {
    // Try to go back, otherwise redirect to Google
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "https://www.google.com";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop with heavy blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-md p-6 md:p-8 mx-4 bg-black border border-white/10 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="font-display font-bold text-white text-xl tracking-wider">HENTAI</span>
          <Zap className="h-8 w-8 text-primary fill-primary animate-pulse" />
          <span className="font-display font-bold text-white text-xl tracking-wider">SAGA</span>
        </div>

        <h2 className="text-3xl font-bold text-white text-center mb-4">Age Verification</h2>

        <p className="text-gray-300 text-center text-sm leading-relaxed mb-8">
          This website contains age-restricted materials including nudity and explicit depictions of sexual activity. By entering, you affirm that you are at least 18 years of age or the age of majority in the jurisdiction you are accessing the website from and you consent to viewing sexually explicit content.
        </p>

        <div className="flex flex-col gap-3">
          <Button 
            onClick={handleEnter}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-base tracking-wide rounded uppercase transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            I am 18 or older - ENTER
          </Button>
          
          <Button 
            onClick={handleExit}
            variant="ghost" 
            className="w-full h-12 text-gray-400 hover:text-white hover:bg-white/5 font-medium text-sm uppercase"
          >
            I am under 18 - EXIT
          </Button>
        </div>
      </div>
    </div>
  );
}
