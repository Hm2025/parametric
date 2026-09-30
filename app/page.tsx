import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import { allArticles } from '@/lib/data'

const expertise = [
  { slug: 'special-situations-advisory', title: <>Investigation</>, description: 'We strengthen the\nstructures, policies, and\nprograms that help' },
  { slug: 'dispute-resolution', title: <>Intelligence</>, description: 'We uncover the wider\ncontext behind complex\nsituations, identifying' },
  { slug: 'regulatory-and-compliance', title: <>Investigation</>, description: 'We strengthen the\nstructures, policies, and\nprograms that help' },
  { slug: 'forensic-investigations-and-intelligence', title: <>Advisory</>, description: 'We help organizations\nmake consequential\ndecisions that protect\nreputation' },
  { slug: 'reputation-management-and-crisis-response', title: <>Reputation Management<br />and Crisis Response</>, description: 'Multidisciplinary teams dealing with actions and events that threaten businesses, brands, and personal reputations.' },
  { slug: 'fintech-and-digital-assets-advisory', title: <>Fintech and Digital<br />Assets Advisory</>, description: 'Advice on regulation, investigations, digital assets, and complex cryptocurrency disputes.' },
  { slug: 'civil-fraud', title: <>Civil<br />Fraud</>, description: 'Expertise in civil fraud-related investigations, litigation, asset tracing, and recovery.' },
  { slug: 'private-client-advisory', title: <>Private Client<br />Advisory</>, description: 'Specific expertise for high net worth individuals and owner-managed businesses in the UK and internationally.' },
]

const featuredArticles = [
  { article: allArticles[0], image: allArticles[0].image, excerpt: allArticles[0].excerpt },
  { article: allArticles[1], image: allArticles[1].image, excerpt: allArticles[1].excerpt },
  { article: allArticles[1], image: allArticles[2].image, excerpt: allArticles[0].excerpt },
  { article: allArticles[2], image: allArticles[3].image, excerpt: allArticles[2].excerpt },
]

function Arrow() {
  return <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" />
}

