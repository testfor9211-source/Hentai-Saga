import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AgeVerification } from "@/components/age-verification";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import SamplePage from "@/pages/sample-page";
import WatchEpisode from "@/pages/watch-episode";
import GenrePage from "@/pages/genre-page";
import TagsPage from "@/pages/tags-page";
import AuthorPage from "@/pages/author-page";
import SeriesPage from "@/pages/series-page";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import DMCACopyrightPolicy from "@/pages/dmca-copyright-policy";
import USC2257 from "@/pages/usc-2257";
import CookiePolicy from "@/pages/cookie-policy";
import Disclaimer from "@/pages/disclaimer";
import AdvertisementPolicy from "@/pages/advertisement-policy";
import AgeRestrictionPolicy from "@/pages/age-restriction-policy";
import ParentalControls from "@/pages/parental-controls";
import Login from "@/pages/login";
import SearchPage from "@/pages/search";
import DownloadPage from "@/pages/download-page";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/watch/sample-page" component={SamplePage} />
      <Route path="/s" component={SearchPage} />
      <Route path="/watch/:slug/:episode" component={WatchEpisode} />
      <Route path="/download/:slug/:episode" component={DownloadPage} />
      <Route path="/genre/:slug" component={GenrePage} />
      <Route path="/tag/:slug" component={TagsPage} />
      <Route path="/author/:slug" component={AuthorPage} />
      <Route path="/series/:slug" component={SeriesPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/dmca-copyright-policy" component={DMCACopyrightPolicy} />
      <Route path="/usc-2257" component={USC2257} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/advertisement-policy" component={AdvertisementPolicy} />
      <Route path="/18-age-restriction-policy" component={AgeRestrictionPolicy} />
      <Route path="/parental-controls" component={ParentalControls} />
      <Route path="/login" component={Login} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AgeVerification />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
