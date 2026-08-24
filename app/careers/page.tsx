import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'

export default function CareersPage() {
  return (
    <>
      <section className="relative -mt-[6rem] min-h-[78vh] overflow-hidden bg-navy px-[var(--side-padding)] pt-[6rem] lg:-mt-[8rem] lg:min-h-[78vh] lg:pt-[8rem]">
        <Image src="/images/careers-hero.png" alt="Parametric team collaboration" fill priority className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-content flex-col justify-end pb-16 lg:pb-24">
          <AnimatedSection>
            <h1 className="h1-display max-w-[11em] text-sand">Join our team of professionals</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white text-navy">
        <div className="mx-auto max-w-content grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-24">
          <AnimatedSection>
            <h2 className="small-title text-navy/70">Join Us</h2>
          </AnimatedSection>
          <AnimatedSection className="max-w-4xl" delay={0.1}>
            <p className="h2-display">Our team is drawn from a diverse range of backgrounds including barristers, solicitors, chartered accountants, forensic investigators and forensic accountants, certified fraud examiners, intelligence professionals, and experts in compliance, tax, wealth, regulation, reputation management, and crisis response.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="mx-auto max-w-content grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-24">
          <AnimatedSection>
            <h2 className="small-title text-white">A Shared Ethos</h2>
          </AnimatedSection>
          <AnimatedSection className="max-w-4xl space-y-6 text-white/85" delay={0.1}>
            <p className="h2-display text-white">We are always interested in meeting talented people who share our vision for multidisciplinary professional services and could add to the breadth and diversity of our platform.</p>
            <p>We are committed to developing young practitioners, either informally as a career mentor or more formally by becoming part of our pool of talent available to work on cases.</p>
            <p>We will never discriminate on grounds of educational background. We recognise that educational opportunity is shaped by chance and that talent flourishes in different ways and at different stages of personal development.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white text-navy">
        <div className="mx-auto max-w-content">
          <AnimatedSection><h2 className="small-title mb-12 border-b border-navy/20 pb-4 text-navy lg:mb-20">Summer Scheme</h2></AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection>
              <div className="relative aspect-[1.8] overflow-hidden bg-navy/10">
                <Image src="/images/careers-feature.png" alt="Parametric professional services team" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection className="space-y-8" delay={0.1}>
              <p className="h2-display">Parametric is proud to announce the launch of its summer scheme, offering a week&apos;s work experience in our multi-disciplinary firm.</p>
              <div className="space-y-5 leading-relaxed">
                <p>Over the course of a week, you will learn about our practice areas, rotate between the Legal and Investigations teams, attend Q&amp;A sessions, build your network, and receive feedback and advice.</p>
                <p>Students and graduates from any degree discipline are welcome to apply. We are committed to widening access and recognising talent from every background.</p>
              </div>
              <div className="grid gap-5 border-t border-navy/20 pt-6 sm:grid-cols-2">
                <div><p className="small-title mb-2 text-navy/60">When is the scheme?</p><p>29 June 2026 - 03 July 2026</p></div>
                <div><p className="small-title mb-2 text-navy/60">When can I apply?</p><p>30 March - 30 April 2026</p></div>
              </div>
              <Link href="mailto:info@parametric-group.com" className="button-primary border-navy/40 text-navy hover:border-navy">Apply by email</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
