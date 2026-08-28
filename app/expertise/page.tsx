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

      <section className="section-padding bg-navy pt-16 text-white lg:pt-24">
        <div className="mx-auto max-w-content">
          <div className="border-t border-[var(--border-color)] pt-8 lg:pt-10">
            <AnimatedSection>
              <h2 className="small-title mb-12 border-b border-[var(--border-color)] pb-4 font-bold text-gold lg:mb-20">Services</h2>
            </AnimatedSection>
            <AnimatedSection className="mb-14 max-w-4xl lg:mb-20">
              <p className="h2-display text-white">Parametric GC works across four interconnected disciplines that together allow organisations to move from uncertainty to informed, defensible action. Each discipline can be engaged independently, and each is strengthened by the insight the others provide.</p>
            </AnimatedSection>
            <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
              {primaryServices.map((service, index) => (
                <AnimatedSection key={service.slug} delay={index * 0.06}>
                  <Link href={`/expertise/${service.slug}`} className="group flex h-full flex-col border-l border-[var(--border-color)] pl-6">
                    <div className="relative mb-7 h-44 overflow-hidden bg-sand/10 lg:h-52"><Image src={service.image} alt="" fill className="object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-75" /></div>
                    <h3 className="small-title mb-4 text-gold transition-colors group-hover:text-white">{service.title}</h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed opacity-70 transition-opacity group-hover:opacity-100">{service.description}</p>
                    <span className="small-title inline-flex items-center gap-3 text-gold transition-colors group-hover:text-white">
                      Find out more
                      <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
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
