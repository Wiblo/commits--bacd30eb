'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">BuildAI</span>
            </div>
            <nav className="nav-links">
              <a href="#features" className="nav-link">Features</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#about" className="nav-link">About</a>
              <button className="btn btn-secondary">Sign In</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🔥 NEW: AI-Powered Templates</span>
            </div>
            <h1 className="hero-title">
              Build Websites<br />
              <span className="highlight">With AI Magic</span>
            </h1>
            <p className="hero-description">
              Just describe your vision. Our AI builds a complete,
              professional website in seconds. No coding required.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                Start Building Free
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn btn-outline">
                Watch Demo
                <span className="btn-icon">▶</span>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Sites Built</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat">
                <div className="stat-number">&lt;30s</div>
                <div className="stat-label">Build Time</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-url">your-awesome-site.com</div>
              </div>
              <div className="browser-content">
                <div className="mockup-line"></div>
                <div className="mockup-line short"></div>
                <div className="mockup-box"></div>
                <div className="mockup-line medium"></div>
                <div className="mockup-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Why Choose BuildAI?</h2>
          <div className="features-grid">
            <div className="feature-card bg-accent">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI-Powered</h3>
              <p className="feature-description">
                Advanced AI understands your needs and creates pixel-perfect designs instantly.
              </p>
            </div>
            <div className="feature-card bg-secondary">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">
                Go from idea to live website in under 30 seconds. No joke.
              </p>
            </div>
            <div className="feature-card bg-primary">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Fully Customizable</h3>
              <p className="feature-description">
                Edit anything with our intuitive drag-and-drop editor. No limits.
              </p>
            </div>
            <div className="feature-card bg-accent">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Mobile Ready</h3>
              <p className="feature-description">
                Every site is responsive and looks perfect on any device.
              </p>
            </div>
            <div className="feature-card bg-secondary">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure & Fast</h3>
              <p className="feature-description">
                Built-in SSL, CDN, and enterprise-grade security included.
              </p>
            </div>
            <div className="feature-card bg-primary">
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">Great Value</h3>
              <p className="feature-description">
                Start free, upgrade when ready. No hidden fees ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Simple Pricing</h2>
          <p className="section-subtitle">No tricks. No hidden fees. Cancel anytime.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-name">Free</h3>
                <div className="pricing-price">
                  <span className="price-amount">$0</span>
                  <span className="price-period">/month</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ 1 Website</li>
                <li>✓ Basic Templates</li>
                <li>✓ AI Builder</li>
                <li>✓ Community Support</li>
                <li>✗ Custom Domain</li>
                <li>✗ Advanced Analytics</li>
              </ul>
              <button className="btn btn-outline btn-full">Get Started</button>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">POPULAR</div>
              <div className="pricing-header">
                <h3 className="pricing-name">Pro</h3>
                <div className="pricing-price">
                  <span className="price-amount">$29</span>
                  <span className="price-period">/month</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ Unlimited Websites</li>
                <li>✓ Premium Templates</li>
                <li>✓ Advanced AI Features</li>
                <li>✓ Priority Support</li>
                <li>✓ Custom Domain</li>
                <li>✓ Advanced Analytics</li>
              </ul>
              <button className="btn btn-primary btn-full">Start Pro Trial</button>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-name">Enterprise</h3>
                <div className="pricing-price">
                  <span className="price-amount">Custom</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ Everything in Pro</li>
                <li>✓ White Label</li>
                <li>✓ API Access</li>
                <li>✓ Dedicated Support</li>
                <li>✓ Custom Integrations</li>
                <li>✓ SLA Guarantee</li>
              </ul>
              <button className="btn btn-outline btn-full">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build Something Amazing?</h2>
            <p className="cta-description">
              Join 50,000+ creators who trust BuildAI to bring their ideas to life.
            </p>
            <button className="btn btn-primary btn-large">
              Start Building Now - It&apos;s Free
              <span className="btn-arrow">→</span>
            </button>
            <p className="cta-note">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <span className="logo-icon">⚡</span>
                <span className="logo-text">BuildAI</span>
              </div>
              <p className="footer-description">
                Build beautiful websites with the power of AI.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Product</h4>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#templates">Templates</a></li>
                <li><a href="#integrations">Integrations</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-links">
                <li><a href="#privacy">Privacy</a></li>
                <li><a href="#terms">Terms</a></li>
                <li><a href="#security">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 BuildAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
