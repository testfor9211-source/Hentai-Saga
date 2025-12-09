import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
          Privacy Policy
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
            At Hentai Saga, we believe true freedom comes with privacy. We are committed to protecting your anonymity and ensuring your browsing experience remains completely private. This Privacy Policy explains our practices regarding data collection, usage, and protection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Information We Do NOT Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We have designed our platform to be 100% anonymous. We do NOT collect, store, or track:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Personal identification information (name, email, phone number, address)</li>
            <li>User accounts or registration data</li>
            <li>Watch history or viewing records</li>
            <li>Watchlists or favorites</li>
            <li>Comments or user-generated content</li>
            <li>IP addresses for tracking purposes</li>
            <li>Browsing behavior or analytics</li>
            <li>Search queries or preferences</li>
            <li>Device fingerprints or unique identifiers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Information We DO Collect (Minimal)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We only use cookies for essential website functionality:
          </p>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Essential Cookies</h3>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Age Verification Cookie:</strong> Stores your confirmation that you are 18+ to prevent repeated age verification popups</li>
            <li><strong>Display Preference Cookie:</strong> Remembers your choice between dark mode and light mode</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed">
            These cookies contain no personal information and are stored locally on your device only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Third-Party Content</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hentai Saga embeds video content from third-party sources. We do not host, store, or upload any videos on our servers. When you view content:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Video players are embedded from external sources</li>
            <li>Those third-party services may have their own privacy policies</li>
            <li>We have no control over or access to data collected by these third parties</li>
            <li>We recommend reviewing the privacy policies of any third-party services you interact with</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Advertising</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We display advertisements to support our free service. Please note:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Advertisements are provided by third-party advertising networks</li>
            <li>These networks may use cookies or similar technologies</li>
            <li>Advertising content may include 18+ material</li>
            <li>We do not control or have access to data collected by advertisers</li>
            <li>Ad networks may track your interactions with their advertisements</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We are not responsible for the privacy practices of advertising partners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Data Storage and Security</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We do not maintain user databases</li>
            <li>We do not store any video files on our servers</li>
            <li>We do not log user activity or create user profiles</li>
            <li>All browsing on Hentai Saga is completely anonymous</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">External Links</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our website may contain links to external websites through:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Advertisements</li>
            <li>Embedded video players</li>
            <li>Third-party services</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We are not responsible for the privacy practices or content of external websites. We encourage you to review the privacy policies of any website you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hentai Saga is strictly for adults 18 years of age or older. We do not knowingly collect information from anyone under 18. If you are under 18, you must leave this website immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Your Privacy Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            Since we do not collect personal data, there is no personal information to access, modify, or delete. Your browsing remains completely anonymous.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Cookie Management</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can manage or delete cookies through your browser settings:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Clearing cookies will reset your age verification and display preferences</li>
            <li>Disabling cookies may affect website functionality</li>
            <li>Most browsers allow you to block third-party cookies while keeping essential ones</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Changes to Privacy Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the website constitutes acceptance of any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Do Not Track Signals</h2>
          <p className="text-muted-foreground leading-relaxed">
            Since we do not track users, Do Not Track (DNT) browser settings are inherently respected. We do not collect tracking data regardless of DNT settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">International Users</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hentai Saga is accessible globally. By using our website, you acknowledge that our anonymous approach applies regardless of your location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For privacy-related questions or concerns, you may contact us at:
          </p>
          <p className="text-muted-foreground">
            <strong>Email:</strong> privacy@hentaisaga.xxx
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Your Consent</h2>
          <p className="text-muted-foreground leading-relaxed">
            By using HentaiSaga.xxx, you consent to this Privacy Policy and our anonymous, no-tracking approach to providing adult entertainment content.
          </p>
        </section>

        <Separator className="bg-white/10 my-8" />

        <p className="text-muted-foreground text-sm">
          <strong>Last Updated:</strong> December 8, 2025
        </p>
      </main>

      <Footer />
    </div>
  );
}
