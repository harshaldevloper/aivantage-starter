import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - AIVANTAGE</title>
        <meta name="description" content="Terms of Service for AIVANTAGE AI tools and resources." />
      </Head>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh; color: #fff;
        }
        .container { max-width: 900px; margin: 0 auto; padding: 2rem; }
        header { text-align: center; padding: 3rem 0; }
        h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .subtitle { font-size: 1rem; opacity: 0.8; }
        .content {
          background: rgba(255,255,255,0.1); backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2); border-radius: 20px;
          padding: 3rem; margin: 2rem 0; line-height: 1.8;
        }
        .content h2 { font-size: 1.8rem; margin: 2rem 0 1rem; color: #f0f0f0; }
        .content p { margin-bottom: 1rem; opacity: 0.9; }
        .content ul { margin: 1rem 0 1rem 2rem; }
        .content li { margin-bottom: 0.5rem; opacity: 0.9; }
        footer { text-align: center; padding: 3rem 0; opacity: 0.9; }
        footer a { color: #fff; text-decoration: none; margin: 0 0.5rem; }
        @media (max-width: 768px) {
          h1 { font-size: 1.8rem; }
          .content { padding: 2rem; }
        }
      `}</style>

      <div className="container">
        <header>
          <h1>⚖️ Terms of Service</h1>
          <p className="subtitle">Last Updated: March 26, 2026</p>
        </header>

        <div className="content">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using AIVANTAGE (https://aivantage-starter.vercel.app), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

          <h2>2. Description of Service</h2>
          <p>AIVANTAGE provides free AI tools, templates, prompts, and educational resources for creators and developers. Our services include:</p>
          <ul>
            <li>AI automation guides and tutorials</li>
            <li>Free AI tools (text analyzer, content generator, prompt optimizer, code assistant)</li>
            <li>Prompt libraries and templates</li>
            <li>Educational content about AI automation</li>
          </ul>

          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Use the services only for lawful purposes</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
            <li>Not use the services to harm, threaten, or harass others</li>
            <li>Not distribute malware or malicious code</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>All content, trademarks, logos, and intellectual property on AIVANTAGE are owned by Harshal Lahare / AIVANTAGE. You may not use, reproduce, or distribute our content without explicit permission, except for personal, non-commercial use.</p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>AIVANTAGE is provided "as is" without any warranties, express or implied. We do not guarantee that:</p>
          <ul>
            <li>The services will be uninterrupted or error-free</li>
            <li>Results from AI tools will be accurate or suitable for your needs</li>
            <li>The services will meet your specific requirements</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>AIVANTAGE shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the services. Our total liability shall not exceed the amount you paid (if any) for the specific service.</p>

          <h2>7. Third-Party Links</h2>
          <p>Our services may contain links to third-party websites. We are not responsible for the content or practices of any third-party sites and encourage you to review their terms and privacy policies.</p>

          <h2>8. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the services after changes constitutes acceptance of the new terms.</p>

          <h2>9. Termination</h2>
          <p>We may terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.</p>

          <h2>10. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

          <h2>11. Contact Information</h2>
          <p>For questions about these Terms of Service, please contact us at: harshaldevloper@gmail.com</p>
        </div>

        <footer>
          <p>Built with ❤️ by Harshal Lahare | AIVANTAGE</p>
          <p>India 🇮🇳</p>
          <div style={{marginTop: '1rem'}}>
            <a href="/">Home</a> •
            <a href="/shop">Shop</a> •
            <a href="/pricing">Pricing</a> •
            <a href="/privacy">Privacy</a> •
            <a href="/refund">Refund</a>
          </div>
        </footer>
      </div>
    </>
  );
}
