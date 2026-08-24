import Link from 'next/link'
import { services, legalPages } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-navy text-white overflow-hidden relative pt-20 pb-14 px-[var(--side-padding)]">
      <div className="max-w-content mx-auto border-t border-[var(--border-color)] pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Sitemap */}
          <div>
            <h4 className="small-title text-white mb-5">Sitemap</h4>
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-wider">
              <li><Link href="/about" className="text-white hover:text-white transition-colors">About</Link></li>
              <li><Link href="/people" className="text-white hover:text-white transition-colors">People</Link></li>
              <li><Link href="/careers" className="text-white hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/news" className="text-white hover:text-white transition-colors">News & Insights</Link></li>
              <li><Link href="/contact" className="text-white hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="small-title text-white mb-5">Expertise</h4>
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-wider">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/expertise/${s.slug}`} className="text-white hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="small-title text-white mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm leading-relaxed mb-8">
              <p>hello@parametric-legal.com</p>
              <p>+44 (0)20 7946 0958</p>
              <p>15 Farringdon Street<br />London EC4A 4AB</p>
              <p className="text-xs opacity-60 mt-2">Registered in England No. 08419329</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-6 border-t border-[var(--border-color)] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-xs uppercase tracking-wider opacity-70">
          <p>Designed by Fable&Co.</p>
          <div className="flex flex-wrap gap-6">
            {legalPages.map((p) => (
              <Link key={p.slug} href={`/legal/${p.slug}`} className="text-white hover:text-white transition-colors">{p.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
