export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="nav-mark"><span className="dot"></span>WebSwiftPro</div>
            <p className="muted" style={{marginTop:14, maxWidth:280, fontSize:14.5}}>
              Transforming businesses with intelligent automation and cutting-edge web solutions.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="/ai-solutions">AI Chatbots</a></li>
              <li><a href="/ai-solutions">Agentic AI Automation</a></li>
              <li><a href="/services">Web Development</a></li>
              <li><a href="/services">Mobile Development</a></li>
            </ul>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:hello@webswiftpro.in">hello@webswiftpro.in</a></li>
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><span className="muted">Mumbai, India</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 WebSwiftPro. All rights reserved.</span>
          <span>Built with intent, not templates.</span>
        </div>
      </div>
    </footer>
  );
}