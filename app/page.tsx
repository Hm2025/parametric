import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'

const expertise = [
  { slug: 'special-situations-advisory', title: <>Investigations</>, description: 'We assess allegations of fraud, corruption, money laundering, and economic crime, protecting the credibility and integrity of the response.' },
  { slug: 'dispute-resolution', title: <>Intelligence</>, description: 'We uncover the wider context behind complex situations, identifying embedded risks that may not be visible from the immediate facts.' },
  { slug: 'regulatory-and-compliance', title: <>Governance</>, description: 'We strengthen the structures, policies, and programs that help organizational decisions withstand scrutiny over time.' },
  { slug: 'forensic-investigations-and-intelligence', title: <>Strategic Advisory</>, description: 'We help organizations make consequential decisions that protect reputation, strengthen stakeholder confidence, and support long-term strategic direction.' },
  { slug: 'reputation-management-and-crisis-response', title: <>Reputation Management<br />and Crisis Response</>, description: 'Multidisciplinary teams dealing with actions and events that threaten businesses, brands, and personal reputations.' },
  { slug: 'fintech-and-digital-assets-advisory', title: <>Fintech and Digital<br />Assets Advisory</>, description: 'Advice on regulation, investigations, digital assets, and complex cryptocurrency disputes.' },
  { slug: 'civil-fraud', title: <>Civil<br />Fraud</>, description: 'Expertise in civil fraud-related investigations, litigation, asset tracing, and recovery.' },
  { slug: 'private-client-advisory', title: <>Private Client<br />Advisory</>, description: 'Specific expertise for high net worth individuals and owner-managed businesses in the UK and internationally.' },
]

const articles = [
  { date: '23.07.2026', title: 'Directors, Dissent and Duty: Lessons from Saxon', description: 'Co-authored by Rob Bedford and Lisa McCreath' },
  { date: '26.11.2025', title: 'From Stablecoins to Digital Bills of Exchange', description: 'Co-authored by James Ramsden KC, Dr Khrystyna Khanas and Dr Tetiana Dmytrenko.' },
  { date: '05.11.2025', title: 'Carry on Litigating? Mazur and the Limits of Supervision', description: 'Few judgments have caused so much discussion in the legal professions in recent years.' },
  { date: '04.11.2025', title: 'Non-Financial Misconduct: The Culture Reckoning Deepens', description: 'The market is still struggling to align conduct and culture.' },
]

function Arrow() {
  return <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" />
}

