import Head from 'next/head';

export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop - AIVANTAGE</title>
        <meta name="description" content="Premium AI tools, templates, and resources." />
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
        .subtitle { font-size: 1.2rem; opacity: 0.9; }
        
        .products-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem; margin: 3rem 0;
        }
        .product-card {
          background: rgba(255,255,255,0.1); backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2); border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 80px rgba(0,0,0,0.4);
        }
        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          padding: 0.4rem 1rem; border-radius: 50px;
          font-size: 0.85rem; font-weight: 600;
          margin-bottom: 1rem;
        }
        .product-title { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .product-desc { opacity: 0.9; margin-bottom: 1.5rem; line-height: 1.6; }
        .features { list-style: none; margin-bottom: 2rem; }
        .features li {
          padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .features li:last-child { border-bottom: none; }
        .price-section {
          background: rgba(0,0,0,0.2); padding: 1.5rem;
          border-radius: 12px; text-align: center; margin: 1.5rem 0;
        }
        .price { font-size: 2.5rem; font-weight: bold; }
        .price-original {
          text-decoration: line-through; opacity: 0.5;
          font-size: 1.5rem; margin-left: 0.5rem;
        }
        .btn {
          display: block; width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
          color: #667eea;
          text-align: center; text-decoration: none;
          border-radius: 12px; font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255,255,255,0.3);
        }
        
        footer { text-align: center; padding: 3rem 0; opacity: 0.9; margin-top: 3rem; }
        footer a { color: #fff; text-decoration: none; margin: 0 0.5rem; }
      `}</style>

      <div className="container">
        <header>
          <h1>🛒 AIVANTAGE Shop</h1>
          <p className="subtitle">Premium AI Tools & Templates for Creators</p>
        </header>
        
        <div className="products-grid">
          <div className="product-card">
            <div className="badge" style={{background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'}}>FREE</div>
            <h3 className="product-title">AI Automation Starter Kit</h3>
            <p className="product-desc">Everything you need to start automating with AI. Perfect for beginners.</p>
            <ul className="features">
              <li>✓ Complete getting started guide (50+ pages)</li>
              <li>✓ 50+ copy-paste AI prompts</li>
              <li>✓ 30-day content calendar</li>
              <li>✓ Free tools stack (no paid subscriptions)</li>
              <li>✓ Monetization strategies</li>
              <li>✓ Lifetime updates</li>
            </ul>
            <div className="price-section">
              <div className="price">Free <span className="price-original">$47</span></div>
              <div style={{fontSize: '0.9rem', opacity: 0.8}}>Pay What You Want (optional support)</div>
            </div>
            <a href="/" className="btn">📥 Download Free</a>
          </div>
          
          <div className="product-card">
            <div className="badge">⭐ BESTSELLER</div>
            <h3 className="product-title">500+ AI Prompts Library</h3>
            <p className="product-desc">Battle-tested prompts that actually work. Save hours of trial and error.</p>
            <ul className="features">
              <li>✓ 500+ proven prompts (not generic)</li>
              <li>✓ 10 categories (content, business, coding, etc.)</li>
              <li>✓ Copy-paste ready</li>
              <li>✓ Regular updates with new prompts</li>
              <li>✓ Usage examples for each prompt</li>
              <li>✓ Commercial license included</li>
            </ul>
            <div className="price-section">
              <div className="price">$19 <span className="price-original">$97</span></div>
              <div style={{fontSize: '0.9rem', opacity: 0.8}}>One-time payment, lifetime access</div>
            </div>
            <a href="#" className="btn">🛒 Add to Cart</a>
          </div>
          
          <div className="product-card">
            <div className="badge" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>🔥 POPULAR</div>
            <h3 className="product-title">Creator's Notion Template Pack</h3>
            <p className="product-desc">All-in-one workspace for content creators. Plan, create, and track everything.</p>
            <ul className="features">
              <li>✓ Content calendar (365 days)</li>
              <li>✓ Video/podcast planning templates</li>
              <li>✓ Sponsorship tracker</li>
              <li>✓ Analytics dashboard</li>
              <li>✓ Revenue tracker</li>
              <li>✓ Pre-built databases & views</li>
            </ul>
            <div className="price-section">
              <div className="price">$9 <span className="price-original">$49</span></div>
              <div style={{fontSize: '0.9rem', opacity: 0.8}}>One-time payment, duplicate & own forever</div>
            </div>
            <a href="#" className="btn">🛒 Add to Cart</a>
          </div>
          
          <div className="product-card">
            <div className="badge" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>📦 SUBSCRIPTION</div>
            <h3 className="product-title">Monthly Template Club</h3>
            <p className="product-desc">Fresh templates delivered monthly. Never run out of content ideas.</p>
            <ul className="features">
              <li>✓ New template every month</li>
              <li>✓ Exclusive community access</li>
              <li>✓ Early access to new products</li>
              <li>✓ Monthly Q&A calls</li>
              <li>✓ Cancel anytime</li>
              <li>✓ Vault access (all past templates)</li>
            </ul>
            <div className="price-section">
              <div className="price">$9<span style={{fontSize: '1rem'}}>/month</span></div>
              <div style={{fontSize: '0.9rem', opacity: 0.8}}>Cancel anytime, no commitment</div>
            </div>
            <a href="#" className="btn">🛒 Subscribe Now</a>
          </div>
        </div>
        
        <footer>
          <p>Built with ❤️ by Harshal Lahare | AIVANTAGE</p>
          <p>India 🇮🇳</p>
          <div style={{marginTop: '1rem'}}>
            <a href="/">Home</a> •
            <a href="/pricing">Pricing</a> •
            <a href="https://github.com/harshaldevloper" target="_blank">GitHub</a> •
            <a href="https://x.com/aivantage_ai" target="_blank">Twitter</a>
          </div>
        </footer>
      </div>
    </>
  );
}
