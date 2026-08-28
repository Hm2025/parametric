import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import { services } from '@/lib/data'

const investigationFocusAreas = [
  {
    title: 'Strategic Counsel',
    text: 'Providing seasoned expertise and practical support to clients facing complex, event-driven legal, regulatory, financial, or reputational threats. Our Advisors leverage unrivalled real-world experience of navigating atypical situations, offering strategic insights and actionable solutions to help clients protect value and exploit opportunity.',
  },
  {
    title: 'Independent Inquiries and Investigations',
    text: 'Leading independent inquiries, reviews, or high-stakes investigations with integrity. Our Advisors have led Independent Inquiries and reviews, as well as high-profile corporate investigations on behalf of clients facing heightened scrutiny or seeking to uncover facts and learn lessons.',
  },
  {
    title: 'Coaching and Mentoring',
    text: 'Offering personalised coaching and mentoring to C-suite leaders, executives, and management who are navigating change, complexity, or uncertainty. Our Advisers have decades of experience at the top, where they have harnessed invaluable insights on resilient leadership, conflict resolution and change management.',
  },
  {
    title: 'Crisis Response Support',
    text: 'Delivering hands-on crisis management support from experts who have successfully led organisations through a broad spectrum of crises and material threat events. Our Advisors include some of the most well-known corporate “trouble-shooters” in the United Kingdom, who have steered domestic and international businesses through existential crises.',
  },
]

