'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { services } from '@/lib/data'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const pathname = usePathname()
  const megaMenuRef = useRef<HTMLDivElement | null>(null)
  const servicesTriggerRef = useRef<HTMLButtonElement | null>(null)

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

  useEffect(() => {
    if (!megaOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const clickedInsideMenu = megaMenuRef.current?.contains(target)
      const clickedTrigger = servicesTriggerRef.current?.contains(target)

      if (!clickedInsideMenu && !clickedTrigger) {
        setMegaOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [megaOpen])

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Our Services', href: '/expertise', hasMega: true },
    { label: 'Our Team', href: '/people' },
    { label: 'News & Briefings', href: '/news' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const expertiseMenu = [
    {
      slug: 'special-situations-advisory',
      title: 'Investigation',
      description: 'We strengthen the structures, policies, and programs that help',
      image: '/images/invist.png',
    },
    {
      slug: 'dispute-resolution',
      title: 'Intelligence',
      description: 'We uncover the wider context behind complex situations, identifying',
      image: '/images/intell.png',
    },
    {
      slug: 'regulatory-and-compliance',
      title: 'Investigation',
      description: 'We strengthen the structures, policies, and programs that help',
      image: '/images/gov.png',
    },
    {
      slug: 'forensic-investigations-and-intelligence',
      title: 'Advisory',
      description: 'We help organizations make consequential decisions that protect reputation',
      image: '/images/advisory.png',
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[85px] w-full bg-white/95 opacity-100 backdrop-blur-sm transition-transform duration-500 ease-smooth" style={{ top: '1px', transform: 'none' }}>
      <div className="mx-auto max-w-content px-[var(--side-padding)]">
        <div className="flex items-center justify-between border-b border-navy/15 py-5">
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
                  <div className="flex items-center gap-1">
                    <Link
                      href={link.href}
                      className="small-title relative -mx-8 block px-8 py-5 text-navy transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                    <button
                      ref={servicesTriggerRef}
                      type="button"
                      aria-label={megaOpen ? 'Close services menu' : 'Open services menu'}
                      onClick={() => setMegaOpen((value) => !value)}
                      className="flex h-8 w-8 items-center justify-center text-navy transition-colors hover:text-gold"
                    >
                      <span
                        className={`mt-[-1px] inline-block h-[0.45em] w-[0.45em] border-r border-t border-current transition-transform duration-200 ${megaOpen ? 'rotate-[315deg]' : 'rotate-[135deg]'}`}
                      />
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
                  <div ref={megaMenuRef} className="absolute left-1/2 top-full z-40 mt-3 w-[min(96vw,1100px)] -translate-x-1/2 overflow-hidden rounded-[20px] border border-white/10 bg-[#2a0b39] shadow-[0_32px_80px_rgba(18,5,29,0.45)] backdrop-blur-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr]">
                      <div className="relative hidden min-h-[500px] overflow-hidden border-r border-white/10 lg:block">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,155,77,0.25),_transparent_30%),linear-gradient(145deg,rgba(32,6,43,0.88),rgba(18,4,29,0.96))]" />
                        <div className="absolute inset-0 opacity-80">
                          <Image
                            src="/images/Impartial-Investigation-1.webp"
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#160718]/85 via-[#1a061e]/30 to-transparent" />
                        <div className="absolute inset-x-8 bottom-8 z-10">
                          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.26em] text-white/70">Our services</p>
                          <p className="max-w-[15rem] text-4xl leading-[0.92] tracking-[-0.05em] text-white" style={{ fontFamily: 'var(--font-effra), sans-serif', fontWeight: 300 }}>
                            Clarity when complexity matters.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {expertiseMenu.map((service, index) => (
                          <Link
                            key={service.slug}
                            href={`/expertise/${service.slug}`}
                            className="group relative flex min-h-[220px] flex-col overflow-hidden border-b border-white/10 bg-[#2c0c3b] p-3 transition-all duration-300 hover:bg-[#340f46] sm:min-h-[250px] sm:p-4"
                            onClick={() => setMegaOpen(false)}
                          >
                            <div className="relative h-36 overflow-hidden rounded-t-[14px] bg-[#250238] sm:h-40">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#17071d]/65 via-transparent to-transparent" />
                            </div>
                            <div className="flex flex-1 flex-col justify-end pt-4">
                              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.24em] text-[#f7d7aa]">Service</p>
                              <h3 className="text-[28px] leading-[1.05] tracking-[-0.05em] text-white" style={{ fontFamily: 'var(--font-effra), sans-serif', fontWeight: 300 }}>
                                {service.title}
                              </h3>
                              <p className="mt-2 max-w-[20ch] text-sm leading-relaxed text-white/70">
                                {service.description}
                              </p>
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
