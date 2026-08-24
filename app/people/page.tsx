import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'

const people = [
  { slug: 'james-ramsden-kc', name: 'James Ramsden KC', title: 'Senior Partner', image: '/images/people/James-Ramsden.jpg', description: 'Commercial disputes, international enforcement, regulatory and disciplinary law, and civil fraud.' },
  { slug: 'nina-stewart', name: 'Nina Stewart', title: 'Managing Partner', image: '/images/people/Nina-Astraea-website-headshot_2026.jpg', description: 'Strategy, operations, growth, international tax, governance, and multidisciplinary service delivery.' },
  { slug: 'robert-bedford', name: 'Robert Bedford', title: 'Partner', image: '/images/people/Robert-Bedford_2000z.jpg', description: 'Cross-border commercial disputes, sanctions compliance, investigations, and asset recovery.' },
  { slug: 'piers-rake', name: 'Piers Rake', title: 'Partner', image: '/images/people/Piers-Rake_2000z.jpg', description: 'Commercial mediation, financial crime investigations, enforcement, and regulatory compliance.' },
  { slug: 'tanya-costello', name: 'Tanya Costello', title: 'Partner', image: '/images/people/tanya_costello.jpg', description: 'Political risk, special situations strategy, thought leadership, and client development.' },
  { slug: 'joe-young', name: 'Joe Young', title: 'Partner', image: '/images/people/Untitled-design-6-1-1.png', description: 'Commercial dispute resolution, international claims, arbitration, and interim applications.' },
  { slug: 'james-badcock', name: 'James Badcock', title: 'Partner', image: '/images/people/James-Badcock_2000z.jpg', description: 'Private client, trusts, estate planning, taxation, governance, and fiduciary risk.' },
  { slug: 'oliver-mishcon', name: 'Oliver Mishcon', title: 'Partner', image: '/images/people/Oliver-Mishcon.jpg', description: 'High-value commercial disputes, white collar crime, regulatory enforcement, and banking.' },
  { slug: 'dhanraj-misra', name: 'Dhanraj Misra', title: 'Partner', image: '/images/people/dhanraj-misra.jpg', description: 'Global disputes strategy, cross-border litigation, arbitration, fraud, and asset recovery.' },
  { slug: 'lloydette-bai-marrow', name: 'Lloydette Bai-Marrow', title: 'Senior Consultant', image: '/images/people/1705692629012.jpg', description: 'Corporate investigations, economic crime, ethics, compliance, and governance.' },
  { slug: 'simon-lewis-obe', name: 'Simon Lewis OBE', title: 'Special Situations Advisor', image: '/images/people/Simon-Lewis-OBE_2000z.jpg', description: 'Strategic communications, crisis response, reputation, and public affairs.' },
  { slug: 'sir-michael-rake', name: 'Sir Michael Rake', title: 'Special Situations Advisor', image: '/images/people/Sir-Michael-Rake_2000z.jpg', description: 'Strategic counsel on complex legal, commercial, financial, and leadership situations.' },
]

export default function PeoplePage() {
  return (
    <>
      <section className="relative -mt-[6rem] min-h-[78vh] overflow-hidden bg-navy px-[var(--side-padding)] pt-[6rem] lg:-mt-[8rem] lg:min-h-[78vh] lg:pt-[8rem]">
        <Image src="/images/people-hero.jpg" alt="Parametric team" fill priority className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-content flex-col justify-end pb-16 lg:pb-24">
          <AnimatedSection>
            <h1 className="h1-display max-w-[11em] text-sand">Our people bring together legal, investigative, and strategic expertise</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white text-navy">
        <div className="mx-auto max-w-content border-t border-navy/25 pt-8 lg:pt-10">
          <AnimatedSection><h2 className="small-title text-navy/70">Who We Are</h2></AnimatedSection>
          <AnimatedSection className="mt-12 max-w-5xl lg:mt-20">
            <p className="h2-display">Our team brings together barristers, solicitors, forensic investigators, forensic accountants, certified fraud examiners, intelligence professionals, and experts in tax, wealth, regulation, reputation management, and crisis response.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="mx-auto max-w-content">
          <AnimatedSection><h2 className="small-title mb-12 border-b border-[var(--border-color)] pb-4 text-white lg:mb-20">The Team</h2></AnimatedSection>
          <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
            {people.filter((_, index) => index < 4 || index >= 8).map((member, index) => (
              <AnimatedSection key={member.slug} delay={index * 0.05} className="group">
                <Link href={`/people#${member.slug}`} className="block">
                  <div className="relative mb-7 aspect-[3/4] overflow-hidden bg-white/10">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="small-title mb-2 text-white transition-colors group-hover:text-white">{member.name}</h3>
                  <p className="mb-4 text-sm text-white/80">{member.title}</p>
                  <p className="text-sm leading-relaxed text-white/70">{member.description}</p>
                  <span className="small-title mt-6 inline-flex items-center gap-3 text-white">View profile <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" /></span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-navy">
        <div className="mx-auto flex max-w-content flex-col gap-8 border-t border-navy/20 pt-8 lg:flex-row lg:items-end lg:justify-between lg:pt-10">
          <p className="h2-display max-w-3xl">A focused team for complex situations, bringing clarity to every challenge.</p>
          <Link href="/contact" className="button-primary border-navy/40 text-navy hover:border-navy">Get in touch</Link>
        </div>
      </section>
    </>
  )
}
