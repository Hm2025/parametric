import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const assetPathPrefix = 'https://www.figma.com/api/mcp/asset/eb1aff18-1b91-457e-be98-196e197ddecd'
const imgHero = `${assetPathPrefix}/0a52d.png`
const imgPurposeCard = `${assetPathPrefix}/ea7de.png`
const imgStoryCard = `${assetPathPrefix}/f76dc.png`
const imgCertificateBitmap = `${assetPathPrefix}/c09ec.png`
const imgCertificateIllustration = `${assetPathPrefix}/b2788.png`
const imgSeal = '/images/seal.png'
const imgDividerPurpose = `${assetPathPrefix}/7897b.svg`
const imgDividerStory = `${assetPathPrefix}/738ca.svg`
const imgDividerStandFor = `${assetPathPrefix}/5b2fb.svg`

const values = [
  {
    title: 'We protect our objectivity as a condition of engagement.',
    description: 'No finding we produce and no recommendation we make is shaped by the outcome a client hopes for. Our value to the organisations we serve depends entirely on their ability to trust that our conclusions were reached without influence, and we structure every engagement to ensure that trust is warranted.',
  },
  {
    title: 'We hold our work to the standard of the people who will scrutinise it.',
    description: 'Every investigation report, governance recommendation, and piece of strategic counsel we deliver is written and tested against the expectation that it will be read by a regulator, a board, a legal adviser, or the public. That standard governs how we gather evidence, how we analyse it, and how we present our conclusions.',
  },
  {
    title: 'We treat sensitivity as a professional discipline, not a courtesy.',
    description: 'The matters our clients bring to us carry reputational, legal, and personal consequences for the individuals and organisations involved. Our handling of every communication, every document, and every finding reflects that reality at every stage of the engagement.',
  },
  {
    title: 'We deliver advice people can act on.',
    description: 'Complexity is the starting condition of every engagement we accept. Our obligation is to reduce that complexity to a set of conclusions and recommendations that leadership can understand, defend, and implement. Advice that is technically sound but practically unusable has not met the standard.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative -mt-[6rem] min-h-[42rem] overflow-hidden bg-navy px-[var(--side-padding)] pt-[6rem] lg:-mt-[8rem] lg:min-h-[42rem] lg:pt-[8rem]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={imgHero} alt="Parametric office interior" className="h-full w-full object-cover opacity-100" style={{ objectFit: 'cover' }} />
          <div className="absolute inset-0 bg-[rgba(37,2,56,0.68)]" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-content items-center justify-center pb-12 lg:pb-20">
          <AnimatedSection>
            <h1 className="text-center text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: 'clamp(3.2rem, 4vw, 5rem)', lineHeight: '0.92', letterSpacing: '-0.06em', maxWidth: '12.5em', margin: 0 }}>
              Helping clients navigate an increasingly complex world
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-[#fff7e6] text-navy pt-16 lg:pt-24">
        <div className="mx-auto max-w-content">
          <AnimatedSection>
            <div className="border-t border-[#250238]/20 pt-8 lg:pt-10">
              <div className="mb-8 flex items-center justify-start lg:mb-10">
                <img src={imgDividerPurpose} alt="" className="h-[1px] w-full max-w-[72rem] object-cover" />
              </div>
              <p className="mb-8 text-[1.6rem] font-semibold uppercase tracking-[0.12em] text-[#250238] lg:mb-10" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.12em' }}>
                Our Purpose
              </p>

              <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1.35fr] lg:gap-12">
                <div className="overflow-hidden rounded-[1rem] border border-[#250238]/10 bg-white/20">
                  <div className="relative h-[22rem] w-full">
                    <img src={imgPurposeCard} alt="Parametric team" className="h-full w-full object-cover" />
                  </div>
                </div>

                <div className="space-y-10 lg:space-y-14">
                  <div className="border-t border-[#250238]/20 pt-6">
                    <h2 className="mb-5 text-[2.4rem] leading-[1.1] tracking-[-0.04em] text-[#250238]" style={{ fontFamily: 'var(--font-effra), sans-serif', fontWeight: 400, margin: 0 }}>
                      Our Mission
                    </h2>
                    <p className="max-w-[29rem] text-[1.25rem] leading-[1.45] tracking-[0.01em] text-[#250238]/80" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, margin: 0 }}>
                      We help organizations move from uncertainty to informed action through investigation, intelligence, governance, and strategic advisory that establishes credible facts and supports decisions capable of withstanding scrutiny from every direction.
                    </p>
                  </div>

                  <div className="border-t border-[#250238]/20 pt-6">
                    <h2 className="mb-5 text-[2.4rem] leading-[1.1] tracking-[-0.04em] text-[#250238]" style={{ fontFamily: 'var(--font-effra), sans-serif', fontWeight: 400, margin: 0 }}>
                      Our Vision
                    </h2>
                    <p className="max-w-[29rem] text-[1.25rem] leading-[1.45] tracking-[0.01em] text-[#250238]/80" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, margin: 0 }}>
                      To be the firm that organizations and their advisers engage first when judgment is being tested, recognized across sectors and jurisdictions for the independence of our findings, the rigor of our process, and the clarity of our counsel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-[#250238] pt-16 text-white lg:pt-24" style={{ minHeight: '44rem' }}>
        <div className="mx-auto max-w-content">
          <div className="grid gap-8 border-t border-white/20 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pt-10">
            <AnimatedSection>
              <div className="pr-0 lg:pr-6">
                <p className="mb-8 text-[1.6rem] font-semibold uppercase tracking-[0.12em] text-white/90" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.12em' }}>
                  Our Story
                </p>
                <div className="space-y-5 text-[1.25rem] leading-[1.45] tracking-[0.01em] text-white/90" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  <p className="m-0">
                    ParametricGC was founded on the premise that organizations facing their most consequential moments deserve advisory and investigative support that is genuinely independent, commercially aware, and held to a standard that does not bend under pressure. The firm was established by Lloydette Bai-Marrow, whose career spanning corporate investigations, compliance strategy, and regulatory engagement across multiple sectors and jurisdictions gave her a clear view of what organizations needed from their advisers and where the existing market fell short.
                  </p>
                  <p className="m-0">
                    The firm is deliberately structured to remain close to the work. Every engagement is led by senior professionals who are directly involved from instruction through to deliverable, which means the experience and judgment a client is promised at the outset is the experience and judgment they receive throughout. This structure is a choice, and it is one the firm has protected as it has grown, because the quality of investigative and advisory work depends on the people doing it, not the brand sitting above them.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="relative h-[22rem] overflow-hidden rounded-[1rem] border border-white/10 bg-white/10 lg:h-[25rem]">
                <img src={imgStoryCard} alt="Parametric team discussion" className="h-full w-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fff7e6] text-navy pt-16 lg:pt-24">
        <div className="mx-auto max-w-content">
          <AnimatedSection>
            <div className="mb-12 flex items-center justify-start lg:mb-20">
              <img src={imgDividerStandFor} alt="" className="h-[1px] w-full max-w-[72rem] object-cover" />
            </div>
            <h2 className="mb-12 text-[1.6rem] font-semibold uppercase tracking-[0.12em] text-[#250238] lg:mb-20" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.12em' }}>
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="space-y-8 lg:space-y-10">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.06}>
                <div className="grid gap-6 border-t border-[#250238]/20 pt-6 lg:grid-cols-[22rem_1fr] lg:gap-10">
                  <h3 className="text-[2rem] leading-[1.12] tracking-[-0.04em] text-[#250238]" style={{ fontFamily: 'var(--font-effra), sans-serif', fontWeight: 400, margin: 0 }}>
                    {value.title}
                  </h3>
                  <p className="max-w-[44rem] text-[1.25rem] leading-[1.45] tracking-[0.01em] text-[#250238]/80" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, margin: 0 }}>
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>


          <AnimatedSection className="mt-16 border-t border-[#250238]/20 pt-8">
            <Link href="/contact" className="button-primary border-[#250238]/40 text-[#250238] hover:border-[#250238]">
              Speak with our team
              <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </>
  )
}
