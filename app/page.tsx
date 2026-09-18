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
        <div className="cloud cloud-one" />
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

      <section className="section-padding bg-extra-light-gray text-navy">
        <div className="mx-auto max-w-content">
          <div className="mb-10">
            <p className="mb-5 text-[clamp(1.1rem,1vw,1.5rem)] font-medium uppercase tracking-[0.12em] text-navy">About us</p>
            <div className="h-px w-full bg-[#FF9933]" />
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.3fr_1.3fr] lg:gap-16">
            <AnimatedSection>
              <div className="max-w-[6.5ch] text-navy" style={{
                fontFamily: 'var(--font-effra), sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '40px',
                lineHeight: '0.94',
                letterSpacing: '-0.04em',
                textAlign: 'left',
                margin: 0,
                whiteSpace: 'nowrap',
              }}>
                <div className="block">We operate</div>
                <div className="block">where the stakes</div>
                <div className="block">are highest.</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="text-navy/90" style={{ display: 'grid', rowGap: '68px' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '20px', lineHeight: '145%', letterSpacing: '0.02em', margin: 0, color: '#250238' }}>
                  Every organization will eventually face a situation that tests its judgment in ways it did not anticipate, whether that takes the form of an allegation, a regulatory inquiry, financial misconduct, a governance failure, or risks that have embedded themselves within everyday operations without attracting attention until they surface under circumstances no one would have chosen.
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '20px', lineHeight: '145%', letterSpacing: '0.02em', margin: '-12px 0 0', color: '#250238' }}>
                  What determines how an organization emerges from that moment is the quality of the decisions it makes while the uncertainty is
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-navy/90" style={{ display: 'grid', rowGap: '68px' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '20px', lineHeight: '145%', letterSpacing: '0.02em', margin: 0, color: '#250238' }}>
                  It depends on the ability to establish facts without assumption, interpret complexity without adding to it, and provide counsel that remains sound when the consequences reach beyond legal and regulatory exposure into reputation, stakeholder confidence, and the long-term trajectory of the organization itself.
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: '20px', lineHeight: '145%', letterSpacing: '0.02em', margin: '18px 0 0', color: '#250238' }}>
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

      <section className="relative min-h-[620px] overflow-hidden text-sand lg:min-h-[760px]" style={{ background: 'linear-gradient(180deg, #F66A00 0%, #F6993F 100%)' }}>
        <div className="absolute inset-0">
          <Image src="/images/section.png" alt="" fill className="object-cover opacity-100 transition duration-[1400ms] ease-out motion-safe:animate-[drift_24s_ease-in-out_infinite_alternate]" />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255, 106, 0, 0.98) 0%, rgba(246, 153, 63, 0.8) 100%)' }} />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-content items-center px-[var(--side-padding)] pb-20 pt-10 lg:min-h-[760px] lg:pb-24 lg:pt-12">
          <div className="grid w-full items-center gap-8 lg:grid-cols-1">
            <AnimatedSection className="w-full pt-0 lg:pt-0">
              <p className="max-w-[1300px] text-white/95" style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '48px',
                lineHeight: '135%',
                letterSpacing: '0.02em',
              }}>
                <span style={{ display: 'block' }}>&ldquo;Every engagement we undertake</span>
                <span style={{ display: 'block' }}>begins from a different starting point,</span>
                <span style={{ display: 'block' }}>yet our objective across all of them</span>
                <span style={{ display: 'block' }}>remains consistent: to establish</span>
                <span style={{ display: 'block' }}>credible defensible facts.&rdquo;</span>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding pb-14 pt-8 lg:pt-10" style={{ background: 'linear-gradient(180deg, #FFF7E6 0%, #FFF7E6 100%)' }}>
        <div className="mx-auto max-w-[1280px]">
          <AnimatedSection className="mb-10">
            <div className="flex items-center justify-start">
              <h2 className="mb-5 text-[clamp(1.2rem,1.55vw,2.2rem)] font-semibold uppercase tracking-[0.08em] text-[#2d0b35]">News &amp; Briefings</h2>
            </div>
            <div className="h-px w-full bg-[#2d0b35]/60" />
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {allArticles.slice(0, 4).map((article, index) => (
              <AnimatedSection key={article.slug} delay={index * 0.08} className="h-full">
                <Link href={`/news/${article.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#ffdb9f]/80 bg-[#250238] text-white shadow-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(41,0,55,0.2)]">
                  <div className="relative h-56 overflow-hidden bg-[#250238]">
                    <Image src={article.image} alt={article.title} fill className="object-cover opacity-80 transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,20,70,0.18)_0%,rgba(37,2,56,0.75)_100%)]" />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="small-title mb-4 text-white/70">{article.date}</p>
                    <h3 className="mb-4 text-[clamp(1.8rem,2vw,2.4rem)] leading-[1.08] tracking-[-0.04em] text-white transition-colors group-hover:text-[#f8d7aa]" style={{ fontFamily: 'var(--font-effra), sans-serif', fontWeight: 400 }}>{article.title}</h3>
                    <p className="text-sm leading-relaxed text-white/80">{article.excerpt}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
