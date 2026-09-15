import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { services } from '@/lib/data'

const primaryServices = [
  { slug: 'special-situations-advisory', title: 'Investigations', description: 'We assess allegations of fraud, corruption, money laundering, and economic crime, protecting the credibility and integrity of the response.', image: '/images/Impartial-Investigation-1.webp' },
  { slug: 'dispute-resolution', title: 'Intelligence', description: 'We uncover the wider context behind complex situations, identifying embedded risks that may not be visible from the immediate facts.', image: '/images/Targeted-Tailored-Training-1.webp' },
  { slug: 'regulatory-and-compliance', title: 'Governance', description: 'We strengthen the structures, policies, and programs that help organizational decisions withstand scrutiny over time.', image: '/images/people.avif' },
  { slug: 'forensic-investigations-and-intelligence', title: 'Strategic Advisory', description: 'We help organizations make consequential decisions that protect reputation, strengthen stakeholder confidence, and support long-term strategic direction.', image: '/images/Strategic-Consulting-Services-1.webp' },
]

const focusAreas = [
  { title: 'Strategic Counsel', text: 'Providing seasoned expertise and practical support to clients facing complex, event-driven legal, regulatory, financial, or reputational threats.' },
  { title: 'Independent Inquiries and Investigations', text: 'Leading independent inquiries, reviews, or high-stakes investigations with integrity for clients facing heightened scrutiny or seeking to uncover facts and learn lessons.' },
  { title: 'Coaching and Mentoring', text: 'Offering personalised coaching and mentoring to C-suite leaders, executives, and management navigating change, complexity, or uncertainty.' },
  { title: 'Crisis Response Support', text: 'Delivering hands-on crisis management support from experts who have successfully led organisations through crises and material threat events.' },
]

export default function ExpertiseIndexPage() {
  return (
    <>
      <section className="relative -mt-[6rem] min-h-[48vh] overflow-hidden bg-navy px-[var(--side-padding)] pt-[6rem] lg:-mt-[8rem] lg:min-h-[54vh] lg:pt-[8rem]">
        <Image src="/images/bg1-1.avif" alt="Parametric professional services" fill priority className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative z-10 mx-auto flex min-h-[36vh] max-w-content items-end pb-16 lg:pb-24">
          <AnimatedSection>
            <p className="small-title mb-5 text-white/70">Our Services</p>
            <h1 className="h1-display max-w-[11em] text-sand">Expertise for decisions that carry consequences</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-[#3E075E] pt-16 text-white lg:pt-24">
        <div className="mx-auto max-w-content">
          <div className="border-t border-[var(--border-color)] pt-8 lg:pt-10">
            <AnimatedSection>
              <h2 className="small-title mb-12 border-b border-[var(--border-color)] pb-4 font-bold text-white lg:mb-20">Services</h2>
            </AnimatedSection>
            <AnimatedSection className="mb-14 max-w-4xl lg:mb-20">
              <p className="h2-display text-white">ParametricGC works across four interconnected disciplines that together allow organisations to move from uncertainty to informed, defensible action. Each discipline can be engaged independently, and each is strengthened by the insight the others provide.</p>
            </AnimatedSection>
            <div className="relative">
              <div className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-[#FF9933]/50 lg:block" />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {primaryServices.map((service, index) => (
                  <AnimatedSection key={service.slug} delay={index * 0.08} className="relative">
                    <details className="group relative z-10 flex min-h-[330px] flex-col border border-[#FF9933]/40 bg-[#6B0CA3]/20 transition-colors open:border-[#FF9933] open:bg-[#6B0CA3]/35 hover:border-[#FF9933] hover:bg-[#6B0CA3]/35">
                      <div className="relative h-24 overflow-hidden border-b border-white/15 bg-white/10 sm:h-28"><Image src={service.image} alt="" fill className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" /></div>
                      <summary className="flex min-h-36 cursor-pointer list-none flex-col justify-between p-5 [&::-webkit-details-marker]:hidden sm:min-h-44 sm:p-6">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FF9933] text-xs text-[#FF9933] transition-colors group-hover:bg-[#FF9933] group-hover:text-[#240237]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="mt-8 flex items-end justify-between gap-4 text-xl leading-tight text-white">{service.title}<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 text-lg font-light leading-none text-[#FF9933] transition-transform group-hover:rotate-45">+</span></span>
                      </summary>
                      <div className="hidden border-t border-white/15 px-5 pb-6 pt-5 group-hover:block sm:px-6">
                        <p className="line-clamp-3 text-sm font-light leading-relaxed text-white/70">{service.description}</p>
                        <Link href={`/expertise/${service.slug}`} className="small-title mt-5 inline-flex items-center gap-3 text-gold">
                          Find out more
                          <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" />
                        </Link>
                      </div>
                    </details>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand text-navy pt-16 lg:pt-24">
        <div className="mx-auto max-w-content">
          <AnimatedSection>
            <h2 className="small-title mb-12 border-b border-navy/25 pb-4 font-bold text-navy lg:mb-20">Areas of Focus</h2>
          </AnimatedSection>
          <div className="grid gap-8 lg:grid-cols-2">
            {focusAreas.map((area, index) => (
              <AnimatedSection key={area.title} delay={index * 0.08}>
                <div className="border-t border-navy/20 pt-6">
                  <h3 className="mb-3 text-2xl font-light leading-tight text-navy">{area.title}</h3>
                  <p className="max-w-[42rem] text-base leading-relaxed text-navy/75">{area.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
