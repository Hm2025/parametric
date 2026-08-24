import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'

const expertise = [
  { slug: 'special-situations-advisory', title: <>Special Situations<br />Advisory</>, description: 'Strategic counsel and hands-on support from experienced experts in complex legal, commercial, regulatory, and reputational crises.' },
  { slug: 'dispute-resolution', title: <>Dispute<br />Resolution</>, description: 'A dispute resolution team of barristers, solicitors, forensic investigators, and intelligence analysts with deep international expertise.' },
  { slug: 'regulatory-and-compliance', title: <>Regulatory and<br />Compliance</>, description: "Deep expertise in regulatory compliance for both contentious and non-contentious situations in today's complex global environment." },
  { slug: 'forensic-investigations-and-intelligence', title: <>Forensic Investigations<br />and Intelligence</>, description: 'A holistic approach to the management of legal, regulatory, commercial, and reputational risks.' },
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
        <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-content items-center gap-12 lg:grid-cols-[0.8fr_1.45fr] lg:gap-20">
          <AnimatedSection className="lg:pt-8">
            <p className="max-w-sm text-base font-light leading-relaxed text-sand/90 lg:text-lg">
              A special situations legal and professional services firm committed to protecting our clients&apos; interests, mitigating risk and unlocking opportunity
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="h1-display max-w-[11em] text-sand">Legal and professional services, from every angle</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-extra-light-gray text-navy">
        <div className="mx-auto max-w-content border-t border-navy/30 pt-8 lg:pt-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.65fr] lg:gap-20">
            <AnimatedSection>
              <h2 className="h2-display max-w-lg">At Parametric, we believe that the legal story is never the whole story.</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid gap-8 md:grid-cols-2 lg:gap-14">
                <div className="space-y-6 font-light">
                  <p>In today&apos;s volatile global environment, clients are faced with increasingly frequent and complex threats and challenges. These unexpected situations can result in a myriad of legal, commercial, regulatory and reputational issues.</p>
                  <p>Too often, an organisation&apos;s response to these atypical events is hampered by having to manage multiple external advisors. That is expensive, time consuming and can impair the effective resolution of the problem itself.</p>
                </div>
                <div className="space-y-6 font-light">
                  <p>Parametric breaks the mould by offering a multidisciplinary, integrated approach. We eliminate the silos that traditionally separate legal and professional services, providing a one stop solution for resolving complex problems, special situations and crisis events.</p>
                  <p>Our tailored teams are entirely focused on achieving the best outcomes for our clients, assisted by our Special Situations Advisory Panel.</p>
                </div>
              </div>
              <Link href="/expertise/special-situations-advisory" className="button-primary mt-10 border-navy/40 text-navy hover:border-navy">Special Situations Advisory Panel <Arrow /></Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="mx-auto max-w-content">
          <AnimatedSection><h2 className="small-title mb-12 border-b border-[var(--border-color)] pb-4 text-gold lg:mb-20">Services</h2></AnimatedSection>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {expertise.slice(0, 4).map((item, index) => (
              <AnimatedSection key={item.slug} delay={index * 0.06}>
                <Link href={`/expertise/${item.slug}`} className="group block border-l border-[var(--border-color)] pl-6">
                  <div className="relative mb-7 h-28 overflow-hidden bg-sand/10"><Image src="/images/bg1.avif" alt="" fill className="object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-75" /></div>
                  <h3 className="small-title mb-4 text-gold transition-colors group-hover:text-white">{item.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed opacity-70">{item.description}</p>
                  <span className="small-title inline-flex items-center gap-3 text-gold transition-colors group-hover:text-white">Find out more <Arrow /></span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy text-sand">
        <Image src="/images/bg1.avif" alt="" fill className="object-cover opacity-30" />
        <div className="relative z-10 mx-auto max-w-content px-[var(--side-padding)] py-24 lg:py-36">
          <AnimatedSection className="max-w-4xl">
            <blockquote className="h2-display mb-10 font-extralight italic">&ldquo;We are transforming the delivery of legal and professional services, ensuring that clients receive a tailored service to achieve the best outcome.&rdquo;</blockquote>
            <cite className="small-title not-italic text-gold">Nina Stewart, Managing Partner</cite>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="mx-auto max-w-content">
          <AnimatedSection><h2 className="small-title mb-12 border-b border-[var(--border-color)] pb-4 text-gold">Accolades</h2></AnimatedSection>
          <div className="grid grid-cols-2 border-l border-t border-[var(--border-color)] md:grid-cols-4">
            {['Legal 500', 'Leading Firm', 'Recommended Lawyer', 'Modern Law Awards', 'Leading Partner', 'UK Firm to Watch', 'British Legal Awards', 'Innovation Awards'].map((award, index) => (
              <AnimatedSection key={award} delay={index * 0.05} className="flex min-h-36 items-center justify-center border-b border-r border-[var(--border-color)] p-8 text-center lg:min-h-52">
                <span className="small-title text-white transition-colors hover:text-gold">{award}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-extra-light-gray text-navy">
        <div className="mx-auto max-w-content">
          <AnimatedSection><h2 className="small-title mb-12 border-b border-navy/25 pb-4 text-navy/70">News &amp; Insights</h2></AnimatedSection>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, index) => (
              <AnimatedSection key={article.title} delay={index * 0.08}>
                <Link href="/news" className="group block">
                  <div className="relative mb-6 h-44 overflow-hidden bg-navy/10"><Image src="/images/bg1.avif" alt="" fill className="object-cover opacity-70 transition duration-700 group-hover:scale-105" /></div>
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