export default function Home() {
  return (
    <>
      <section className="relative -mt-[6rem] min-h-screen overflow-hidden bg-navy px-[var(--side-padding)] pt-[6rem] lg:-mt-[8rem] lg:min-h-screen lg:pt-[8rem]">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover object-center opacity-90 scale-[1.08] motion-safe:animate-[slow-pan_20s_ease-in-out_infinite_alternate]">
          <source src="/herosection.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,153,51,0.18),_transparent_32%),linear-gradient(90deg,rgba(37,2,56,0.72),rgba(37,2,56,0.52),rgba(37,2,56,0.78))]" />
        <div className="cloud cloud-two" />
        <div className="cloud cloud-three" />
        <div className="hero-orb left-[-10%] top-[12%] h-72 w-72 bg-[#ff9b4d]/20 blur-3xl" />
        <div className="hero-orb right-[-8%] bottom-[7%] h-80 w-80 bg-[#ffd5a2]/15 blur-3xl" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-content items-center justify-center lg:min-h-[calc(100vh-8rem)]">
          <AnimatedSection className="w-full">
            <h1 className="hero-entry mx-auto text-center text-sand transition-transform duration-700 hover:scale-[1.01]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '80px', lineHeight: '112%', letterSpacing: '-0.01em', textAlign: 'center' }}>
              <span className="block">We operate where the</span>
              <span className="block">stakes are highest.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-[var(--side-padding)] py-12 text-[#250238] sm:py-16 2xl:min-h-[799px] 2xl:py-0">
        <div className="mx-auto max-w-[1459px] 2xl:pt-[86px]">
          <div className="mb-8 sm:mb-10 2xl:mb-[31px]">
            <h2 className="mb-5 pl-0 text-[clamp(1.1rem,1.6vw,1.875rem)] font-semibold uppercase leading-[1.117] tracking-[-0.05em] 2xl:mb-[30px] 2xl:pl-[18px] 2xl:text-[30px]">
              About Us
            </h2>
            <div className="h-px w-full bg-[#ff6501]" />
          </div>

          <div className="grid min-w-0 items-start gap-8 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10 2xl:grid-cols-[363px_480px_478px] 2xl:justify-between 2xl:gap-0 2xl:pl-[18px] 2xl:pt-[47px]">
            <AnimatedSection className="min-w-0 lg:col-span-2 2xl:col-span-1">
              <h3 className="m-0 max-w-[363px] text-[clamp(2rem,2.08vw,2.5rem)] font-normal leading-[1.35] tracking-[0.02em] text-[#250238] 2xl:text-[40px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="block">We operate</span>
                <span className="block">where the stakes</span>
                <span className="block">are highest.</span>
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="min-w-0">
              <div className="grid gap-8 2xl:gap-[68px]">
                <p className="m-0 text-[clamp(1rem,1.05vw,1.25rem)] leading-[1.45] tracking-[0.02em] 2xl:text-[20px]">
                  Every organization will eventually face a situation that tests its judgment in ways it did not anticipate, whether that takes the form of an allegation, a regulatory inquiry, financial misconduct, a governance failure, or risks that have embedded themselves within everyday operations without attracting attention until they surface under circumstances no one would have chosen.
                </p>
                <p className="m-0 text-[clamp(1rem,1.05vw,1.25rem)] leading-[1.45] tracking-[0.02em] 2xl:hidden">
                  What determines how an organization emerges from that moment is the quality of the decisions it makes while the uncertainty is still unresolved, and that quality depends on more than technical expertise alone.
                </p>
                <p className="m-0 hidden text-[20px] leading-[1.45] tracking-[0.02em] 2xl:block">
                  What determines how an organization emerges from that moment is the quality of the decisions it makes while the uncertainty is
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="min-w-0">
              <div className="grid gap-8 2xl:gap-[68px]">
                <p className="m-0 text-[clamp(1rem,1.05vw,1.25rem)] leading-[1.45] tracking-[0.02em] 2xl:hidden">
                  It depends on the ability to establish facts without assumption, interpret complexity without adding to it, and provide counsel that remains sound when the consequences reach beyond legal and regulatory exposure into reputation, stakeholder confidence, and the long-term trajectory of the organization itself.
                </p>
                <p className="m-0 hidden text-[20px] leading-[1.45] tracking-[0.02em] 2xl:block">
                  still unresolved, and that quality depends on more than technical expertise alone. It depends on the ability to establish facts without assumption, interpret complexity without adding to it, and provide counsel that remains sound when the consequences reach beyond legal and regulatory exposure into reputation, stakeholder confidence, and the long-term trajectory of the organization itself.
                </p>
                <p className="m-0 text-[clamp(1rem,1.05vw,1.25rem)] leading-[1.45] tracking-[0.02em] 2xl:text-[20px]">
                  This is the space in which ParametricGC operates, and it is the standard to which every engagement we undertake is held.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#250238] pt-8 lg:pt-10" style={{ width: '100%', minHeight: 'auto', transform: 'none', opacity: 1 }}>
        <div className="mx-auto max-w-content w-full">
          <div className="mb-8">
            <p className="small-title text-white">Services</p>
            <div className="mt-4 h-px w-full bg-[#FF9933]" />
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.6fr] lg:gap-10">
            <AnimatedSection>
              <h2 className="max-w-[9ch] text-white" style={{
                fontFamily: 'var(--font-effra), sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: 'clamp(2.6rem, 3vw, 4.2rem)',
                lineHeight: '0.94',
                letterSpacing: '-0.05em',
                margin: 0,
              }}>
                Expertise for consequential decisions.
              </h2>
            </AnimatedSection>

            <div className="grid w-full gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
              {expertise.slice(0, 4).map((item, index) => (
                <AnimatedSection key={item.slug} delay={index * 0.08} className="relative">
                  <div className="group relative flex h-full flex-col overflow-hidden bg-[#4A0B68] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.22)]" style={{ width: '100%', height: '100%' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#250238]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative h-[200px] overflow-hidden bg-[#e6e0e8]">
                      <Image src={item.slug === 'special-situations-advisory' ? '/images/invist.png' : item.slug === 'dispute-resolution' ? '/images/intell.png' : item.slug === 'regulatory-and-compliance' ? '/images/gov.png' : item.slug === 'forensic-investigations-and-intelligence' ? '/images/advisory.png' : '/images/bg1.avif'} alt="" fill className="object-cover opacity-90 transition duration-700 ease-out group-hover:scale-110" />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-start bg-[#3F075E] px-5 pb-6 pt-8 text-white transition-all duration-300 group-hover:bg-[#4A0B68] sm:px-6 sm:pb-7 sm:pt-9">
                      <div>
                        <h3 className="mb-3 text-[clamp(1.4rem,1.5vw,2.1rem)] leading-[1.1] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-0.5" style={{ fontFamily: 'var(--font-effra), sans-serif', fontWeight: 300 }}>
                          {index === 0 ? 'Governance' : item.title}
                        </h3>
                        <p className="max-w-[18ch] text-sm leading-relaxed text-white/80 transition-opacity duration-300 group-hover:text-white">{index === 0 ? 'We assess allegations of\nfraud, corruption, money\nlaundering, and\neconomic' : item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Our approach" className="relative isolate min-h-[620px] overflow-hidden bg-[#c4b4a8] text-[#250238] lg:min-h-[799px]">
        <div className="absolute inset-0">
          <Image src="/image 23.png" alt="" width={1946} height={799} priority sizes="100vw" className="absolute left-1/2 top-0 h-[799px] w-[1946px] max-w-none -translate-x-1/2 object-fill" />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255, 130, 49, 0.76) 0%, rgba(251, 169, 78, 0.76) 100%)' }} />
        <div aria-hidden="true" className="absolute right-[8%] top-[5%] aspect-[538/511] w-[clamp(9rem,18vw,21rem)] opacity-30">
          <Image src="/image 12.png" alt="" fill sizes="(min-width: 1024px) 21rem, 18vw" className="object-contain" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1920px] items-start px-[clamp(2rem,11vw,13rem)] pb-16 pt-[clamp(5.5rem,12vh,6.4375rem)] lg:min-h-[799px] lg:pb-20 lg:pt-[103px]">
          <AnimatedSection className="w-full">
            <blockquote className="m-0 max-w-[1060px] text-[clamp(2rem,2.083vw,2.5rem)] font-medium leading-[1.35] tracking-[0.02em] text-[#240237] lg:text-[40px]">
              Every engagement we undertake<br className="hidden lg:block" />{' '}
              begins from a different starting point,<br className="hidden lg:block" />{' '}
              yet our objective across all of them remains<br className="hidden lg:block" />{' '}
              consistent: to establish credible, defensible facts.
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#fff7e6] px-[var(--side-padding)] py-[clamp(3.25rem,5vw,5.75rem)]">
        <div className="mx-auto max-w-[1526px]">
          <AnimatedSection className="mb-8 sm:mb-10">
            <h2 className="mb-5 px-4 text-[clamp(1.45rem,1.7vw,2rem)] font-semibold uppercase leading-tight tracking-[0.02em] text-[#250238]">
              News &amp; Briefings
            </h2>
            <div className="h-px w-full bg-[#ff6a1a]" />
          </AnimatedSection>

          <div className="rounded-2xl bg-[#fff0d3] p-4 sm:p-6 lg:p-[30px_34px]">
            <div className="grid auto-cols-[84%] grid-flow-col gap-4 overflow-x-auto snap-x snap-mandatory pb-2 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:gap-6">
              {featuredArticles.map(({ article, image, excerpt }, index) => (
                <AnimatedSection key={`${article.slug}-${index}`} delay={index * 0.08} className="h-full snap-start">
                  <Link href={`/news/${article.slug}`} className="group relative block aspect-[0.7] h-full min-h-[390px] overflow-hidden rounded-[18px] bg-[#4b1764] text-white sm:min-h-0">
                    <Image src={image} alt="" fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 84vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[#4b1764]/70 transition-colors duration-300 group-hover:bg-[#4b1764]/60" />
                    <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7 lg:p-8">
                      <h3 className="max-w-[17ch] text-[clamp(1.35rem,1.55vw,1.9rem)] leading-[1.12] text-white" style={{ fontFamily: 'var(--font-effra), sans-serif', fontWeight: 300 }}>
                        {article.title}
                      </h3>
                      <p className="line-clamp-3 max-w-[32ch] text-[clamp(0.95rem,1vw,1.15rem)] leading-[1.22] text-white/95" style={{ fontFamily: 'var(--font-effra), sans-serif', fontWeight: 300 }}>
                        {excerpt}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
