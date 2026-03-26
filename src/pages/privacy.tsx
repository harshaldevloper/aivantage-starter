import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - AIVANTAGE</title>
        <meta name="description" content="Privacy Policy for AIVANTAGE AI tools and resources." />
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
          <h1>🔒 Privacy Policy</h1>
          <p className="subtitle">Last Updated: March 26, 2026</p>
        </header>

        <div className="content">
          <h2>1. Introduction</h2>
          <p>AIVANTAGE ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.</p>

          <h2>2. Information We Collect</h2>
          <p><strong>We DO NOT collect or store:</strong></p>
          <ul>
            <li>Personal identification information (name, email, phone)</li>
            <li>Payment information (we use Paddle as Merchant of Record)</li>
            <li>Text or content you analyze with our AI tools</li>
            <li>Browsing history or usage data</li>
          </ul>
          <p><strong>Third-party services may collect:</strong></p>
          <ul>
            <li>Google Analytics: Anonymous usage statistics (if enabled)</li>
            <li>Vercel: Server logs for performance monitoring</li>
            <li>Paddle: Payment information for purchases (we don't see your card details)</li>
          </ul>

          <h2>3. How We Use Information</h2>
          <p>Since we don't collect personal data, we don't use information for marketing, advertising, or profiling. Our services are designed to work without requiring personal information.</p>

          <h2>4. Cookies</h2>
          <p>We may use essential cookies for:</p>
          <ul>
            <li>Session management</li>
            <li>Preference storage (theme, language)</li>
            <li>Analytics (anonymous, aggregated data only)</li>
          </ul>
          <p>You can disable cookies in your browser settings, but some features may not function properly.</p>

          <h2>5. Third-Party Services</h2>
          <p>Our services integrate with:</p>
          <ul>
            <li><strong>Vercel:</strong> Hosting and deployment (privacy: vercel.com/legal/privacy-policy)</li>
            <li><strong>Paddle:</strong> Payment processing (privacy: paddle.com/privacy)</li>
            <li><strong>Google Analytics:</strong> Usage analytics (privacy: policies.google.com/privacy)</li>
            <li><strong>GitHub:</strong> Code hosting (privacy: github.com/site/privacy)</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We implement industry-standard security measures to protect our services:</p>
          <ul>
            <li>HTTPS encryption for all traffic</li>
            <li>Regular security updates</li>
            <li>No storage of sensitive user data</li>
            <li>API keys stored securely (not exposed in frontend code)</li>
          </ul>

          <h2>7. Your Rights</h2>
          <p>Under applicable data protection laws, you have the right to:</p>
          <ul>
            <li>Access any personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>
          <p>Since we don't collect personal data, these rights are limited. Contact us if you have concerns.</p>

          <h2>8. Children's Privacy</h2>
          <p>Our services are not directed to individuals under 13. We do not knowingly collect personal data from children under 13.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>

          <h2>10. Contact Us</h2>
          <p>For questions about this Privacy Policy, please contact us at:</p>
          <ul>
            <li>Email: harshaldevloper@gmail.com</li>
            <li>Location: India</li>
          </ul>

          <h2>11. Compliance</h2>
          <p>This privacy policy is designed to comply with:</p>
          <ul>
            <li>India's Digital Personal Data Protection Act, 2023</li>
            <li>GDPR (General Data Protection Regulation) - EU</li>
            <li>CCPA (California Consumer Privacy Act) - USA</li>
          </ul>
        </div>

        <footer>
          <p>Built with ❤️ by Harshal Lahare | AIVANTAGE</p>
          <p>India 🇮🇳</p>
          <div style={{marginTop: '1rem'}}>
            <a href="/">Home</a> •
            <a href="/shop">Shop</a> •
            <a href="/pricing">Pricing</a> •
            <a href="/terms">Terms</a> •
            <a href="/refund">Refund</a>
          </div>
        </footer>
      </div>
    </>
  );
}
