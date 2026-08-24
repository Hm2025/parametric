'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { services } from '@/lib/data'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
    setMegaOpen(false)
  }, [pathname])

  const navLinks = [
    { label: 'Expertise', href: '/expertise', hasMega: true },
    { label: 'About', href: '/about' },
    { label: 'People', href: '/people' },
    { label: 'Careers', href: '/careers' },
    { label: 'News & Insights', href: '/news' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm transition-transform duration-500 ease-smooth">
      <div className="mx-auto max-w-content px-[var(--side-padding)]">
        <div className="flex items-center justify-between py-6 border-b border-[var(--border-color)]">
          <Link href="/" className="relative z-10">
            <Image
              src="/images/Parametric%20Logo%20on%20Purple.png"
              alt="Parametric"
              width={158}
              height={36}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-14">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                onMouseLeave={() => link.hasMega && setMegaOpen(false)}
              >
                <Link
                  href={link.href}
                  className="small-title text-white hover:text-white transition-colors relative py-5 px-8 -mx-8"
                >
                  {link.label}
                  {link.hasMega && (
                    <span className="inline-block ml-2 w-[0.45em] h-[0.45em] border-r border-t border-current transform rotate-[135deg] relative -top-0.5" />
                  )}
                </Link>

                {link.hasMega && megaOpen && (
                  <div className="absolute top-full left-0 w-screen max-w-content bg-navy border-t border-[var(--border-color)] shadow-xl pt-16 pb-12 px-[var(--side-padding)]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/expertise/${service.slug}`}
                          className="group block border-l border-[var(--border-color)] pl-6"
                        >
                          <div className="h-11 mb-8 bg-sand/10 group-hover:bg-sand/20 transition-colors" />
                          <h3 className="small-title text-gold group-hover:text-white transition-colors">
                            {service.title}
                          </h3>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-10 w-6 h-5 flex flex-col justify-between text-white"
            aria-label="Toggle menu"
          >
            <span className={`w-full h-px bg-current transition-transform ${menuOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
            <span className={`w-full h-px bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-px bg-current transition-transform ${menuOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-navy z-40 transition-transform duration-700 ease-[cubic-bezier(.215,.61,.355,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-28 px-[var(--side-padding)]">
          <div className="border-t border-[var(--border-color)]" />
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-[var(--border-color)]">
                <Link
                  href={link.href}
                  className="flex justify-between items-center py-5 text-white uppercase text-lg"
                  onClick={() => !link.hasMega && setMenuOpen(false)}
                >
                  {link.label}
                  {link.hasMega && (
                    <span className="w-[0.45em] h-[0.45em] border-r border-t border-current transform rotate-[135deg]" />
                  )}
                </Link>
                {link.hasMega && (
                  <div className="pb-4 pl-4 flex flex-col gap-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/expertise/${s.slug}`}
                        className="text-white/80 uppercase text-sm py-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
