import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { services } from '@/lib/data'

const primaryServices = [
  { slug: 'special-situations-advisory', title: 'Investigation', description: 'We strengthen the\nstructures, policies, and\nprograms that help', image: '/images/invist.png' },
  { slug: 'dispute-resolution', title: 'Intelligence', description: 'We uncover the wider\ncontext behind complex\nsituations, identifying', image: '/images/intell.png' },
  { slug: 'regulatory-and-compliance', title: 'Investigation', description: 'We strengthen the\nstructures, policies, and\nprograms that help', image: '/images/gov.png' },
  { slug: 'forensic-investigations-and-intelligence', title: 'Advisory', description: 'We help organizations\nmake consequential\ndecisions that protect\nreputation', image: '/images/advisory.png' },
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

      <section className="section-padding bg-[#250238] pt-16 text-white lg:pt-24">
        <div className="mx-auto max-w-content">
          <div className="border-t border-[var(--border-color)] pt-8 lg:pt-10">
            <AnimatedSection>
              <h2 className="small-title mb-12 border-b border-[var(--border-color)] pb-4 font-bold text-white lg:mb-20">Services</h2>
            </AnimatedSection>
            <AnimatedSection className="mb-14 max-w-4xl lg:mb-20">
              <p className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '20px', lineHeight: '1.6', letterSpacing: '0.01em', margin: 0 }}>ParametricGC works across four interconnected disciplines that together allow organisations to move from uncertainty to informed, defensible action. Each discipline can be engaged independently, and each is strengthened by the insight the others provide.</p>
            </AnimatedSection>
            <div className="grid w-full gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
              {primaryServices.map((service, index) => (
                <AnimatedSection key={service.slug} delay={index * 0.08} className="relative">
                  <div className="group relative flex h-full flex-col overflow-hidden bg-[#4A0B68] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.22)]" style={{ width: '100%', height: '100%' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#250238]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative h-[200px] overflow-hidden bg-[#e6e0e8]">
                      <Image src={service.image} alt="" fill className="object-cover opacity-90 transition duration-700 ease-out group-hover:scale-110" />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-start bg-[#3F075E] px-5 pb-6 pt-8 text-white transition-all duration-300 group-hover:bg-[#4b136d] sm:px-6 sm:pb-7 sm:pt-9">
                      <div className="flex h-full flex-col justify-start">
                        <h3 className="mb-4 min-h-[3.2rem] text-[clamp(1.4rem,1.5vw,2.1rem)] leading-[1.1] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-0.5" style={{ fontFamily: 'var(--font-effra), sans-serif', fontWeight: 300 }}>
                          {service.title}
                        </h3>
                        <p className="w-full max-w-[18ch] text-left text-sm leading-[1.55] tracking-[-0.01em] text-white/80 transition-opacity duration-300 group-hover:text-white" style={{ whiteSpace: 'pre-line', margin: 0 }}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
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
