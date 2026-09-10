import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ll-bg py-16">
      <div className="container-content grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <span className="font-display text-lg font-semibold text-white">
            Local<span className="text-ll-blue-hover">Launch</span>
          </span>
          <p className="mt-4 max-w-xs text-sm text-ll-text-secondary">
            Websites that turn local businesses into online businesses.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ll-text-secondary">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ll-text-secondary">
            <li>Business Websites</li>
            <li>Web Development</li>
            <li>Local SEO</li>
            <li>Website Care</li>
            <li>Custom Web Apps</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ll-text-secondary">
            <li>Cape Town, South Africa</li>
            <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="container-content mt-14 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-ll-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 LocalLaunch. All rights reserved.</span>
        <span className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </span>
      </div>
    </footer>
  );
}
