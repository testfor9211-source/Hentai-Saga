import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
          Disclaimer
        </h1>
        
        <p className="text-muted-foreground mb-2">
          <strong>Effective Date:</strong> December 8, 2025
        </p>
        <p className="text-muted-foreground mb-8">
          <strong>Website:</strong> HentaiSaga.xxx
        </p>

        <Separator className="bg-white/10 mb-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">General Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed">
            The information and content available on HentaiSaga.xxx ("the Website") is provided for entertainment purposes only. By using this Website, you acknowledge and agree to the following disclaimers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Content Nature and Origin</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Adult Content Warning</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>This Website contains <strong>adult-oriented content</strong> of a sexually explicit nature</li>
            <li>All content is <strong>animated</strong> (hentai anime) and fictional</li>
            <li>Content is intended for <strong>mature audiences 18+ only</strong></li>
            <li>Content may be offensive to some viewers</li>
            <li>Viewer discretion is strongly advised</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Third-Party Content</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>IMPORTANT:</strong> Hentai Saga does NOT create, produce, or own any video content displayed on this platform.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We <strong>ONLY embed video links</strong> from third-party sources</li>
            <li>We do <strong>NOT host, store, or upload</strong> any videos on our servers</li>
            <li>All content is hosted by <strong>external third-party services</strong></li>
            <li>We act solely as a <strong>linking and aggregation service</strong></li>
            <li>Content availability depends entirely on third-party sources</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">No Warranties</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">"As Is" Provision</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            THE WEBSITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>Warranties of merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Accuracy or completeness</li>
            <li>Uninterrupted or error-free service</li>
            <li>Freedom from viruses or harmful components</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Content Accuracy</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We make NO representations or warranties regarding:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Accuracy of embedded content</li>
            <li>Quality of third-party videos</li>
            <li>Availability or continued access to content</li>
            <li>Correctness of titles, descriptions, or metadata</li>
            <li>Appropriateness of content for any specific purpose</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Limitation of Liability</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Maximum Extent Permitted by Law</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, HENTAI SAGA SHALL NOT BE LIABLE FOR:
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li><strong>Direct damages</strong> arising from use of the Website</li>
            <li><strong>Indirect, incidental, or consequential damages</strong></li>
            <li><strong>Loss of data, profits, or business opportunities</strong></li>
            <li><strong>Damage to devices or software</strong></li>
            <li><strong>Psychological or emotional distress</strong></li>
            <li><strong>Any damages resulting from third-party content</strong></li>
            <li><strong>Actions of third-party websites or services</strong></li>
          </ol>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Third-Party Liability</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are NOT responsible for:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Content hosted on third-party servers</li>
            <li>Actions or omissions of video hosting services</li>
            <li>Advertisements or advertiser actions</li>
            <li>External websites accessed through our platform</li>
            <li>Third-party privacy practices</li>
            <li>Viruses, malware, or harmful code from external sources</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">No Responsibility for Third Parties</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Video Hosting Services</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>We do not control third-party hosting services</li>
            <li>We are not responsible for their uptime, availability, or content policies</li>
            <li>Content may be removed without notice by hosting services</li>
            <li>We make no guarantees about content longevity</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Advertising Networks</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>Third-party advertisers control their own ad content</li>
            <li>We do not endorse advertised products or services</li>
            <li>Clicking ads is at your own risk</li>
            <li>We are not liable for advertiser claims, products, or services</li>
            <li>Advertisement content may change without notice</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">External Links</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Links to external websites are provided for convenience only</li>
            <li>We do not endorse or control external websites</li>
            <li>We are not responsible for external site content or practices</li>
            <li>Visiting external links is at your own risk</li>
            <li>External sites may have different terms and privacy policies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Legal Compliance</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">User Responsibility</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            YOU are solely responsible for:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>Ensuring your use complies with local laws</li>
            <li>Verifying that adult content is legal in your jurisdiction</li>
            <li>Confirming you meet age requirements (18+)</li>
            <li>Your actions while using the Website</li>
            <li>Consequences of accessing content that may be illegal in your location</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Jurisdictional Variations</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Laws regarding adult content vary by location</li>
            <li>Some jurisdictions prohibit or restrict adult content</li>
            <li>We make no claims about legality in specific jurisdictions</li>
            <li>Users must independently verify compliance with local laws</li>
            <li>If adult content is illegal where you are, DO NOT USE THIS WEBSITE</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Intellectual Property</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">No Ownership Claims</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>We do not claim ownership of embedded third-party content</li>
            <li>All content remains property of respective copyright holders</li>
            <li>We do not guarantee that embedded content is properly licensed</li>
            <li>Copyright infringement is the responsibility of content creators/hosts</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">User Responsibility</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You agree:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Not to violate any intellectual property rights</li>
            <li>To report suspected copyright infringement via our DMCA process</li>
            <li>That we are not liable for copyright issues with third-party content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Technical Issues</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">No Guarantees</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We do NOT guarantee:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>Website will be available 24/7</li>
            <li>Freedom from bugs, errors, or interruptions</li>
            <li>Compatibility with all devices or browsers</li>
            <li>Fast loading times or optimal performance</li>
            <li>Embedded videos will play properly</li>
            <li>Links will remain active</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Service Interruptions</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Website may be unavailable due to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Maintenance or updates</li>
            <li>Technical difficulties</li>
            <li>Third-party service outages</li>
            <li>Hosting or server issues</li>
            <li>Network problems</li>
            <li>Force majeure events</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Medical and Psychological Disclaimer</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Content Effects</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>Adult content may not be suitable for all individuals</li>
            <li>Some viewers may find content disturbing or offensive</li>
            <li>We are not responsible for psychological or emotional reactions</li>
            <li>If you experience distress, discontinue use immediately</li>
            <li>Seek professional help if needed</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">No Medical Advice</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>This Website provides no medical or therapeutic advice</li>
            <li>Content is for entertainment only</li>
            <li>Consult healthcare professionals for medical concerns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Privacy Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While we prioritize user privacy:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We cannot control third-party tracking or data collection</li>
            <li>Advertising networks may collect data</li>
            <li>Video hosting services may collect data</li>
            <li>Your ISP can see your browsing activity</li>
            <li>Use VPN or privacy tools for additional anonymity</li>
            <li>See our Privacy Policy for detailed information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Age Verification</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">User Representations</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            By using this Website, you represent:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>You are at least 18 years of age</li>
            <li>You are legally allowed to view adult content in your jurisdiction</li>
            <li>You are accessing the Website voluntarily</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Verification Limitations</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Age verification is based on user attestation</li>
            <li>We cannot definitively verify user age</li>
            <li>Parents/guardians are responsible for preventing minors' access</li>
            <li>See our Parental Controls Policy for restriction tools</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">No Endorsement</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Third-Party Content</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We do NOT endorse:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>Views, opinions, or depictions in embedded content</li>
            <li>Actions, behaviors, or practices shown in content</li>
            <li>Third-party services, products, or advertisers</li>
            <li>Any specific content creator or studio</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Content Neutrality</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We provide access to content but don't endorse its messages</li>
            <li>Content reflects creators' views, not ours</li>
            <li>Inclusion on our platform is not an endorsement</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Modification and Removal</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We reserve the right to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Modify, remove, or add embedded content links at any time</li>
            <li>Change Website features without notice</li>
            <li>Suspend or terminate the Website</li>
            <li>Update this Disclaimer without prior notification</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Indemnification</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You agree to indemnify and hold harmless Hentai Saga from any claims, damages, or expenses arising from:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Your use of the Website</li>
            <li>Your violation of these terms</li>
            <li>Your violation of any laws</li>
            <li>Your violation of third-party rights</li>
            <li>Content you access through the Website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Force Majeure</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are not liable for failures or delays caused by circumstances beyond our reasonable control, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Natural disasters</li>
            <li>War or terrorism</li>
            <li>Internet service disruptions</li>
            <li>Government actions or regulations</li>
            <li>Third-party service failures</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">No Professional Relationship</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Use of this Website does not create any:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Professional relationship</li>
            <li>Partnership or joint venture</li>
            <li>Agency or employment relationship</li>
            <li>Fiduciary duty</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Severability</h2>
          <p className="text-muted-foreground leading-relaxed">
            If any provision of this Disclaimer is found unenforceable, all other provisions remain in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Entire Agreement</h2>
          <p className="text-muted-foreground leading-relaxed">
            This Disclaimer, along with our Terms of Service, Privacy Policy, and other policies, constitutes the complete agreement regarding Website use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For questions about this Disclaimer:
          </p>
          <p className="text-muted-foreground">
            <strong>Email:</strong> legal@hentaisaga.xxx
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Acceptance</h2>
          <p className="text-muted-foreground leading-relaxed">
            BY USING HENTAISAGA.XXX, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS DISCLAIMER AND AGREE TO ALL TERMS AND CONDITIONS HEREIN. IF YOU DO NOT AGREE, DO NOT USE THIS WEBSITE.
          </p>
        </section>

        <Separator className="bg-white/10 my-8" />

        <p className="text-muted-foreground text-sm mb-4">
          <strong>Last Updated:</strong> December 8, 2025
        </p>
        <p className="text-muted-foreground text-sm font-semibold">
          WARNING: This Website contains adult content. Viewer discretion advised. 18+ only.
        </p>
      </main>

      <Footer />
    </div>
  );
}
