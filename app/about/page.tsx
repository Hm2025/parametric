import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const values = [
  {
    title: 'Diversity',
    description: 'At the heart of our multidisciplinary model is a commitment to diversity. We understand that our strength lies in breaking down barriers and bringing together a diverse pool of talent. We deliberately hire people from varying professional and personal backgrounds and will never discriminate based on educational background, for example.',
  },
  {
    title: 'A Trusted Partner',
    description: 'We are not just providers of professional services. We offer a personal and bespoke approach, supporting clients and offering strategic counsel in challenging times. We will always take the time to listen to clients and understand their specific circumstances. We understand that there is always a human side to business situations.',
  },
  {
    title: 'Outcome-focussed',
    description: 'We will always be honest about what we can do for clients and how we will go about our work. Where needed we combine our in-house expertise with carefully selected partners, embracing new technologies with due care for quality and consistency, always focused on achieving the best outcomes.',
  },
  {
    title: 'Community and Mentorship',
    description: 'We support the wider community through pro bono work that provides access to the legal profession for those who cannot afford representation. We also support diversity and widening access through work experience and career mentorship programmes.',
  },
]

const differences = [
  {
    title: 'We protect our objectivity as a condition of engagement.',
    paragraphs: [
      'No finding we produce and no recommendation we make is shaped by the outcome a client hopes for. Our value to the organisations we serve depends entirely on their ability to trust that our conclusions were reached without influence, and we structure every engagement to ensure that trust is warranted.',
    ],
  },
  {
    title: 'We hold our work to the standard of the people who will scrutinise it.',
    paragraphs: [
      'Every investigation report, governance recommendation, and piece of strategic counsel we deliver is written and tested against the expectation that it will be read by a regulator, a board, a legal adviser, or the public. That standard governs how we gather evidence, how we analyse it, and how we present our conclusions.',
    ],
  },
  {
    title: 'We treat sensitivity as a professional discipline, not a courtesy.',
    paragraphs: [
      'The matters our clients bring to us carry reputational, legal, and personal consequences for the individuals and organisations involved. Our handling of every communication, every document, and every finding reflects that reality at every stage of the engagement.',
    ],
  },
  {
    title: 'We deliver advice people can act on.',
    paragraphs: [
      'Complexity is the starting condition of every engagement we accept. Our obligation is to reduce that complexity to a set of conclusions and recommendations that leadership can understand, defend, and implement. Advice that is technically sound but practically unusable has not met the standard.',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative -mt-[6rem] min-h-[70vh] overflow-hidden bg-navy px-[var(--side-padding)] pt-[6rem] lg:-mt-[8rem] lg:min-h-[78vh] lg:pt-[8rem]">
        <Image src="/images/bg1-1.avif" alt="Parametric office interior" fill priority className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-content items-end pb-16 lg:pb-24">
          <AnimatedSection>
            <h1 className="h1-display max-w-[12em] text-sand">Helping clients navigate an increasingly complex world</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-sand text-navy pt-16 lg:pt-24">
        <div className="mx-auto max-w-content">
          <AnimatedSection>
            <div className="border-t border-navy/25 pt-8 lg:pt-10">
              <p className="small-title mb-6 font-bold text-navy lg:mb-8">Our Purpose</p>
              <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                <div className="border-t border-navy/25 pt-6">
                  <h2 className="h2-display mb-6 font-bold text-navy">Our Mission</h2>
                  <p className="max-w-2xl leading-relaxed text-navy/80" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '20px', lineHeight: '145%', letterSpacing: '0.02em' }}>We help organizations move from uncertainty to informed action through investigation, intelligence, governance, and strategic advisory that establishes credible facts and supports decisions capable of withstanding scrutiny from every direction.</p>
                </div>
                <div className="border-t border-navy/25 pt-6">
                  <h2 className="h2-display mb-6 font-bold text-navy">Our Vision</h2>
                  <p className="max-w-2xl leading-relaxed text-navy/80" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '20px', lineHeight: '145%', letterSpacing: '0.02em' }}>To be the firm that organizations and their advisers engage first when judgment is being tested, recognized across sectors and jurisdictions for the independence of our findings, the rigor of our process, and the clarity of our counsel.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-extra-light-gray text-navy">
        <div className="mx-auto max-w-content border-t border-navy/25 pt-8 lg:pt-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection>
              <p className="max-w-4xl text-justify" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '20px', lineHeight: '145%', letterSpacing: '0.02em', color: '#250238' }}>ParametricGC was founded on the premise that organizations facing their most consequential moments deserve advisory and investigative support that is genuinely independent, commercially aware, and held to a standard that does not bend under pressure. The firm was established by Lloydette Bai-Marrow, whose career spanning corporate investigations, compliance strategy, and regulatory engagement across multiple sectors and jurisdictions gave her a clear view of what organizations needed from their advisers and where the existing market fell short.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="max-w-4xl text-justify" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '20px', lineHeight: '145%', letterSpacing: '0.02em', color: '#250238' }}>The firm is deliberately structured to remain close to the work. Every engagement is led by senior professionals who are directly involved from instruction through to deliverable, which means the experience and judgment a client is promised at the outset is the experience and judgment they receive throughout. This structure is a choice, and it is one the firm has protected as it has grown, because the quality of investigative and advisory work depends on the people doing it, not the brand sitting above them.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy pt-16 text-sand lg:pt-24">
        <div className="mx-auto max-w-content">
          <div className="grid gap-12 border-t border-white/20 pt-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20 lg:pt-10">
            <AnimatedSection>
              <p className="small-title mb-8 font-bold text-sand/70 lg:mb-12">Certified status</p>
              <h2 className="max-w-xl text-sand" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '40px', lineHeight: '1.1', letterSpacing: '0.02em' }}>Certified Women&apos;s Business Enterprise</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <div className="border-t border-gold pt-6 lg:pt-8">
                <p className="max-w-3xl leading-relaxed text-sand/90" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '20px', lineHeight: '145%', letterSpacing: '0.02em' }}>ParametricGC holds certified Women&apos;s Business Enterprise status, a designation that is independently verified and recognized by procurement and supplier diversity programs across the public sector, international development agencies, and multinational corporations. For organizations with supplier diversity commitments or procurement frameworks that prioritize certified businesses, this means ParametricGC can be engaged through those channels without additional qualification steps. The certification reflects how the firm was founded and how it continues to operate, and it provides a practical advantage for clients whose procurement processes require or favor certified suppliers.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand text-navy pt-16 lg:pt-24">
        <div className="mx-auto max-w-content">
          <AnimatedSection><h2 className="small-title mb-12 border-b border-navy/25 pb-4 font-bold text-navy lg:mb-20">Our Values</h2></AnimatedSection>
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08} className="border-t border-navy/20 pt-6">
                <h3 className="h2-display mb-5 text-navy">{value.title}</h3>
                <p className="max-w-xl font-light leading-relaxed text-navy/75">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-navy">
        <div className="mx-auto max-w-content pt-8 lg:pt-10">
          <AnimatedSection><h2 className="small-title mb-12 border-b border-navy/25 pb-4 font-bold text-navy lg:mb-20">What We Stand For</h2></AnimatedSection>
          <div className="space-y-20 lg:space-y-28">
            {differences.map((difference, index) => (
              <AnimatedSection key={difference.title} delay={index * 0.08}>
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
                  <h3 className="h2-display font-bold text-navy">{difference.title}</h3>
                  <div className="max-w-3xl space-y-6 font-light leading-relaxed text-navy/80">
                    {difference.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-20 border-t border-navy/25 pt-8">
            <Link href="/contact" className="button-primary border-navy/50 text-navy hover:border-navy">Speak with our team <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
