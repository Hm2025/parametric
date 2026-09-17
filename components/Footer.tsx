import Link from 'next/link'
import { services, legalPages } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-white overflow-hidden relative pt-20 pb-14 px-[var(--side-padding)]" style={{ color: '#250238' }}>
      <div className="max-w-content mx-auto border-t border-[var(--border-color)] pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Sitemap */}
          <div>
            <h4 className="small-title footer-brand-text mb-5">Sitemap</h4>
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-wider font-semibold">
              <li><Link href="/about" className="footer-brand-text hover:text-[#250238] transition-colors">About</Link></li>
              <li><Link href="/people" className="footer-brand-text hover:text-[#250238] transition-colors">Our Team</Link></li>
              <li><Link href="/news" className="footer-brand-text hover:text-[#250238] transition-colors">News & Briefings</Link></li>
              <li><Link href="/podcast" className="footer-brand-text hover:text-[#250238] transition-colors">Podcast</Link></li>
              <li><Link href="/contact" className="footer-brand-text hover:text-[#250238] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="small-title footer-brand-text mb-5">Our Services</h4>
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-wider font-semibold">
              {services.filter((s) => !['reputation-management-and-crisis-response', 'fintech-and-digital-assets-advisory', 'civil-fraud', 'private-client-advisory'].includes(s.slug)).map((s, index) => (
                <li key={s.slug}>
                  <Link href={`/expertise/${s.slug}`} className="footer-brand-text hover:text-[#250238] transition-colors">{index === 0 ? 'Investigations' : index === 1 ? 'Intelligence' : index === 2 ? 'Governance' : index === 3 ? 'Strategic Advisory' : s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="small-title footer-brand-text mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm leading-relaxed mb-8 footer-brand-text font-semibold">
              <p>info@parametricglobal.co.uk</p>
              <p>+44 (0)208 058 3120</p>
              <p>20-22 Wenlock Road<br />London, England, N1 7GU</p>
            </div>
            <div className="flex gap-4 footer-brand-text font-semibold">
              <a href="#" className="footer-brand-text hover:text-[#250238] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="footer-brand-text transition-colors hover:text-[#250238]" aria-label="Instagram">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect width="17" height="17" x="3.5" y="3.5" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href="#" className="footer-brand-text transition-colors hover:text-[#250238]" aria-label="X">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.47 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.82h1.73L8.28 4.07H6.43L17.8 19.82Z" /></svg>
              </a>
              <a href="#" className="footer-brand-text transition-colors hover:text-[#250238]" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.08c0-.87.24-1.46 1.5-1.46h1.7V4.94c-.3-.04-1.33-.14-2.53-.14-2.5 0-4.22 1.53-4.22 4.34V11H7.1v3h2.85v8h3.55Z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-6 border-t border-[var(--border-color)] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-xs uppercase tracking-wider opacity-70 footer-brand-text font-semibold">
          <p>Designed by ParametricGC</p>
          <div className="flex flex-wrap gap-6">
              {legalPages.map((p) => (
                <span key={p.slug} className="footer-brand-text">{p.title}</span>
              ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
