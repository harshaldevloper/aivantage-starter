import Head from 'next/head';

export default function Refund() {
  return (
    <>
      <Head>
        <title>Refund Policy - AIVANTAGE</title>
        <meta name="description" content="Refund Policy for AIVANTAGE digital products." />
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
        .highlight {
          background: rgba(255,255,255,0.2);
          padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;
        }
        footer { text-align: center; padding: 3rem 0; opacity: 0.9; }
        footer a { color: #fff; text-decoration: none; margin: 0 0.5rem; }
        @media (max-width: 768px) {
          h1 { font-size: 1.8rem; }
          .content { padding: 2rem; }
        }
      `}</style>

      <div className="container">
        <header>
          <h1>💰 Refund Policy</h1>
          <p className="subtitle">Last Updated: March 26, 2026</p>
        </header>

        <div className="content">
          <div className="highlight">
            <strong>📌 Quick Summary:</strong> We offer a 30-day money-back guarantee for all digital products. If you're not satisfied, contact us within 30 days and we'll refund 100% of your purchase.
          </div>

          <h2>1. Our Guarantee</h2>
          <p>AIVANTAGE stands behind the quality of our digital products. We offer:</p>
          <ul>
            <li><strong>30-Day Money-Back Guarantee:</strong> Full refund within 30 days of purchase</li>
            <li><strong>No Questions Asked:</strong> We trust our customers</li>
            <li><strong>Fast Processing:</strong> Refunds processed within 5-10 business days</li>
          </ul>

          <h2>2. Eligible Products</h2>
          <p>This refund policy applies to all AIVANTAGE digital products:</p>
          <ul>
            <li>AI Prompt Libraries</li>
            <li>Notion Templates</li>
            <li>AI Tools Directory</li>
            <li>Template Club Subscriptions</li>
            <li>Custom Consultation Services</li>
          </ul>

          <h2>3. How to Request a Refund</h2>
          <p>To request a refund, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> harshaldevloper@gmail.com</li>
            <li><strong>Subject Line:</strong> Refund Request - [Product Name]</li>
            <li><strong>Include:</strong> Your order number, product name, and reason (optional)</li>
          </ul>
          <p>We'll respond within 24-48 hours and process your refund promptly.</p>

          <h2>4. Refund Timeline</h2>
          <ul>
            <li><strong>Within 30 days:</strong> Full refund (100% of purchase price)</li>
            <li><strong>After 30 days:</strong> Case-by-case basis (contact us)</li>
            <li><strong>Processing time:</strong> 5-10 business days to your original payment method</li>
          </ul>

          <h2>5. Subscription Cancellations</h2>
          <p>For recurring subscriptions (e.g., Template Club):</p>
          <ul>
            <li>Cancel anytime from your Paddle account dashboard</li>
            <li>Cancellation takes effect at the end of the current billing period</li>
            <li>No refunds for partial months</li>
            <li>You retain access until the end of the paid period</li>
          </ul>

          <h2>6. Non-Refundable Items</h2>
          <p>The following are not eligible for refunds:</p>
          <ul>
            <li>Free products (Pay What You Want with $0 payment)</li>
            <li>Products downloaded more than 30 days ago (unless defective)</li>
            <li>Consultation services already delivered</li>
          </ul>

          <h2>7. Defective Products</h2>
          <p>If you receive a defective or non-functional product:</p>
          <ul>
            <li>Contact us immediately</li>
            <li>We'll attempt to fix the issue within 48 hours</li>
            <li>If unresolved, full refund provided regardless of time elapsed</li>
          </ul>

          <h2>8. Chargebacks</h2>
          <p>We encourage customers to contact us directly for refund requests rather than filing chargebacks with their bank. Chargebacks should only be used as a last resort after attempting to resolve the issue with us.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this refund policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.</p>

          <h2>10. Contact Information</h2>
          <p>For refund requests or questions:</p>
          <ul>
            <li><strong>Email:</strong> harshaldevloper@gmail.com</li>
            <li><strong>Response Time:</strong> 24-48 hours</li>
            <li><strong>Location:</strong> India</li>
          </ul>

          <div className="highlight">
            <strong>💡 Our Promise:</strong> We want you to be completely satisfied with your purchase. If our products don't meet your expectations, we'll make it right with a full refund. Your trust is more important to us than any single sale.
          </div>
        </div>

        <footer>
          <p>Built with ❤️ by Harshal Lahare | AIVANTAGE</p>
          <p>India 🇮🇳</p>
          <div style={{marginTop: '1rem'}}>
            <a href="/">Home</a> •
            <a href="/shop">Shop</a> •
            <a href="/pricing">Pricing</a> •
            <a href="/terms">Terms</a> •
            <a href="/privacy">Privacy</a>
          </div>
        </footer>
      </div>
    </>
  );
}
