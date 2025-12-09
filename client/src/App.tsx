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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Sample-page" component={SamplePage} />
      <Route path="/watch/:slug/:episode" component={WatchEpisode} />
      <Route path="/Privacy-Policy" component={PrivacyPolicy} />
      <Route path="/Terms-of-Service" component={TermsOfService} />
      <Route path="/DMCA-Copyright-Policy" component={DMCACopyrightPolicy} />
      <Route path="/USC-2257" component={USC2257} />
      <Route path="/Cookie-Policy" component={CookiePolicy} />
      <Route path="/Disclaimer" component={Disclaimer} />
      <Route path="/Advertisement-Policy" component={AdvertisementPolicy} />
      <Route path="/18-Age-Restriction-Policy" component={AgeRestrictionPolicy} />
      <Route path="/Parental-Controls" component={ParentalControls} />
      <Route path="/Login" component={Login} />
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
