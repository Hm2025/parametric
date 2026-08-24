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
    title: 'Pro Bono',
    paragraphs: [
      'Parametric is committed to pro bono work and, in partnership with various charities, we dedicate some of our time to supporting those who could not otherwise afford to pay for legal advice and representation.',
      'We have a particular interest in injunctive and anti-harassment applications in cases of forced marriage. Parametric Group also regularly acts pro bono for other lawyers in regulatory and disciplinary proceedings, most recently in a complex and sensitive judicial review.',
    ],
  },
  {
    title: 'Community access and social responsibility',
    paragraphs: [
      'We have a strong commitment to community access and inclusivity. We are committed to spending a proportion of our time helping those who would not otherwise be able to access legal support.',
      'We are a significant contributor to Advocate, the organisation that provides free legal advice and representation to those in need, and our team are committed to fundraising to promote access to legal assistance in the community.',
      'Above all, Parametric aims to promote access to and openness in the provision of expert advocacy and legal advice for all who need the promotion or protection of their rights.',
    ],
  },
  {
    title: 'Social mobility',
    paragraphs: [
      'We promote access to the legal profession for those who have the ability, but do not have the opportunity. We work with charitable providers to promote funded opportunities to state school students to come to London and experience a career in the law. These range from funded internships to informal work experience, mentoring, personal statement and CV advice, and interview training.',
      'We believe lack of social mobility is the biggest impediment to wider diversity in the legal profession. Our responsibility to promote it sits alongside our commitment never to discriminate on grounds of race, gender, sexual orientation, age, disability or regional, social and economic background.',
      'The Parametric team is consequently diverse. It is above all energised, committed and enthusiastic.',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative -mt-[6rem] min-h-[70vh] overflow-hidden bg-navy px-[var(--side-padding)] pt-[6rem] lg:-mt-[8rem] lg:min-h-[78vh] lg:pt-[8rem]">
        <Image src="/images/bg1.avif" alt="Parametric office interior" fill priority className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-content items-end pb-16 lg:pb-24">
          <AnimatedSection>
            <h1 className="h1-display max-w-[12em] text-sand">Helping clients navigate an increasingly complex world</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-extra-light-gray text-navy">
        <div className="mx-auto max-w-content border-t border-navy/25 pt-8 lg:pt-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
            <AnimatedSection><h2 className="small-title text-navy/65">Trusted Partners</h2></AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="h2-display max-w-4xl">Parametric is a values-based organisation, committed to diversity, quality and a relentless focus on outcomes. We aim to be trusted partners to our clients, and to provide access and support to the next generation of professionals, irrespective of their backgrounds.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-sand">
        <div className="mx-auto max-w-content">
          <AnimatedSection><h2 className="small-title mb-12 border-b border-white/20 pb-4 text-sand/70 lg:mb-20">Our Values</h2></AnimatedSection>
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08} className="border-t border-white/20 pt-6">
                <h3 className="h2-display mb-5 text-sand">{value.title}</h3>
                <p className="max-w-xl font-light leading-relaxed text-sand/80">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-navy">
        <div className="mx-auto max-w-content">
          <AnimatedSection><h2 className="small-title mb-12 border-b border-navy/25 pb-4 text-navy/70 lg:mb-20">Parametric Difference</h2></AnimatedSection>
          <div className="space-y-20 lg:space-y-28">
            {differences.map((difference, index) => (
              <AnimatedSection key={difference.title} delay={index * 0.08}>
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
                  <h3 className="h2-display text-navy">{difference.title}</h3>
                  <div className="max-w-3xl space-y-6 font-light leading-relaxed text-navy/80">
                    {difference.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-20 border-t border-navy/25 pt-8">
            <Link href="/contact" className="button-primary border-navy/50 text-navy hover:border-navy">Start a conversation <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
