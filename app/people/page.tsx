import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import { people } from '@/lib/people'

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
          <AnimatedSection><h2 className="small-title font-bold text-navy">Our People</h2></AnimatedSection>
          <AnimatedSection className="mt-12 max-w-5xl lg:mt-20">
            <p className="h2-display text-justify">Parametric GC is led by a multidisciplinary team whose collective experience spans corporate investigations, legal practice, regulatory compliance, intelligence analysis, and strategic advisory. Our people combine the investigative instinct required to identify what truly matters within a complex situation with the commercial and regulatory judgment needed to advise on what should follow. We recruit and retain professionals who understand that the quality of an investigation or a piece of advisory work is ultimately measured by the confidence it provides to the people who must act on its conclusions.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-navy pt-16 text-white lg:pt-24">
        <div className="mx-auto max-w-content">
          <AnimatedSection><h2 className="small-title mb-12 border-b border-[var(--border-color)] pb-4 font-bold text-white lg:mb-20">The Team</h2></AnimatedSection>
          <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {people.slice(0, 6).map((member, index) => (
              <AnimatedSection key={member.slug} delay={index * 0.05} className="group h-full">
                <Link href={`/people/${member.slug}`} className="flex h-full min-h-[34rem] flex-col">
                  <div className="relative mb-7 aspect-[3/4] overflow-hidden bg-white/10">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="small-title mb-2 text-white transition-colors group-hover:text-white">{member.name}</h3>
                  <p className="mb-4 text-sm text-white/80">{member.title}</p>
                  <p className="flex-1 text-sm leading-relaxed text-white/70">{member.description}</p>
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
