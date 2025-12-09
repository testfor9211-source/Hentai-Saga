import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function DMCACopyrightPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
          DMCA Copyright Policy
        </h1>
        
        <p className="text-muted-foreground mb-2">
          <strong>Effective Date:</strong> December 8, 2025
        </p>
        <p className="text-muted-foreground mb-8">
          <strong>Website:</strong> HentaiSaga.xxx
        </p>

        <Separator className="bg-white/10 mb-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hentai Saga respects the intellectual property rights of others and expects users to do the same. This DMCA (Digital Millennium Copyright Act) Policy explains how we handle copyright infringement claims.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Important Notice About Our Service</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">We Do Not Host Content</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            It is critical to understand that Hentai Saga:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
            <li>Does NOT host, store, or upload any video files on our servers</li>
            <li>Does NOT own or create the content displayed on our platform</li>
            <li>ONLY embeds video links from third-party hosting services</li>
            <li>Acts solely as a linking and aggregation service</li>
          </ul>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Implications for Copyright Claims</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Since we do not host content:
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Content is hosted by third parties</strong> - The actual video files are stored on external servers</li>
            <li><strong>We embed links only</strong> - Our website displays these videos through embedded players</li>
            <li><strong>Removal is limited</strong> - We can only remove the embedded link, not the original content</li>
            <li><strong>Contact the source</strong> - Copyright holders should also contact the actual hosting service</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Filing a DMCA Takedown Notice</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you believe that content linked on Hentai Saga infringes your copyright, you may submit a DMCA takedown notice.
          </p>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Requirements for Valid DMCA Notice</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Your notice must include ALL of the following:
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-4 ml-4">
            <li><strong>Physical or electronic signature</strong> of the copyright owner or authorized representative</li>
            <li><strong>Identification of the copyrighted work</strong> claimed to have been infringed, or if multiple works, a representative list</li>
            <li><strong>Identification of the infringing material</strong> including:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>The specific URL(s) on HentaiSaga.xxx where the embedded content appears</li>
                <li>Sufficient detail to locate the material</li>
              </ul>
            </li>
            <li><strong>Your contact information</strong> including:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Full name</li>
                <li>Mailing address</li>
                <li>Telephone number</li>
                <li>Email address</li>
              </ul>
            </li>
            <li><strong>A statement</strong> that you have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law</li>
            <li><strong>A statement under penalty of perjury</strong> that the information in the notice is accurate and you are authorized to act on behalf of the copyright owner</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Where to Send DMCA Notices</h2>
          <p className="text-muted-foreground mb-2">
            <strong>Email:</strong> dmca@hentaisaga.xxx
          </p>
          <p className="text-muted-foreground mb-4">
            <strong>Subject Line:</strong> DMCA Takedown Notice
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Please send all required information in a single communication.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">What Happens After We Receive a Notice</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Our Response Process:</h3>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Review</strong> - We will review your notice for completeness</li>
            <li><strong>Verification</strong> - We verify the notice meets DMCA requirements</li>
            <li><strong>Action</strong> - If valid, we will remove the embedded link to the content</li>
            <li><strong>Timeline</strong> - We typically respond within 5-10 business days</li>
          </ol>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Important Limitations:</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We can only remove the embedded link from our website</li>
            <li>We cannot remove content from the original hosting source</li>
            <li>The content may still exist on third-party servers</li>
            <li>We recommend contacting the actual content host directly</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Counter-Notification</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you believe content was removed in error, you may file a counter-notification.
          </p>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Requirements for Counter-Notice</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Your counter-notice must include:
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Your physical or electronic signature</li>
            <li>Identification of the material removed and its prior location</li>
            <li>A statement under penalty of perjury that removal was a mistake or misidentification</li>
            <li>Your name, address, and telephone number</li>
            <li>A statement consenting to jurisdiction of Federal District Court</li>
            <li>A statement that you will accept service of process from the complainant</li>
          </ol>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Send Counter-Notices To:</h3>
          <p className="text-muted-foreground mb-2">
            <strong>Email:</strong> dmca@hentaisaga.xxx
          </p>
          <p className="text-muted-foreground">
            <strong>Subject Line:</strong> DMCA Counter-Notification
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Repeat Infringer Policy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While we do not maintain user accounts or track individuals:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We will remove links to content from repeat infringers</li>
            <li>Domains or sources with multiple valid complaints may be blocked</li>
            <li>We reserve the right to block specific third-party sources</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Misrepresentation</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Please note that under 17 U.S.C. § 512(f):
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Making false claims in a DMCA notice may result in liability for damages</li>
            <li>This includes attorney's fees and costs</li>
            <li>Ensure your notice is accurate and made in good faith</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">No Legal Advice</h2>
          <p className="text-muted-foreground leading-relaxed">
            This policy provides general information only and does not constitute legal advice. Consult an attorney for specific legal guidance regarding copyright matters.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Third-Party Hosting Services</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">We Strongly Recommend:</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Since the actual content is hosted elsewhere, copyright holders should:
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Identify the actual hosting service</strong> by examining the embedded video player</li>
            <li><strong>Contact that hosting service directly</strong> with your DMCA notice</li>
            <li><strong>Request removal from the source</strong> to ensure content is actually deleted</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed">
            This approach is more effective as it removes content at the source rather than just the embedded link.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Information We Can Provide</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Upon valid DMCA request, we can provide:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>The URL where content was embedded on our site</li>
            <li>The source URL of the embedded content (if identifiable)</li>
            <li>The date the content was linked on our platform</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We cannot provide:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>User information (we don't collect it)</li>
            <li>Upload information (we don't host content)</li>
            <li>Ownership details of third-party sources</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">False Claims</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Submitting false or fraudulent DMCA claims may result in:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Legal liability under federal law</li>
            <li>Damages and attorney's fees</li>
            <li>Criminal penalties for perjury</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Only submit claims for content you own or are authorized to represent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Modifications to Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to modify this DMCA Policy at any time. Changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Good Faith Compliance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hentai Saga operates in good faith to comply with copyright law. We will:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Respond promptly to valid notices</li>
            <li>Remove infringing links when properly notified</li>
            <li>Respect the rights of copyright holders</li>
            <li>Follow DMCA procedures as required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For all DMCA-related matters:
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>DMCA Agent</strong>
          </p>
          <p className="text-muted-foreground mb-2">
            <strong>Email:</strong> dmca@hentaisaga.xxx
          </p>
          <p className="text-muted-foreground mb-4">
            <strong>Website:</strong> HentaiSaga.xxx
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Please clearly mark all correspondence as "DMCA Notice" or "DMCA Counter-Notice" as applicable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed">
            HentaiSaga.xxx is a linking service only. We do not host, store, or control third-party content. While we will remove links upon valid notice, we cannot guarantee removal of content from its original source. For complete removal, contact the actual hosting provider.
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
