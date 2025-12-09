import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function AgeRestrictionPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
          18+ Age Restriction Policy
        </h1>
        
        <p className="text-muted-foreground mb-2">
          <strong>Effective Date:</strong> December 8, 2025
        </p>
        <p className="text-muted-foreground mb-8">
          <strong>Website:</strong> HentaiSaga.xxx
        </p>

        <Separator className="bg-white/10 mb-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Strict Adult-Only Policy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>HentaiSaga.xxx is STRICTLY for adults aged 18 years or older.</strong>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This Website contains sexually explicit animated content (hentai) that is inappropriate for minors. By accessing this Website, you affirm that you are at least 18 years of age or the age of majority in your jurisdiction, whichever is higher.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Age Requirements</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Minimum Age</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">You MUST be:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>18 years of age or older</strong> in most jurisdictions</li>
            <li><strong>The age of majority</strong> in your specific location (may be 19, 20, or 21 in some areas)</li>
            <li><strong>Legally permitted</strong> to view adult content where you reside</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Jurisdictional Variations</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Age requirements vary by location:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>United States:</strong> 18 years old</li>
            <li><strong>Some U.S. states:</strong> 19 or 21 years old</li>
            <li><strong>Many countries:</strong> 18 years old</li>
            <li><strong>Some countries:</strong> 19, 20, or 21 years old</li>
            <li><strong>Certain jurisdictions:</strong> Adult content may be entirely prohibited</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed"><strong>Your responsibility:</strong> Verify the legal age requirement in your specific location.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Content Warning</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Explicit Adult Content</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">This Website contains:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Sexually explicit animated content</strong> (hentai anime)</li>
            <li><strong>Mature sexual themes</strong> and situations</li>
            <li><strong>Graphic depictions</strong> of sexual acts</li>
            <li><strong>Adult language</strong> and dialogue</li>
            <li><strong>Content depicting fictional characters</strong> in sexual situations</li>
            <li><strong>Material that may be offensive</strong> to some viewers</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Not Suitable For</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">This content is NOT appropriate for:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Anyone under 18 (or applicable age of majority)</li>
            <li>Individuals who find sexual content offensive</li>
            <li>Locations where adult content is prohibited</li>
            <li>Viewing in public spaces</li>
            <li>Work or professional environments</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Age Verification</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">User Attestation</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">When you first visit HentaiSaga.xxx:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>An <strong>age verification page</strong> is displayed</li>
            <li>You must <strong>confirm</strong> you are 18+ to proceed</li>
            <li>This confirmation is <strong>legally binding</strong></li>
            <li>Your confirmation is stored via cookie to prevent repeated popups</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Verification Limitations</h3>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Important:</strong> We rely on user attestation:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>We cannot independently verify your age</li>
            <li>You must honestly confirm your age</li>
            <li>False attestation violates our Terms of Service</li>
            <li>Parents/guardians must prevent minors' access</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Cookie-Based Verification</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Age verification is stored using a browser cookie</li>
            <li>If cookies are cleared, verification is required again</li>
            <li>See our Cookie Policy for details</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Legal Consequences</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">False Representation</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Falsely claiming to be 18+ may result in:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Violation of our Terms of Service</li>
            <li>Violation of laws in your jurisdiction</li>
            <li>Legal consequences for you or your parents/guardians</li>
            <li>Potential criminal charges (depending on location)</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Parental Responsibility</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Parents and guardians are responsible for:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Supervising minors' internet usage</li>
            <li>Implementing parental controls</li>
            <li>Preventing access to adult websites</li>
            <li>Monitoring devices used by minors</li>
            <li>Educating minors about appropriate online behavior</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Why Age Restrictions Exist</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Legal Requirements</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Age restrictions protect:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Minors</strong> from inappropriate content</li>
            <li><strong>The Website</strong> from legal liability</li>
            <li><strong>Society</strong> through responsible content distribution</li>
            <li><strong>Free speech</strong> by demonstrating responsible practices</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Psychological Protection</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Adult content may:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Be psychologically harmful to minors</li>
            <li>Affect developing attitudes toward sexuality</li>
            <li>Create unrealistic expectations</li>
            <li>Expose minors to inappropriate material prematurely</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Prohibited Actions</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Minors Are Prohibited From:</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Accessing this Website</li>
            <li>Viewing any content on this Website</li>
            <li>Misrepresenting their age to gain access</li>
            <li>Bypassing age verification measures</li>
            <li>Sharing content from this Website</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Adult Users Are Prohibited From:</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Sharing Website content with minors</li>
            <li>Allowing minors to access their devices with Website access</li>
            <li>Bypassing age verification on behalf of minors</li>
            <li>Encouraging minors to access the Website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Geographic Restrictions</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Location-Based Legality</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Adult content laws vary globally:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Some countries completely prohibit adult content</li>
            <li>Some regions restrict specific types of content</li>
            <li>Some jurisdictions have additional age requirements</li>
            <li>Local laws always supersede this policy</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">User Responsibility</h3>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>YOU are responsible for:</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Knowing local laws regarding adult content</li>
            <li>Ensuring access is legal in your location</li>
            <li>Complying with all applicable regulations</li>
            <li>Exiting the Website if content is illegal where you are</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Countries with Restrictions</h3>
          <p className="text-muted-foreground leading-relaxed">Adult content may be restricted or prohibited in various countries. Research your local laws before accessing this Website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Educational and Artistic Value</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">While our content is explicit:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Content is <strong>animated artwork</strong> (not live-action)</li>
            <li>Content is <strong>fictional</strong> and created for entertainment</li>
            <li>Content may have artistic or cultural significance in some contexts</li>
            <li>Content is still <strong>adults-only</strong> regardless of artistic merit</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">This does NOT make it appropriate for minors.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">No Minor Content</h2>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>ZERO TOLERANCE POLICY:</strong></p>
          <p className="text-muted-foreground leading-relaxed mb-2">Hentai Saga strictly prohibits:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Content depicting minors in sexual situations</li>
            <li>Content appearing to depict minors in sexual situations</li>
            <li>Content sexualizing or exploiting children in any way</li>
            <li>Any content violating child protection laws</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Reporting</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">If you encounter content that appears to involve minors:</p>
          <p className="text-muted-foreground leading-relaxed"><strong>Report immediately to:</strong> abuse@hentaisaga.xxx</p>
          <p className="text-muted-foreground leading-relaxed">We will investigate and remove such content immediately.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Anonymous Access</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">While we maintain user anonymity:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Age verification is still required</li>
            <li>Anonymity does not permit underage access</li>
            <li>Anonymity does not exempt users from legal requirements</li>
            <li>Honest age attestation is mandatory</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Enforcement</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">How We Enforce Age Restrictions</h3>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Age verification popup</strong> on first visit</li>
            <li><strong>Cookie storage</strong> to prevent repeated verification</li>
            <li><strong>Legal disclaimers</strong> throughout the Website</li>
            <li><strong>Terms of Service</strong> binding requirements</li>
            <li><strong>Parental control recommendations</strong></li>
          </ol>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Limitations</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">We acknowledge that:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Determined minors may bypass verification</li>
            <li>We cannot physically verify user age</li>
            <li>Parents/guardians must take primary responsibility</li>
            <li>Technical limitations exist in age verification</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Third-Party Responsibility</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Embedded Content</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Since we embed third-party content:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Third-party sources maintain their own age restrictions</li>
            <li>We are not responsible for verifying third-party compliance</li>
            <li>Content hosting services should enforce their own policies</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Advertisements</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Advertisements may also be 18+:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Ad networks should respect age targeting</li>
            <li>We cannot control every advertisement displayed</li>
            <li>Adult ads are common on adult websites</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Parental Controls</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We strongly recommend parents and guardians:</p>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Technical Controls</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Install <strong>parental control software</strong></li>
            <li>Enable <strong>router-level filtering</strong></li>
            <li>Use <strong>DNS-based filtering</strong> (OpenDNS, CleanBrowsing)</li>
            <li>Enable <strong>SafeSearch</strong> on search engines</li>
            <li>Use <strong>browser extensions</strong> for content filtering</li>
            <li>Monitor <strong>device usage and history</strong></li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Software Recommendations</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Consider using:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Norton Family</li>
            <li>Qustodio</li>
            <li>Net Nanny</li>
            <li>Bark</li>
            <li>Kaspersky Safe Kids</li>
            <li>Built-in parental controls (iOS Screen Time, Android Family Link)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">See our separate <strong>Parental Controls Policy</strong> for detailed guidance.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Legal Disclaimers</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Website Liability</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">HentaiSaga.xxx:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Requires age verification but cannot guarantee compliance</li>
            <li>Is not liable for minors who bypass verification</li>
            <li>Expects parents/guardians to supervise minors</li>
            <li>Complies with applicable age verification laws</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">User Representations</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">By using this Website, you represent and warrant:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>You are 18+ or the age of majority in your jurisdiction</li>
            <li>Viewing adult content is legal where you are located</li>
            <li>You will not allow minors to access this Website through your device</li>
            <li>You accept all responsibility for your access</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">International Laws</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">Different countries have different regulations:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Most of Europe:</strong> 18+</li>
            <li><strong>United States:</strong> 18+ federally, some states 21+</li>
            <li><strong>Canada:</strong> 18+ or 19+ depending on province</li>
            <li><strong>Australia:</strong> 18+</li>
            <li><strong>United Kingdom:</strong> 18+</li>
            <li><strong>Many Asian countries:</strong> 18+ or prohibited entirely</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">Always verify your local laws.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Workplace and Public Access</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Inappropriate Venues</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">This Website should NOT be accessed:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>In workplaces (risk of termination/legal issues)</li>
            <li>On public computers (risk of exposure to others)</li>
            <li>In public spaces (risk of offending others/legal issues)</li>
            <li>On shared family devices without privacy measures</li>
            <li>In educational institutions</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Professional Consequences</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Accessing adult content at work may result in:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Termination of employment</li>
            <li>Disciplinary action</li>
            <li>Legal liability for your employer</li>
            <li>Hostile work environment claims</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Updates to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">We may update this Age Restriction Policy to:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Comply with changing laws</li>
            <li>Improve age verification methods</li>
            <li>Add additional protections</li>
            <li>Clarify existing policies</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">Continued use after updates constitutes acceptance.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">For questions about age restrictions:</p>
          <p className="text-muted-foreground"><strong>Email:</strong> legal@hentaisaga.xxx</p>
          <p className="text-muted-foreground leading-relaxed mb-2 mt-4">For reporting suspected minor access:</p>
          <p className="text-muted-foreground"><strong>Email:</strong> abuse@hentaisaga.xxx</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Final Warning</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>IF YOU ARE UNDER 18 YEARS OF AGE (or the age of majority in your jurisdiction), YOU MUST LEAVE THIS WEBSITE IMMEDIATELY.</strong>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Continuing to use this Website constitutes your legal affirmation that you meet all age requirements and accept responsibility for your access.
          </p>
        </section>

        <Separator className="bg-white/10 my-8" />

        <p className="text-muted-foreground text-sm mb-4">
          <strong>Last Updated:</strong> December 8, 2025
        </p>
        <p className="text-muted-foreground text-sm font-bold mb-4">
          WARNING: ADULTS ONLY - 18+ YEARS OLD
        </p>
        <p className="text-muted-foreground text-sm">
          By clicking "I am 18+" or continuing to use this Website, you certify under penalty of perjury that you are at least 18 years of age and that viewing adult material is legal in your jurisdiction.
        </p>
      </main>

      <Footer />
    </div>
  );
}
