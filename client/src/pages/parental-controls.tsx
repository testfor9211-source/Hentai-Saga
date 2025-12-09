import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function ParentalControls() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
          Parental Controls and Protections
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
            HentaiSaga.xxx is strictly for adults 18 years of age or older. We recognize that parents and guardians play the primary role in protecting minors from inappropriate online content. This policy provides guidance on preventing minors' access to adult websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Parental Responsibility</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Primary Obligation</h3>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Parents and guardians are primarily responsible for:</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Supervising minors' internet usage</li>
            <li>Implementing appropriate filtering and controls</li>
            <li>Monitoring devices accessible to minors</li>
            <li>Educating children about online safety</li>
            <li>Taking proactive steps to prevent access to adult content</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Website Limitations</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">While we implement age verification:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Determined minors may bypass basic verification</li>
            <li>Technical age verification has inherent limitations</li>
            <li>Parental involvement is the most effective protection</li>
            <li>We cannot replace parental supervision with technology</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Recommended Protection Methods</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Multi-Layer Approach</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Effective protection requires multiple strategies:</p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Technical controls</strong> (software/hardware filtering)</li>
            <li><strong>Supervision</strong> (monitoring and guidance)</li>
            <li><strong>Education</strong> (teaching appropriate behavior)</li>
            <li><strong>Communication</strong> (open dialogue about internet use)</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Technical Solutions</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">1. Parental Control Software</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Install dedicated parental control applications:</p>

          <h4 className="text-lg font-display font-semibold text-white mb-2">Comprehensive Solutions</h4>
          
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Norton Family</strong> (Windows, Android, iOS)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Website filtering by category</li>
            <li>Time limits and scheduling</li>
            <li>Activity monitoring</li>
            <li>Search supervision</li>
            <li>Free with Norton 360</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Qustodio</strong> (Windows, Mac, Android, iOS, Kindle)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Web filtering with 30+ categories</li>
            <li>Time limits and app blocking</li>
            <li>Social media monitoring</li>
            <li>Real-time location tracking</li>
            <li>Free basic version available</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Net Nanny</strong> (Windows, Mac, Android, iOS)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Internet filtering with AI</li>
            <li>Profanity masking</li>
            <li>Screen time management</li>
            <li>Social media protection</li>
            <li>Subscription required</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Bark</strong> (iOS, Android, Amazon devices)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Monitors texts, emails, social media</li>
            <li>Alerts for concerning content</li>
            <li>Screen time scheduling</li>
            <li>Web filtering</li>
            <li>Subscription-based</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Kaspersky Safe Kids</strong> (Windows, Mac, iOS, Android)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Web filtering</li>
            <li>App usage control</li>
            <li>Screen time management</li>
            <li>GPS location tracking</li>
            <li>Free basic version</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-display font-semibold text-white mb-3">2. Built-In Device Controls</h3>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">Apple Devices (iOS/iPadOS/macOS)</h4>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Screen Time Feature:</strong></p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Open <strong>Settings</strong> → <strong>Screen Time</strong></li>
            <li>Enable <strong>Content & Privacy Restrictions</strong></li>
            <li>Select <strong>Content Restrictions</strong></li>
            <li>Under <strong>Web Content</strong>, choose <strong>Limit Adult Websites</strong></li>
            <li>Add specific sites to <strong>Never Allow</strong> list</li>
            <li>Set passcode to prevent changes</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Additional Steps:</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Disable Safari if restrictions are bypassed</li>
            <li>Enable <strong>Ask to Buy</strong> for app downloads</li>
            <li>Restrict app installations</li>
            <li>Use <strong>Family Sharing</strong> for parental oversight</li>
          </ul>

          <h4 className="text-lg font-display font-semibold text-white mb-2">Android Devices</h4>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Google Family Link:</strong></p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Install <strong>Family Link</strong> app on parent and child devices</li>
            <li>Create child account (under 13) or link existing account</li>
            <li>Enable <strong>Filters on Google Search</strong> (blocks explicit results)</li>
            <li>Approve or block apps from Google Play</li>
            <li>Set screen time limits</li>
            <li>Manage website access through Chrome</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Additional Steps:</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Use <strong>SafeSearch</strong> in all browsers</li>
            <li>Install third-party parental control apps</li>
            <li>Configure <strong>Google Play</strong> restrictions</li>
            <li>Enable <strong>YouTube Restricted Mode</strong></li>
          </ul>

          <h4 className="text-lg font-display font-semibold text-white mb-2">Windows 10/11</h4>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Microsoft Family Safety:</strong></p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Go to <strong>Microsoft Family Safety</strong> website</li>
            <li>Add child's Microsoft account</li>
            <li>Enable <strong>Web browsing</strong> restrictions</li>
            <li>Turn on <strong>Block inappropriate websites</strong></li>
            <li>Add specific adult sites to block list</li>
            <li>View activity reports regularly</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Additional Steps:</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
            <li>Create separate user account for children</li>
            <li>Enable <strong>SmartScreen Filter</strong></li>
            <li>Restrict app and game installations</li>
            <li>Set up time limits</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-display font-semibold text-white mb-3">3. Router-Level Filtering</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">Block content at the network level:</p>

          <h4 className="text-lg font-display font-semibold text-white mb-2">OpenDNS Family Shield</h4>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li><strong>Free service</strong> that blocks adult content</li>
            <li>Works on entire home network</li>
            <li>Blocks access at DNS level</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Setup:</strong></p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Log into your router admin panel</li>
            <li>Find DNS settings</li>
            <li>Change DNS servers to:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Primary: <code className="bg-muted px-1 rounded">208.67.222.123</code></li>
                <li>Secondary: <code className="bg-muted px-1 rounded">208.67.220.123</code></li>
              </ul>
            </li>
            <li>Save and restart router</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Pros:</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Protects all devices on network</li>
            <li>Cannot be easily bypassed by children</li>
            <li>No software installation needed</li>
            <li>Free</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Cons:</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Cannot customize filtering per device</li>
            <li>Tech-savvy teens may change DNS on devices</li>
            <li>May block legitimate sites occasionally</li>
          </ul>

          <h4 className="text-lg font-display font-semibold text-white mb-2">CleanBrowsing</h4>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li><strong>Free and paid tiers</strong> available</li>
            <li>Multiple filtering levels (security, adult, family)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Family Filter DNS:</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Primary: <code className="bg-muted px-1 rounded">185.228.168.168</code></li>
            <li>Secondary: <code className="bg-muted px-1 rounded">185.228.169.168</code></li>
          </ul>

          <h4 className="text-lg font-display font-semibold text-white mb-2">Router Built-In Controls</h4>
          <p className="text-muted-foreground leading-relaxed mb-2">Many modern routers include parental controls:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li><strong>Netgear</strong> (Circle with Disney, Netgear Armor)</li>
            <li><strong>Asus</strong> (AiProtection)</li>
            <li><strong>TP-Link</strong> (Parental Controls)</li>
            <li><strong>Linksys</strong> (Parental Controls)</li>
            <li><strong>Google WiFi/Nest WiFi</strong> (Family Wi-Fi)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">Check your router manual for specific instructions.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-display font-semibold text-white mb-3">4. Browser Extensions</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Install filtering extensions:</p>
          
          <h4 className="text-lg font-display font-semibold text-white mb-2">Chrome Extensions</h4>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li><strong>BlockSite</strong> - Block specific websites and categories</li>
            <li><strong>WebFilter Pro</strong> - Content filtering and time management</li>
            <li><strong>FocusMe</strong> - Website blocking and productivity</li>
          </ul>

          <h4 className="text-lg font-display font-semibold text-white mb-2">Firefox Add-ons</h4>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li><strong>LeechBlock NG</strong> - Block time-wasting sites</li>
            <li><strong>BlockSite</strong> - Website blocker</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed"><strong>Limitations:</strong> Children can disable extensions or use different browsers. Combine with other methods.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-display font-semibold text-white mb-3">5. Internet Service Provider (ISP) Controls</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Some ISPs offer parental control features:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li><strong>Comcast Xfinity</strong> (xFi app parental controls)</li>
            <li><strong>AT&T</strong> (Smart Home Manager)</li>
            <li><strong>Verizon</strong> (Verizon Smart Family)</li>
            <li><strong>Spectrum</strong> (parental controls in mobile app)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">Contact your ISP for available options.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Search Engine Safety</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Google SafeSearch</h3>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Go to <strong>Google Search Settings</strong></li>
            <li>Enable <strong>SafeSearch filters</strong></li>
            <li>Lock SafeSearch (requires sign-in)</li>
            <li>Blocks explicit content in search results</li>
          </ol>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Bing Safe Search</h3>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Go to <strong>Bing Settings</strong></li>
            <li>Enable <strong>Strict</strong> filtering</li>
            <li>Prevents explicit content in results</li>
          </ol>

          <h3 className="text-xl font-display font-semibold text-white mb-3">YouTube Restricted Mode</h3>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Open <strong>YouTube Settings</strong></li>
            <li>Enable <strong>Restricted Mode</strong></li>
            <li>Hides potentially mature content</li>
            <li>Should be enabled on all devices</li>
          </ol>

          <h3 className="text-xl font-display font-semibold text-white mb-3">DuckDuckGo</h3>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4">
            <li>Go to <strong>Settings</strong></li>
            <li>Enable <strong>Safe Search</strong></li>
            <li>Privacy-focused search with filtering</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Social Media and Communication</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">Monitor and control:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Instagram</strong> - Use parental supervision features</li>
            <li><strong>TikTok</strong> - Enable Family Pairing mode</li>
            <li><strong>Snapchat</strong> - Enable Family Center</li>
            <li><strong>Facebook/Messenger</strong> - Supervision tools for under-13</li>
            <li><strong>Discord</strong> - Monitor servers and conversations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Device Placement</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Physical Environment</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Place computers in <strong>common areas</strong> (living room, kitchen)</li>
            <li>Avoid computers in children's bedrooms</li>
            <li>Position screens <strong>facing outward</strong> for visibility</li>
            <li>Supervise device usage, especially for younger children</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Screen Time Rules</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Establish clear rules:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Set specific <strong>hours</strong> for internet use</li>
            <li>No devices <strong>after bedtime</strong></li>
            <li><strong>Device-free meals</strong> and family time</li>
            <li><strong>Earned privilege</strong> approach for older children</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Education and Communication</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Ongoing Dialogue</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Talk openly about <strong>online dangers</strong></li>
            <li>Explain <strong>why restrictions exist</strong></li>
            <li>Encourage children to <strong>report concerns</strong></li>
            <li>Build <strong>trust</strong> so children come to you with problems</li>
            <li>Discuss <strong>healthy sexuality</strong> age-appropriately</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Age-Appropriate Conversations</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Young children</strong> (under 10): Basic internet safety, stranger danger</li>
            <li><strong>Preteens</strong> (10-12): Cyberbullying, inappropriate content, privacy</li>
            <li><strong>Teenagers</strong> (13-17): Sexting risks, relationships, consent, pornography harms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Warning Signs</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">Watch for signs of inappropriate content exposure:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Secretive behavior about online activity</li>
            <li>Clearing browser history frequently</li>
            <li>Using devices late at night</li>
            <li>Behavioral changes</li>
            <li>Advanced sexual knowledge inappropriate for age</li>
            <li>Withdrawal from family activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Bypassing Protection</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Common Bypass Methods</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Tech-savvy children may attempt:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Using <strong>VPNs</strong> to circumvent filters</li>
            <li>Accessing through <strong>mobile data</strong> instead of home WiFi</li>
            <li>Using <strong>proxy websites</strong> or alternative DNS</li>
            <li><strong>Incognito/private browsing</strong> modes</li>
            <li>Friend's devices or public WiFi</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Countering Bypasses</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Monitor <strong>installed apps</strong> regularly</li>
            <li>Block <strong>VPN and proxy apps</strong></li>
            <li>Require <strong>approval</strong> for all app installations</li>
            <li>Use <strong>router-level</strong> controls (harder to bypass)</li>
            <li>Random <strong>device checks</strong></li>
            <li>Maintain <strong>open communication</strong> (more effective than technical controls alone)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Reporting Resources</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Report Child Exploitation</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">If you discover child sexual abuse material (CSAM):</p>
          
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>National Center for Missing & Exploited Children (NCMEC)</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Website: www.cybertipline.org</li>
            <li>Phone: 1-800-THE-LOST (1-800-843-5678)</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-2"><strong>FBI Internet Crime Complaint Center</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Website: www.ic3.gov</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-4"><strong>Local law enforcement</strong> - Contact immediately for urgent concerns</p>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Report to Website</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">If you discover inappropriate content on HentaiSaga.xxx:</p>
          <p className="text-muted-foreground"><strong>Email:</strong> abuse@hentaisaga.xxx</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Resources for Parents</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Educational Resources</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Common Sense Media</strong> (www.commonsensemedia.org)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Age-based media reviews</li>
            <li>Parental guides and tips</li>
            <li>Digital citizenship resources</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-2"><strong>ConnectSafely</strong> (www.connectsafely.org)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Safety tips for parents</li>
            <li>Social media guides</li>
            <li>Privacy and security advice</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Internet Matters</strong> (www.internetmatters.org)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Age-specific advice</li>
            <li>Parental control guides</li>
            <li>Online safety resources</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Helplines and Support</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-2"><strong>Childhelp National Child Abuse Hotline</strong></p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Phone: 1-800-422-4453</li>
            <li>24/7 support and counseling</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-2"><strong>SAMHSA National Helpline</strong> (Substance abuse/mental health)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
            <li>Phone: 1-800-662-4357</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Best Practices Summary</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Comprehensive Protection Strategy</h3>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Install multiple layers</strong> of protection (device + network + software)</li>
            <li><strong>Enable all built-in controls</strong> on devices</li>
            <li><strong>Use DNS filtering</strong> for network-wide protection</li>
            <li><strong>Monitor regularly</strong> but maintain trust</li>
            <li><strong>Educate continuously</strong> about online safety</li>
            <li><strong>Communicate openly</strong> about challenges</li>
            <li><strong>Update protections</strong> as children grow and technology changes</li>
            <li><strong>Lead by example</strong> with your own device usage</li>
            <li><strong>Stay informed</strong> about new apps and platforms</li>
            <li><strong>Adjust strategies</strong> based on child's age and maturity</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Adult Content Blocking</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">To specifically block adult sites like HentaiSaga.xxx:</p>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Manual Blocking</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Add these to your blocking lists:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li><code className="bg-muted px-1 rounded">hentaisaga.xxx</code></li>
            <li><code className="bg-muted px-1 rounded">*.xxx</code> (blocks all .xxx domains, primarily used for adult content)</li>
            <li>Other specific adult sites as discovered</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Category Blocking</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Enable blocking for categories:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
            <li>Adult/Pornography</li>
            <li>Sexually Explicit</li>
            <li>Mature Content</li>
            <li>Hentai/Anime Adult Content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Legal Considerations</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Legal Protections</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Children's Online Privacy Protection Act (COPPA)</strong> - Protects children under 13</li>
            <li><strong>State laws</strong> may provide additional protections</li>
            <li><strong>School internet policies</strong> apply to school-issued devices</li>
          </ul>

          <h3 className="text-xl font-display font-semibold text-white mb-3">Parental Authority</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">Parents have legal authority to:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Monitor children's internet usage</li>
            <li>Install monitoring software</li>
            <li>Access children's accounts and devices</li>
            <li>Set rules and restrictions</li>
            <li>Restrict or remove internet access</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Limitations of This Guide</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">Acknowledgments</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>No solution is 100% effective</li>
            <li>Determined teenagers may find workarounds</li>
            <li>Technology changes rapidly</li>
            <li>Balance protection with privacy and trust</li>
            <li>Professional help may be needed for serious concerns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Support for Parents</h2>
          
          <h3 className="text-xl font-display font-semibold text-white mb-3">If You Need Help</h3>
          <p className="text-muted-foreground leading-relaxed mb-2">If you're struggling with:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
            <li>Technical setup of controls</li>
            <li>Discovering your child accessed inappropriate content</li>
            <li>Addressing concerning behavior</li>
            <li>Navigating difficult conversations</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-2">Consider:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>School counselors</strong> and resources</li>
            <li><strong>Family therapists</strong> specializing in adolescents</li>
            <li><strong>Pediatricians</strong> for health and development concerns</li>
            <li><strong>Parent support groups</strong> online and locally</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">For questions about protecting children from accessing our Website:</p>
          <p className="text-muted-foreground mb-4"><strong>Email:</strong> support@hentaisaga.xxx</p>
          <p className="text-muted-foreground leading-relaxed mb-2">For reporting suspected minor access or exploitation:</p>
          <p className="text-muted-foreground"><strong>Email:</strong> abuse@hentaisaga.xxx</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Our Commitment</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">While HentaiSaga.xxx is an adult website, we:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Support parental efforts to protect children</li>
            <li>Provide this comprehensive guidance</li>
            <li>Implement age verification measures</li>
            <li>Respond promptly to abuse reports</li>
            <li>Comply with child protection laws</li>
            <li>Prohibit any content involving minors</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Final Message to Parents</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Protecting children online requires ongoing effort, open communication, and multiple layers of protection. No technical solution replaces active parental involvement. Stay engaged with your children's online lives, maintain trust through open dialogue, and don't hesitate to seek help when needed.
          </p>
          <p className="text-muted-foreground leading-relaxed font-semibold">
            The best protection is a combination of technology, supervision, education, and communication.
          </p>
        </section>

        <Separator className="bg-white/10 my-8" />

        <p className="text-muted-foreground text-sm mb-4">
          <strong>Last Updated:</strong> December 8, 2025
        </p>
        <p className="text-muted-foreground text-sm">
          <strong>Resources current as of publication date.</strong> Technology and services change frequently. Please verify current methods and software availability.
        </p>
      </main>

      <Footer />
    </div>
  );
}
