import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
          Cookie Policy
        </h1>
        
        <p className="text-muted-foreground mb-2">
          <strong>Effective Date:</strong> December 8, 2025
        </p>
        <p className="text-muted-foreground mb-8">
          <strong>Website:</strong> HentaiSaga.xxx
        </p>

        <Separator className="bg-white/10 mb-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            This Cookie Policy explains how Hentai Saga uses cookies and similar technologies on our website. We are committed to maintaining your privacy and use cookies minimally and only for essential functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">What Are Cookies?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a website. They allow the website to remember your preferences and improve your browsing experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">How We Use Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Unlike most websites, Hentai Saga uses cookies <strong>ONLY</strong> for essential functionality. We use a minimal approach to respect your privacy.
          </p>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Essential Cookies We Use</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We only use TWO types of cookies:
          </p>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">1. Age Verification Cookie</h4>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Purpose:</strong> Remembers that you have confirmed you are 18+ years of age</li>
            <li><strong>Benefit:</strong> Prevents the age verification popup from appearing on every visit</li>
            <li><strong>Duration:</strong> Persistent (remains until you clear your browser cookies)</li>
            <li><strong>Data Stored:</strong> Simple boolean flag (yes/no) - no personal information</li>
            <li><strong>Name Example:</strong> `age_verified` or similar</li>
          </ul>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">2. Display Preference Cookie</h4>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Purpose:</strong> Remembers your choice between dark mode and light mode</li>
            <li><strong>Benefit:</strong> Maintains your preferred viewing experience across visits</li>
            <li><strong>Duration:</strong> Persistent (remains until you clear your browser cookies)</li>
            <li><strong>Data Stored:</strong> Display preference value (dark/light) - no personal information</li>
            <li><strong>Name Example:</strong> `theme_preference` or similar</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">What We DON'T Use</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hentai Saga does NOT use:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Analytics cookies</li>
            <li>Tracking cookies</li>
            <li>Marketing cookies</li>
            <li>Social media cookies</li>
            <li>Performance monitoring cookies</li>
            <li>User behavior tracking</li>
            <li>Personalization cookies (beyond theme preference)</li>
            <li>Cross-site tracking</li>
            <li>Session cookies for user accounts (we have no accounts)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Third-Party Cookies</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Advertising Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While WE only use two essential cookies, third-party advertisers may place their own cookies:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Advertising networks</strong> display ads on our site and may use cookies</li>
            <li><strong>Ad targeting cookies</strong> may be used by advertisers to show relevant ads</li>
            <li><strong>Ad performance cookies</strong> may track ad clicks and impressions</li>
            <li>We have <strong>NO control</strong> over third-party advertising cookies</li>
            <li>We do <strong>NOT receive</strong> data from advertiser cookies</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Embedded Content Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When you view embedded videos:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Third-party video players</strong> may set their own cookies</li>
            <li><strong>Video hosting services</strong> have their own cookie policies</li>
            <li>We have <strong>NO control</strong> over these third-party cookies</li>
            <li>We do <strong>NOT receive</strong> data from video player cookies</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Important Note</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are not responsible for cookies set by:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Advertising networks</li>
            <li>Video hosting services</li>
            <li>Any external websites you visit through our platform</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Please review the privacy and cookie policies of these third-party services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Cookie Data and Privacy</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">What Cookie Data Contains</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our cookies contain:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Age verification:</strong> Simple confirmation flag only</li>
            <li><strong>Theme preference:</strong> Light or dark mode selection only</li>
            <li><strong>NO personal information:</strong> No names, emails, addresses, or identifying data</li>
            <li><strong>NO tracking data:</strong> No browsing history, IP addresses, or behavior tracking</li>
            <li><strong>NO cross-site data:</strong> Our cookies work only on HentaiSaga.xxx</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Why We're Different</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most adult websites use extensive tracking and analytics. We don't. Our approach:
          </p>
          <ul className="list-none text-muted-foreground space-y-2 ml-4">
            <li>✓ 100% anonymous browsing</li>
            <li>✓ No user profiles or accounts</li>
            <li>✓ No watch history tracking</li>
            <li>✓ No behavioral analytics</li>
            <li>✓ Minimal cookie usage</li>
            <li>✓ Maximum privacy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Managing Cookies</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">How to Control Cookies</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You have full control over cookies on your device:
          </p>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">Browser Settings</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most browsers allow you to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>View cookies stored on your device</li>
            <li>Delete specific cookies</li>
            <li>Delete all cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Block all third-party cookies</li>
            <li>Receive notifications when cookies are set</li>
          </ul>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">Clearing Our Cookies</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you delete our cookies:
          </p>
          <ul className="list-none text-muted-foreground space-y-2 ml-4 mb-4">
            <li>✓ Your privacy is maintained (we don't track you anyway)</li>
            <li>⚠ Age verification popup will appear again on next visit</li>
            <li>⚠ Display preference (dark/light mode) will reset to default</li>
          </ul>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">Blocking Our Cookies</h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you block our cookies:
          </p>
          <ul className="list-none text-muted-foreground space-y-2 ml-4">
            <li>⚠ Age verification popup will appear on every page visit</li>
            <li>⚠ Display preference won't be saved between sessions</li>
            <li>✓ Website will still function (content remains accessible)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Browser-Specific Instructions</h2>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">Google Chrome:</h4>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Settings → Privacy and Security → Cookies and other site data</li>
            <li>See all cookies and site data → Search for "hentaisaga.xxx"</li>
          </ol>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">Mozilla Firefox:</h4>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Settings → Privacy & Security → Cookies and Site Data</li>
            <li>Manage Data → Search for "hentaisaga.xxx"</li>
          </ol>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">Safari:</h4>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Preferences → Privacy → Manage Website Data</li>
            <li>Search for "hentaisaga.xxx"</li>
          </ol>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">Microsoft Edge:</h4>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4">
            <li>Settings → Cookies and site permissions → Manage and delete cookies</li>
            <li>See all cookies and site data → Search for "hentaisaga.xxx"</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Do Not Track (DNT)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Since we don't track users, Do Not Track signals are inherently respected:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We don't collect tracking data regardless of DNT settings</li>
            <li>Our minimal cookies are essential functionality only</li>
            <li>Third-party cookies are controlled by those parties, not us</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Cookie Lifespan</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Our Cookies</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Type:</strong> Persistent cookies</li>
            <li><strong>Duration:</strong> Remain until you manually delete them</li>
            <li><strong>Expiration:</strong> No automatic expiration (to preserve preferences)</li>
            <li><strong>Renewal:</strong> Updated when you change settings</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Third-Party Cookies</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Lifespan varies</strong> depending on the third-party service</li>
            <li><strong>Refer to</strong> third-party cookie policies for specific information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Legal Basis for Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use cookies based on:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Legitimate interest:</strong> Essential functionality (age verification, display preference)</li>
            <li><strong>User consent:</strong> By continuing to use our site, you consent to essential cookies</li>
            <li><strong>Compliance:</strong> Minimal use exceeds most privacy law requirements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">GDPR Compliance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For users in the European Union:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Our cookies are essential for website functionality</li>
            <li>We use minimal data and no tracking</li>
            <li>You have the right to refuse cookies (though this affects functionality)</li>
            <li>We don't transfer cookie data to third parties</li>
            <li>Third-party cookies are controlled by those parties</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">CCPA Compliance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For California users:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We don't sell personal information</li>
            <li>Our cookies contain no personal information</li>
            <li>Third-party advertising cookies are subject to their own policies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hentai Saga is for adults 18+ only. We don't:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Knowingly collect data from minors</li>
            <li>Target advertising to minors</li>
            <li>Use cookies to track anyone, including minors</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            If you're under 18, leave this site immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Updates to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may update this Cookie Policy to reflect:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Changes in cookie usage</li>
            <li>Legal or regulatory changes</li>
            <li>Website functionality changes</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Check this page periodically. Continued use after changes constitutes acceptance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Transparency Commitment</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We believe in radical transparency:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We only use 2 essential cookies</li>
            <li>We don't hide tracking in technical jargon</li>
            <li>We clearly explain what we do (and don't do)</li>
            <li>We respect your privacy above all</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Questions about our cookie usage?
          </p>
          <p className="text-muted-foreground">
            <strong>Email:</strong> privacy@hentaisaga.xxx
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Your Privacy Matters</h2>
          <p className="text-muted-foreground leading-relaxed">
            At Hentai Saga, we believe true freedom comes with privacy. That's why we've built a platform that respects your anonymity and uses cookies only when absolutely necessary for basic functionality.
          </p>
        </section>

        <Separator className="bg-white/10 my-8" />

        <p className="text-muted-foreground text-sm mb-4">
          <strong>Last Updated:</strong> December 8, 2025
        </p>
        <p className="text-muted-foreground text-sm">
          <strong>Summary:</strong> We use only 2 cookies (age verification + theme preference). No tracking. No analytics. No user data. Just pure privacy.
        </p>
      </main>

      <Footer />
    </div>
  );
}