export default function Home() {
  return (
    <>
      <section className="relative -mt-[6rem] min-h-[82vh] lg:-mt-[8rem] lg:min-h-[82vh] overflow-hidden bg-navy px-[var(--side-padding)] pt-[6rem] lg:pt-[8rem]">
        <Image src="/images/bg1.avif" alt="Parametric office interior" fill priority className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-content items-center gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-40">
          <AnimatedSection className="lg:pt-8">
            <h1 className="h1-display max-w-[11em] text-sand lg:max-w-none lg:whitespace-nowrap lg:text-[clamp(3rem,4vw,4rem)]">Clarity for decisions that<br />cannot afford uncertainty.</h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="max-w-sm text-base font-light leading-relaxed text-sand/90 lg:text-lg">
              Parametric GC is a specialist investigations, intelligence, governance, and strategic advisory firm. We partner with organizations and their advisers to establish facts, reduce uncertainty, and provide the clarity that allows leadership to act with confidence when the consequences of a decision will endure long after the decision itself has been made.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-extra-light-gray text-navy">
        <div className="mx-auto max-w-content border-t border-navy/30 pt-8 lg:pt-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.65fr] lg:gap-20">
            <AnimatedSection>
              <h2 className="h2-display max-w-lg">We operate where the stakes are highest.</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid gap-8 md:grid-cols-2 lg:gap-14">
                <div className="space-y-6 font-light">
                  <p>Every organization will eventually face a situation that tests its judgment in ways it did not anticipate, whether that takes the form of an allegation, a regulatory inquiry, financial misconduct, a governance failure, or risks that have embedded themselves within everyday operations without attracting attention until they surface under circumstances no one would have chosen.</p>
                  <p>What determines how an organization emerges from that moment is the quality of the decisions it makes while the uncertainty is still unresolved, and that quality depends on more than technical expertise alone.</p>
                </div>
                <div className="space-y-6 font-light">
                  <p>It depends on the ability to establish facts without assumption, interpret complexity without adding to it, and provide counsel that remains sound when the consequences reach beyond legal and regulatory exposure into reputation, stakeholder confidence, and the long-term trajectory of the organization itself.</p>
                  <p>This is the space in which Parametric GC operates, and it is the standard to which every engagement we undertake is held.</p>
                </div>
              </div>
              <Link href="/people" className="button-primary mt-10 border-navy/40 text-navy hover:border-navy">Speak with our team to discuss your requirements. <Arrow /></Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy pt-8 lg:pt-10">
        <div className="mx-auto max-w-content">
          <div className="grid gap-12 border-t border-[var(--border-color)] pt-8 lg:grid-cols-[0.72fr_1.6fr] lg:gap-20 lg:pt-10">
            <AnimatedSection>
              <p className="small-title mb-6 text-gold">Services</p>
              <h2 className="h2-display max-w-sm text-white">Expertise for consequential decisions.</h2>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-white/20 lg:block" />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {expertise.slice(0, 4).map((item, index) => (
                  <AnimatedSection key={item.slug} delay={index * 0.08} className="relative">
                    <details className="group relative z-10 flex min-h-[330px] flex-col border border-white/20 bg-white/[0.03] transition-colors open:border-gold/70 open:bg-white/[0.07] hover:border-gold/70 hover:bg-white/[0.07]">
                      <div className="relative h-24 overflow-hidden border-b border-white/15 bg-white/10 sm:h-28"><Image src={item.slug === 'special-situations-advisory' ? '/images/Impartial-Investigation-1.webp' : item.slug === 'dispute-resolution' ? '/images/Targeted-Tailored-Training-1.webp' : item.slug === 'regulatory-and-compliance' ? '/images/people.avif' : item.slug === 'forensic-investigations-and-intelligence' ? '/images/Strategic-Consulting-Services-1.webp' : '/images/bg1.avif'} alt="" fill className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" /></div>
                      <summary className="flex min-h-36 cursor-pointer list-none flex-col justify-between p-5 [&::-webkit-details-marker]:hidden sm:min-h-44 sm:p-6">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-xs text-gold transition-colors group-hover:bg-gold group-hover:text-white">{String(index + 1).padStart(2, '0')}</span>
                        <span className="mt-8 flex items-end justify-between gap-4 text-xl leading-tight text-white">{item.title}<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 text-lg font-light leading-none text-gold transition-transform group-hover:rotate-45">+</span></span>
                      </summary>
                      <div className="hidden border-t border-white/15 px-5 pb-6 pt-5 group-hover:block sm:px-6">
                        <p className="line-clamp-3 text-sm font-light leading-relaxed text-white/70">{item.description}</p>
                        <Link href={`/expertise/${item.slug}`} className="small-title mt-5 inline-flex items-center gap-3 text-gold">Find out more <Arrow /></Link>
                      </div>
                    </details>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy text-sand">
        <Image src="/images/people/18.jpg" alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-[#FF9933]/25 mix-blend-multiply" />
        <div className="relative z-10 mx-auto max-w-content px-[var(--side-padding)] py-24 lg:py-36">
          <AnimatedSection className="max-w-5xl">
            <p className="text-2xl font-light leading-tight text-white/90 lg:text-5xl">&ldquo;Every engagement we undertake begins from a different starting point, yet our objective across all of them remains consistent: to establish credible, defensible facts.&rdquo;</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-extra-light-gray pt-8 text-navy lg:pt-10">
        <div className="mx-auto max-w-content">
          <AnimatedSection><h2 className="small-title mb-12 font-semibold text-navy">News &amp; Insights</h2></AnimatedSection>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, index) => (
              <AnimatedSection key={article.title} delay={index * 0.08}>
                <Link href="/news" className="group block">
                  <div className="relative mb-6 h-44 overflow-hidden bg-navy/10"><Image src={index === 0 ? '/images/news1.avif' : index === 1 ? '/images/news2.avif' : index === 2 ? '/images/news3.avif' : '/images/Mask-group.avif'} alt="" fill className="object-cover opacity-70 transition duration-700 group-hover:scale-105" /></div>
                  <p className="small-title mb-4 text-navy/55">{article.date}</p>
                  <h3 className="h2-display mb-4 text-navy transition-colors group-hover:text-gold">{article.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed opacity-70">{article.description}</p>
                  <span className="small-title inline-flex items-center gap-3 text-navy transition-colors group-hover:text-gold">Read article <Arrow /></span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="flex justify-center"><Link href="/news" className="button-primary mt-12 border-navy/40 text-navy hover:border-navy">View all articles <Arrow /></Link></AnimatedSection>
        </div>
      </section>
    </>
  )
}