const servicePageContent = {
  'dispute-resolution': {
    title: 'Intelligence',
    image: '/images/Targeted-Tailored-Training-1.webp',
    paragraphs: [
      'Informed decisions require a thorough understanding of the context in which a situation has developed and not only the facts that sit immediately in front of the organization. Our intelligence practice exists because the most significant risks an organization faces are often embedded in relationships, commercial structures, and operational patterns that do not surface through standard due diligence or internal review processes.',
      'We help clients understand the individuals, entities, financial flows, and risk indicators connected to a matter, drawing on open-source research, structured analysis, and investigative methodology to build a picture that is detailed enough to act on and documented enough to defend. This work supports pre-transactional and ongoing due diligence, risk assessment ahead of significant commercial or strategic decisions, counterparty and supply chain analysis, and the background intelligence that shapes how an investigation, a governance review, or a regulatory response is ultimately designed and conducted.',
      'In practice: A financial institution considering a strategic partnership in a new market engaged Parametric GC to conduct enhanced due diligence on the prospective counterparty. Our intelligence work identified undisclosed beneficial ownership structures and connections to previously sanctioned entities, enabling the client to make an informed decision before the transaction progressed to a point where withdrawal would have carried significant commercial and reputational cost.',
    ],
  },
  'regulatory-and-compliance': {
    title: 'Governance',
    image: '/images/people.avif',
    paragraphs: [
      'Governance is the accumulated effect of decisions an organization makes consistently, under scrutiny, over time. Parametric GC advises businesses and institutions on the structures, policies, and programs that allow those decisions to withstand examination whenever they are tested. Our governance work includes compliance program design and development, policy creation and periodic review, governance structure advisory and board-level support, regulatory risk assessment, and remediation planning in the wake of an investigation, a regulatory finding, or an internal review that has identified material gaps.',
      'We work alongside leadership teams, boards, and compliance functions to ensure that governance reflects how the organization genuinely operates, because a framework that does not account for the realities of the business it is meant to govern will not hold when it is needed most.',
      'In practice: Following a regulatory review that identified significant weaknesses in an international development agency\'s anti-fraud and corruption controls, Parametric GC was engaged to redesign the organisation\'s compliance framework. The engagement included a full policy review, the design of a new whistleblowing procedure, training delivered across four country offices, and a monitoring framework that allowed the organisation to demonstrate sustained improvement to its oversight body.',
    ],
  },
  'forensic-investigations-and-intelligence': {
    title: 'Strategic Advisory',
    image: '/images/Strategic-Consulting-Services-1.webp',
    paragraphs: [
      'The most consequential decisions an organization faces often sit beyond the boundaries of a single investigation or a single policy review, touching reputation, stakeholder confidence, regulatory relationships, and the long-term strategic direction of the business itself. Our strategic advisory practice supports leadership teams and boards through precisely those decisions, drawing on regulatory understanding, investigative insight, and commercial judgment to help our clients determine not only what has happened, but what should happen next and how to communicate that course of action to the audiences who need to hear it.',
      'In practice: A membership body facing public allegations of governance failure engaged Parametric GC to advise its board through the period between the allegations surfacing and the completion of the independent review. Our strategic counsel covered stakeholder communication, regulatory engagement, interim governance measures, and the sequencing of public disclosures, ensuring the organisation maintained credibility throughout a period of sustained scrutiny.',
    ],
  },
} as const

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default function ExpertisePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return notFound()

  if (params.slug === 'special-situations-advisory') {
    return (
      <>
        <section className="relative -mt-[6rem] flex min-h-[28vh] items-end pb-12 px-[var(--side-padding)] bg-navy pt-[6rem] lg:-mt-[8rem] lg:min-h-[32vh] lg:pt-[8rem]">
          <div className="mx-auto max-w-content w-full">
            <AnimatedSection>
              <p className="small-title mb-4 text-white/70">Investigations</p>
              <h1 className="h1-display text-sand">Investigations</h1>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-extra-light-gray text-navy">
          <div className="mx-auto max-w-content">
            <AnimatedSection>
              <div className="mb-12 border-b border-navy/20 pb-4">
                <p className="small-title text-navy/70">Overview</p>
              </div>
            </AnimatedSection>

            <div className="space-y-12 lg:space-y-16">
              <AnimatedSection>
                <div className="relative aspect-[16/7] overflow-hidden bg-navy/10">
                  <Image src="/images/Impartial-Investigation-1.webp" alt="Special Situations Advisory" fill className="object-contain opacity-75" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15} className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
                <div className="space-y-6 font-light text-base leading-relaxed">
                  <p className="h2-display !text-[1.85rem] !leading-[1.2] max-w-[26rem]">
                    When an allegation of fraud, corruption, money laundering, or other form of economic crime comes to light, the credibility of the organization&apos;s response is as important as the substance of that response. Parametric GC conducts investigations that are independent by design and defensible by the standard to which they are held, establishing facts through evidence rather than assumption and delivering findings that withstand internal, regulatory, and legal examination.
                  </p>
                </div>
                <div className="space-y-6 font-light text-base leading-relaxed">
                  <p>
                    Our investigative work encompasses fraud and financial misconduct, corruption and bribery, money laundering and proceeds of crime, whistleblower and protected disclosure allegations, workplace misconduct carrying regulatory or reputational consequences, and concerns arising from third-party, vendor, or supply chain relationships. Every investigation we undertake follows a clear, documented methodology designed to protect the integrity of the process and the weight of its conclusions.
                  </p>
                  <p>
                    <strong>In practice:</strong> A multinational organization identified irregularities in procurement activity across two operating regions. Parametric GC was instructed to conduct an independent investigation, which involved reviewing transactional records spanning three years, interviewing staff across multiple jurisdictions, and producing a findings report that was subsequently used to support both internal disciplinary proceedings and a voluntary regulatory disclosure.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy text-white">
          <div className="mx-auto max-w-content">
            <AnimatedSection>
              <div className="mb-12 border-b border-white/20 pb-4">
                <p className="small-title text-white/70">Our Focus Areas</p>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 lg:grid-cols-2">
              {investigationFocusAreas.map((area, index) => (
                <AnimatedSection key={area.title} delay={index * 0.08}>
                  <div className="border-t border-white/20 pt-6">
                    <h3 className="mb-3 text-2xl font-light leading-tight text-white">{area.title}</h3>
                    <p className="max-w-[42rem] text-base leading-relaxed text-white/80">{area.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white text-navy">
          <div className="mx-auto max-w-content">
            <AnimatedSection>
              <div className="border-t border-navy/20 pt-8">
                <Link href="/contact" className="button-primary border-navy bg-navy text-white hover:border-navy">
                  Get in touch
                  <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </>
    )
  }

  const pageContent = servicePageContent[params.slug as keyof typeof servicePageContent]

  return (
    <>
      <section className="relative min-h-[40vh] flex items-end pb-12 px-[var(--side-padding)] bg-navy">
        <div className="max-w-content mx-auto w-full">
          <AnimatedSection>
            <p className="small-title mb-4 text-white/70">{pageContent?.title || service.title}</p>
            <h1 className="h1-display text-sand">{pageContent?.title || service.title}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-sand text-navy">
        <div className="mx-auto max-w-content">
          <div className="space-y-12 lg:space-y-16">
            <AnimatedSection>
              <div className="relative aspect-[16/7] overflow-hidden bg-navy/10">
                <Image src={pageContent?.image || service.image || '/images/bg1.avif'} alt={pageContent?.title || service.title} fill className="object-contain opacity-75" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
              <div className="space-y-6 font-light text-base leading-relaxed">
                <p className="h2-display !text-[1.85rem] !leading-[1.2] max-w-[26rem]">{pageContent?.paragraphs[0] || service.shortDesc}</p>
              </div>
              <div className="space-y-6 font-light text-base leading-relaxed">
                {(pageContent?.paragraphs.slice(1) || [
                  `Our ${service.title.toLowerCase()} practice advises on the full spectrum of matters, from routine advisory work to the most complex, high-value transactions and disputes. We take a commercial, results-oriented approach that prioritises your strategic objectives.`,
                ]).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

        <section className="section-padding bg-navy text-white">
        <div className="max-w-content mx-auto">
          <AnimatedSection>
            <h2 className="small-title mb-12 border-b border-white/20 pb-4 font-bold text-white">Areas of Focus</h2>
          </AnimatedSection>
          <div className="grid gap-8 lg:grid-cols-2">
            {investigationFocusAreas.map((area, index) => (
              <AnimatedSection key={area.title} delay={index * 0.08}>
                <div className="border-t border-white/20 pt-6">
                  <h3 className="mb-3 text-2xl font-light leading-tight text-white">{area.title}</h3>
                  <p className="max-w-[42rem] text-base leading-relaxed text-white/80">{area.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 border-t border-white/20 pt-8">
            <Link href="/contact" className="button-primary border-white/40 text-white hover:border-white">
              Contact us
              <span className="inline-block w-2 h-2 border-r border-t border-current transform rotate-45 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
