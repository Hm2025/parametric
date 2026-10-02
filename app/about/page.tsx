import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const imgHero = '/image 10.png'
const imgPurposeCard = '/Rectangle 11.png'
const imgStoryCard = '/Rectangle 11 (1).png'
const imgCertificatePeople = '/freepik_br_3738c82c-b144-4540-a978-9b7b98c0060f 1.png'
const imgCertificatePattern = '/Bitmap (4) 1.png'
const imgCertificateSeal = '/image 14.png'
const imgValuesPortrait = '/Group 2.png'

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
      <section className="relative -mt-[6rem] min-h-[620px] overflow-hidden bg-[#250238] px-[var(--side-padding)] pt-[6rem] lg:-mt-[8rem] lg:min-h-[799px] lg:pt-[8rem]">
        <AnimatedSection className="absolute inset-0 overflow-hidden">
          <Image src={imgHero} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        </AnimatedSection>
        <div className="relative z-10 mx-auto flex min-h-[544px] max-w-content items-center justify-center px-2 pb-12 text-center lg:min-h-[671px] lg:px-0 lg:pb-20">
          <AnimatedSection delay={1.8}>
            <h1 className="max-w-[14ch] text-[clamp(2.25rem,4.17vw,5rem)] font-light leading-[1.1] tracking-[0.005em] text-white sm:max-w-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="block">Helping clients navigate an</span>
              <span className="block">increasingly complex world</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-[#fff7e6] text-navy pt-16 lg:pt-20">
        <div className="mx-auto max-w-content">
          <AnimatedSection>
            <div>
              <div className="mb-8 lg:mb-12">
                <h2 className="mb-6 text-[clamp(1.5rem,1.7vw,2rem)] font-semibold uppercase leading-tight tracking-[0.02em] text-[#250238]">
                  Our Purpose
                </h2>
                <div className="h-px w-full bg-[#ff6a1a]" />
              </div>

              <div className="grid items-center gap-9 lg:grid-cols-[1.8fr_1fr] lg:gap-14">
                <div className="relative aspect-[849/525] w-full overflow-hidden rounded-[14px] bg-white/20">
                  <Image src={imgPurposeCard} alt="Parametric colleagues walking together outside an office" fill sizes="(min-width: 1024px) 62vw, 100vw" className="object-cover" />
                </div>

                <div className="space-y-9 lg:space-y-12">
                  <div>
                    <h3 className="mb-5 text-[clamp(2rem,2.1vw,2.5rem)] font-semibold leading-[1.08] text-[#250238]">
                      Our Mission
                    </h3>
                    <p className="max-w-[29rem] text-[clamp(1.05rem,1.1vw,1.25rem)] leading-[1.45] tracking-[0.01em] text-[#250238]/90">
                      We help organizations move from uncertainty to informed action through investigation, intelligence, governance, and strategic advisory that establishes credible facts and supports decisions capable of withstanding scrutiny from every direction.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-5 text-[clamp(2rem,2.1vw,2.5rem)] font-semibold leading-[1.08] text-[#250238]">
                      Our Vision
                    </h3>
                    <p className="max-w-[29rem] text-[clamp(1.05rem,1.1vw,1.25rem)] leading-[1.45] tracking-[0.01em] text-[#250238]/90">
                      To be the firm that organizations and their advisers engage first when judgment is being tested, recognized across sectors and jurisdictions for the independence of our findings, the rigor of our process, and the clarity of our counsel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-[#250238] pt-14 text-white sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-content">
          <AnimatedSection>
            <div className="mb-7 sm:mb-9">
              <h2 className="mb-5 text-[clamp(1.6rem,1.8vw,2rem)] font-semibold uppercase leading-tight tracking-[0.02em] text-white">
                Our Story
              </h2>
              <div className="h-px w-full bg-[#ff6a1a]" />
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div className="space-y-5 text-[clamp(1rem,1.1vw,1.25rem)] leading-[1.45] tracking-[0.01em] text-white/95">
                <p className="m-0">
                  <strong className="font-semibold">ParametricGC</strong> was founded on the premise that organizations facing their most consequential moments deserve advisory and investigative support that is genuinely independent, commercially aware, and held to a standard that does not bend under pressure. The firm was established by Lloydette Bai-Marrow, whose career spanning corporate investigations, compliance strategy, and regulatory engagement across multiple sectors and jurisdictions gave her a clear view of what organizations needed from their advisers and where the existing market fell short.
                </p>
                <p className="m-0">
                  The firm is deliberately structured to remain close to the work. Every engagement is led by senior professionals who are directly involved from instruction through to deliverable, which means the experience and judgment a client is promised at the outset is the experience and judgment they receive throughout. This structure is a choice, and it is one the firm has protected as it has grown, because the quality of investigative and advisory work depends on the people doing it, not the brand sitting above them.
                </p>
              </div>

              <div className="relative aspect-[671/525] w-full overflow-hidden rounded-[14px] bg-white/10">
                <Image src={imgStoryCard} alt="Colleagues meeting around a table in a bright office" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-[var(--side-padding)] py-12 text-[#250238] sm:py-16 lg:min-h-[799px] lg:py-0">
        <div className="mx-auto max-w-[1481px] lg:pt-[86px]">
          <AnimatedSection>
            <div className="mb-6 sm:mb-8 lg:mb-0">
              <h2 className="mb-5 text-[clamp(1.5rem,1.8vw,1.875rem)] font-semibold uppercase leading-[1.117] tracking-[-0.05em] lg:text-[30px]">
                Certified Status
              </h2>
              <div className="h-px w-full bg-[#ff6501] lg:mx-auto lg:w-[calc(100%-2px)]" />
            </div>

            <div className="grid items-center gap-8 pt-2 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-8 lg:pt-[11px]">
              <div className="relative mx-auto aspect-[790/636] w-full max-w-[790px] lg:mx-0">
                <Image src={imgCertificatePattern} alt="" width={661} height={604} sizes="(min-width: 1024px) 42vw, 100vw" className="absolute left-0 top-[5%] h-[99%] w-[84%] object-fill" />
                <Image src={imgCertificatePeople} alt="Two women business leaders" width={790} height={636} sizes="(min-width: 1024px) 42vw, 100vw" className="absolute inset-0 h-full w-full object-contain" />
                <Image src={imgCertificateSeal} alt="Women-Owned Business Enterprise certified seal" width={192} height={192} className="absolute bottom-[5%] left-[51%] h-[clamp(4rem,8.33vw,10rem)] w-[clamp(4rem,8.33vw,10rem)] -translate-x-1/2 object-contain" />
              </div>

              <div className="pt-2 lg:pt-[40px]">
                <h3 className="mb-7 max-w-[19ch] text-[clamp(2rem,2.1vw,2.5rem)] font-normal leading-[1.35] tracking-[0.02em] sm:mb-10 lg:mb-[40px] lg:max-w-[651px] lg:text-[40px]">
                  Certified Women&apos;s Business Enterprise
                </h3>
                <div className="space-y-6 text-[clamp(1rem,1.05vw,1.25rem)] leading-[1.45] tracking-[0.02em] lg:max-w-[689px] lg:text-[20px]">
                  <p className="m-0">
                    ParametricGC holds certified Women&apos;s Business Enterprise status, a designation that is independently verified and recognized by procurement and supplier diversity programs across the public sector, international development agencies, and multinational corporations.
                  </p>
                  <p className="m-0">
                    For organizations with supplier diversity commitments or procurement frameworks that prioritize certified businesses, this means ParametricGC can be engaged through those channels without additional qualification steps. The certification reflects how the firm was founded and how it continues to operate, and it provides a practical advantage for clients whose procurement processes require or favor certified suppliers.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#fff7e6] px-[var(--side-padding)] py-12 text-[#250238] sm:py-16 lg:py-[88px]">
        <div className="mx-auto max-w-[1480px]">
          <AnimatedSection>
            <div className="mb-8 sm:mb-10">
              <h2 className="mb-6 text-[clamp(1.5rem,1.8vw,1.875rem)] font-semibold uppercase leading-[1.12] tracking-[-0.02em] lg:text-[30px]">
                What We Stand For
              </h2>
              <div className="h-px w-full bg-[#ff6501]" />
            </div>
          </AnimatedSection>

          <div className="grid items-start gap-10 lg:grid-cols-[1.85fr_1fr] lg:gap-12">
            <div className="space-y-7 sm:space-y-9 lg:space-y-8">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.06}>
                  <div className="grid gap-3 sm:gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
                    <h3 className="m-0 max-w-[16ch] text-[clamp(1.5rem,1.7vw,2rem)] font-normal leading-[1.12] text-[#160c0c]" style={{ fontFamily: 'var(--font-effra), sans-serif' }}>
                      {value.title}
                    </h3>
                    <p className="m-0 text-[clamp(1rem,1.05vw,1.25rem)] leading-[1.2] tracking-[0.01em] text-[#160c0c]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.12} className="w-full">
              <div className="relative mx-auto aspect-[520/706] w-full max-w-[520px] overflow-hidden rounded-[18px] lg:mx-0">
                <Image src={imgValuesPortrait} alt="Two colleagues reviewing information together on a tablet" fill sizes="(min-width: 1024px) 32vw, (min-width: 640px) 70vw, 100vw" className="object-cover" />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-12 border-t border-[#250238]/20 pt-7 sm:mt-14 lg:mt-16">
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
