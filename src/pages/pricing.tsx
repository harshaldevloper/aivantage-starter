import Head from 'next/head';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - AIVANTAGE</title>
        <meta name="description" content="Simple, transparent pricing for AI tools and templates." />
      </Head>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh; color: #fff;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
        header { text-align: center; padding: 3rem 0; }
        h1 { font-size: 3rem; margin-bottom: 1rem; }
        .subtitle { font-size: 1.2rem; opacity: 0.9; margin-bottom: 3rem; }
        
        .pricing-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem; margin: 3rem 0;
        }
        .pricing-card {
          background: rgba(255,255,255,0.1); backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2); border-radius: 20px;
          padding: 2rem; text-align: center;
          transition: all 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 80px rgba(0,0,0,0.4);
        }
        .pricing-card.featured {
          border: 2px solid rgba(245, 87, 108, 0.5);
          transform: scale(1.05);
        }
        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          padding: 0.5rem 1.5rem; border-radius: 50px;
          font-size: 0.85rem; font-weight: 600;
          margin-bottom: 1rem;
        }
        .plan-name { font-size: 1.5rem; margin-bottom: 1rem; }
        .price { font-size: 3rem; font-weight: bold; margin: 1.5rem 0; }
        .price-original {
          text-decoration: line-through; opacity: 0.5;
          font-size: 1.5rem; margin-left: 0.5rem;
        }
        .features {
          list-style: none; margin: 2rem 0; text-align: left;
        }
        .features li {
          padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; gap: 0.5rem;
        }
        .features li:last-child { border-bottom: none; }
        .features li::before { content: '✓'; color: #10b981; font-weight: bold; }
        
        .btn {
          display: inline-block;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
          color: #667eea;
          text-decoration: none; border-radius: 50px;
          font-weight: 600; margin-top: 1.5rem;
          transition: all 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255,255,255,0.3);
        }
        
        footer { text-align: center; padding: 3rem 0; opacity: 0.9; margin-top: 3rem; }
        footer a { color: #fff; text-decoration: none; margin: 0 0.5rem; }
        
        @media (max-width: 768px) {
          h1 { font-size: 2rem; }
          .pricing-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <header>
          <h1>💰 Simple, Transparent Pricing</h1>
          <p className="subtitle">Choose the plan that fits your needs. All plans include instant access.</p>
        </header>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3 className="plan-name">Starter Kit</h3>
            <div className="price">Free <span className="price-original">$47</span></div>
            <ul className="features">
              <li>Complete getting started guide</li>
              <li>50+ copy-paste AI prompts</li>
              <li>30-day content calendar</li>
              <li>Free tools stack list</li>
              <li>Monetization strategies</li>
              <li>Lifetime updates</li>
            </ul>
            <a href="/" className="btn">📥 Download Free</a>
          </div>
          
          <div className="pricing-card featured">
            <div className="badge">⭐ BESTSELLER</div>
            <h3 className="plan-name">500+ AI Prompts Library</h3>
            <div className="price">$19 <span className="price-original">$97</span></div>
            <ul className="features">
              <li>500+ proven prompts (not generic)</li>
              <li>10 categories (content, business, coding)</li>
              <li>Copy-paste ready</li>
              <li>Regular updates included</li>
              <li>Usage examples for each prompt</li>
              <li>Commercial license</li>
              <li>Lifetime access</li>
            </ul>
            <a href="#" className="btn">🛒 Add to Cart</a>
          </div>
          
          <div className="pricing-card">
            <div className="badge" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>🔥 POPULAR</div>
            <h3 className="plan-name">Creator's Notion Pack</h3>
            <div className="price">$9 <span className="price-original">$49</span></div>
            <ul className="features">
              <li>Content calendar (365 days)</li>
              <li>Video/podcast planning templates</li>
              <li>Sponsorship tracker</li>
              <li>Analytics dashboard</li>
              <li>Revenue tracker</li>
              <li>Pre-built databases & views</li>
              <li>Duplicate & own forever</li>
            </ul>
            <a href="#" className="btn">🛒 Add to Cart</a>
          </div>
          
          <div className="pricing-card">
            <div className="badge" style={{background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'}}>🆕 NEW</div>
            <h3 className="plan-name">AI Tools Directory 2026</h3>
            <div className="price">$14 <span className="price-original">$67</span></div>
            <ul className="features">
              <li>200+ AI tools (free & paid)</li>
              <li>20 categories</li>
              <li>Pricing comparison</li>
              <li>Feature breakdown</li>
              <li>Direct links to tools</li>
              <li>Monthly updates (1 year)</li>
              <li>Searchable spreadsheet</li>
            </ul>
            <a href="#" className="btn">🛒 Add to Cart</a>
          </div>
          
          <div className="pricing-card">
            <div className="badge" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>📦 SUBSCRIPTION</div>
            <h3 className="plan-name">Monthly Template Club</h3>
            <div className="price">$9<span style={{fontSize: '1rem'}}>/month</span></div>
            <ul className="features">
              <li>New template every month</li>
              <li>Exclusive community access</li>
              <li>Early access to new products</li>
              <li>Monthly Q&A calls</li>
              <li>Cancel anytime</li>
              <li>Vault access (all past templates)</li>
              <li>Member-only discounts</li>
            </ul>
            <a href="#" className="btn">🛒 Subscribe Now</a>
          </div>
          
          <div className="pricing-card">
            <div className="badge" style={{background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)'}}>💎 PREMIUM</div>
            <h3 className="plan-name">Custom Prompt Engineering</h3>
            <div className="price">$149 <span className="price-original">$297</span></div>
            <ul className="features">
              <li>1-hour 1-on-1 consultation call</li>
              <li>5 custom prompts for your workflow</li>
              <li>Workflow optimization guide</li>
              <li>Email support (30 days)</li>
              <li>Call recording included</li>
              <li>Action plan document</li>
              <li>Limited slots available</li>
            </ul>
            <a href="#" className="btn">📅 Book Consultation</a>
          </div>
        </div>
        
        <footer>
          <p>Built with ❤️ by Harshal Lahare | AIVANTAGE</p>
          <p>India 🇮🇳</p>
          <div style={{marginTop: '1rem'}}>
            <a href="/">Home</a> •
            <a href="/shop">Shop</a> •
            <a href="https://github.com/harshaldevloper" target="_blank">GitHub</a> •
            <a href="https://x.com/aivantage_ai" target="_blank">Twitter</a>
          </div>
        </footer>
      </div>
    </>
  );
}
