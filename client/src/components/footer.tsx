import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card mt-12">
      <div className="container mx-auto px-4">
        {/* Desktop Footer */}
        <div className="hidden md:block py-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                  H
                </div>
                <span className="font-display text-xl font-bold text-white">HENTAI SAGA</span>
              </div>
              <p className="text-muted-foreground text-sm">
                © 2024 Hentai Saga. All rights reserved.
              </p>
            </div>
            <Separator className="bg-white/10" />
            <div className="flex items-center justify-center gap-8 text-muted-foreground text-sm">
              <a href="/Privacy-Policy" className="hover:text-primary transition-colors" data-testid="link-privacy">Privacy</a>
              <a href="/Terms-of-Service" className="hover:text-primary transition-colors" data-testid="link-terms">Terms</a>
              <a href="/DMCA-Copyright-Policy" className="hover:text-primary transition-colors" data-testid="link-dmca">DMCA</a>
              <a href="/USC-2257" className="hover:text-primary transition-colors" data-testid="link-usa2257">USA 2257</a>
              <a href="/Cookie-Policy" className="hover:text-primary transition-colors" data-testid="link-cookies">Cookies</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-disclaimer">Disclaimer</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-ads-policy">Ads Policy</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-18-policy">18+ Policy</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-parental-controls">Parental Controls</a>
            </div>
          </div>
        </div>
        
        {/* Mobile Footer */}
        <div className="md:hidden py-8">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                H
              </div>
              <span className="font-display text-lg font-bold text-white">HENTAI SAGA</span>
            </div>
            <p className="text-muted-foreground text-xs">
              © 2024 Hentai Saga. All rights reserved.
            </p>
            <Separator className="bg-white/10 w-full" />
            <div className="grid grid-cols-3 gap-x-6 gap-y-3 text-muted-foreground text-xs text-center">
              <a href="/Privacy-Policy" className="hover:text-primary transition-colors" data-testid="link-privacy-mobile">Privacy</a>
              <a href="/Terms-of-Service" className="hover:text-primary transition-colors" data-testid="link-terms-mobile">Terms</a>
              <a href="/DMCA-Copyright-Policy" className="hover:text-primary transition-colors" data-testid="link-dmca-mobile">DMCA</a>
              <a href="/USC-2257" className="hover:text-primary transition-colors" data-testid="link-usa2257-mobile">USA 2257</a>
              <a href="/Cookie-Policy" className="hover:text-primary transition-colors" data-testid="link-cookies-mobile">Cookies</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-disclaimer-mobile">Disclaimer</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-ads-policy-mobile">Ads Policy</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-18-policy-mobile">18+ Policy</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-parental-controls-mobile">Parental Controls</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}