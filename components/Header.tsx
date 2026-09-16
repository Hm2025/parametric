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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navLinks = [
    { label: 'Our Services', href: '/expertise', hasMega: true },
    { label: 'About', href: '/about' },
    { label: 'Our Team', href: '/people' },
    { label: 'News & Briefings', href: '/news' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const expertiseMenu = services.slice(0, 4).map((service, index) => ({
    ...service,
    title: ['Investigations', 'Intelligence', 'Governance', 'Strategic Advisory'][index],
  }))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-transform duration-500 ease-smooth">
      <div className="mx-auto max-w-content px-[var(--side-padding)]">
        <div className="flex items-center justify-between border-b border-navy/15 py-6">
          <Link href="/" className="relative z-10">
            <Image
              src="/images/Parametric%20Logo%20on%20White.png"
              alt="Parametric"
              width={158}
              height={36}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-14 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
              >
                {link.hasMega ? (
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      className="small-title relative -mx-8 block px-8 py-5 text-navy transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services menu"
                      onClick={() => setMegaOpen((value) => !value)}
                      className="relative -ml-5 p-3 text-navy transition-colors hover:text-gold"
                    >
                      <span className="relative -top-0.5 inline-block h-[0.45em] w-[0.45em] rotate-[135deg] border-r border-t border-current" />
                    </button>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="small-title relative -mx-8 block px-8 py-5 text-navy transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                )}

                {link.hasMega && megaOpen && (
                  <div className="absolute left-1/2 top-full z-40 mt-3 w-[min(92vw,860px)] -translate-x-1/2 overflow-hidden border border-white/20 bg-[#240237] shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
                    <div className="grid grid-cols-1 lg:grid-cols-[38%_62%]">
                      <div className="relative hidden min-h-[430px] overflow-hidden border-r border-white/20 lg:block">
                        <Image
                          src="/images/bg1.avif"
                          alt=""
                          fill
                          className="object-cover opacity-65"
                        />
                        <div className="absolute inset-0 bg-[#240237]/50" />
                        <div className="absolute inset-x-7 bottom-8">
                          <p className="small-title mb-3 text-white/60">Our services</p>
                          <p className="max-w-[15rem] text-2xl leading-tight text-white">Clarity when complexity matters.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {expertiseMenu.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/expertise/${service.slug}`}
                            className="group flex min-h-[150px] flex-col border-b border-white/20 p-5 transition-colors hover:bg-white/10 sm:min-h-[215px] sm:border-l sm:p-6"
                            onClick={() => setMegaOpen(false)}
                          >
                            <div className="relative h-24 overflow-hidden bg-[#240237] sm:h-28">
                              <Image
                                src={service.image || '/images/bg1.avif'}
                                alt={service.title}
                                fill
                                className="object-cover opacity-75 transition duration-700 group-hover:scale-105"
                              />
                            </div>
                            <div className="mt-auto pt-5">
                              <h3 className="small-title text-white">
                                {service.title}
                              </h3>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-5 w-6 flex-col justify-between text-navy lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`w-full h-px bg-current transition-transform ${menuOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
            <span className={`w-full h-px bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-px bg-current transition-transform ${menuOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-0 top-0 z-40 h-[100dvh] overflow-y-auto bg-white pt-[6.5rem] transition-transform duration-700 ease-[cubic-bezier(.215,.61,.355,1)] lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-[var(--side-padding)] pb-10 pt-8">
          <div className="border-t border-navy/15" />
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-navy/15">
                <Link
                  href={link.href}
                  className="flex justify-between items-center py-5 text-navy uppercase text-lg transition-colors hover:text-gold"
                  onClick={() => !link.hasMega && setMenuOpen(false)}
                >
                  {link.label}
                  {link.hasMega && (
                    <span className="w-[0.45em] h-[0.45em] border-r border-t border-current transform rotate-[135deg]" />
                  )}
                </Link>
                {link.hasMega && (
                  <div className="pb-4 pl-4 flex flex-col gap-2">
                    {expertiseMenu.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/expertise/${s.slug}`}
                        className="text-navy/70 uppercase text-sm py-1 transition-colors hover:text-gold"
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
