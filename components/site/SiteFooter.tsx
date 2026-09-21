import Link from "next/link";
import { contactConfig } from "@/config/contact";
import { calculatorPaths } from "@/config/seo";

export function SiteFooter() {
  return (
    <footer className="site-shell-footer">
      <div className="site-footer-grid">
        <div className="site-footer-about">
          <p className="site-footer-title">CANHOPE STEEL</p>
          <p>
            Project-focused supply of fire protection materials, galvanized steel pipe,
            MEP products, project steel and custom fabrication from China.
          </p>
          <p className="site-footer-note">Steel manufacturer & exporter since 1993.</p>
        </div>

        <div>
          <p className="site-footer-title">Quick Links</p>
          <div className="site-footer-links">
            <Link href={calculatorPaths.home}>Steel Tools Center</Link>
            <a href="https://canhopesteel.com/about-us/">About Us</a>
            <a href="https://canhopesteel.com/contact/">Contact</a>
            <a href="https://canhopesteel.com/download-canhope-steel-product-catalogs-in-pdf-format/">Download Center</a>
          </div>
        </div>

        <div>
          <p className="site-footer-title">Products</p>
          <div className="site-footer-links">
            <a href="https://canhopesteel.com/products/">All Products</a>
            <a href="https://canhopesteel.com/products/pipes/">Pipes</a>
            <a href="https://canhopesteel.com/products/fire-fighting-pipe-fittings/">Fire Fighting Pipe Fittings</a>
            <a href="https://canhopesteel.com/products/">Structural Steel Materials</a>
          </div>
        </div>

        <div>
          <p className="site-footer-title">Resources</p>
          <div className="site-footer-links">
            <a href="https://canhopesteel.com/cases/">Cases</a>
            <a href="https://canhopesteel.com/blogs-2/">Blogs</a>
            <a href="https://canhopesteel.com/faq/">FAQ</a>
            <Link href={calculatorPaths.pipeWeightCalculator}>Pipe Weight Calculator</Link>
          </div>
        </div>

        <div>
          <p className="site-footer-title">Contact Info</p>
          <div className="site-footer-links">
            <span>Shunde District, Foshan, Guangdong, China</span>
            <a href={`https://wa.me/${contactConfig.whatsapp.linkNumber}`}>WhatsApp: {contactConfig.whatsapp.displayNumber}</a>
            <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
            <span>Mon–Sat 9:00–18:00 (China Time)</span>
          </div>
          <a className="primary-button site-footer-quote" href={contactConfig.projectQuoteUrl}>
            Get Project Quote
          </a>
        </div>
      </div>

      <div className="site-footer-bottom">
        © 2026 CanHopeSteel | Guangdong Canhuang Steel Co., Ltd.
      </div>
    </footer>
  );
}
