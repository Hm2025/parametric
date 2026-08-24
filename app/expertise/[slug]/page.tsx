import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import { services, articles, team } from '@/lib/data'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default function ExpertisePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return notFound()

  const relatedTeam = team.slice(0, 2)
  const relatedNews = articles.slice(0, 2)

  return (
    <>
      <section className="relative min-h-[40vh] flex items-end pb-12 px-[var(--side-padding)] bg-navy">
        <div className="max-w-content mx-auto w-full">
          <AnimatedSection>
            <h1 className="h1-display text-sand">{service.title}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-sand text-navy">
        <div className="max-w-content mx-auto grid lg:grid-cols-[1fr_1fr] gap-12">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none font-light">
              <p className="h2-display !text-2xl lg:!text-3xl mb-8">{service.shortDesc}</p>
              <p>Our {service.title.toLowerCase()} practice advises on the full spectrum of matters, from routine advisory work to the most complex, high-value transactions and disputes. We take a commercial, results-oriented approach that prioritises your strategic objectives.</p>
              <h3 className="text-xl font-medium mt-8 mb-4">Key areas</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Strategic advisory and structuring</li>
                <li>Regulatory compliance and risk management</li>
                <li>Cross-border coordination</li>
                <li>Dispute avoidance and resolution</li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="lg:pt-8">
            <div className="h-80 bg-navy/10 relative">
              <Image src="/placeholder-service.jpg" alt={service.title} fill className="object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-extra-light-gray text-navy">
        <div className="max-w-content mx-auto">
          <AnimatedSection>
            <h2 className="small-title text-navy/70 mb-12 pb-4 border-b border-navy/20">Related People</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {relatedTeam.map((member, i) => (
              <AnimatedSection key={member.slug} delay={i * 0.1}>
                <Link href={`/people#${member.slug}`} className="group flex gap-6 items-start">
                  <div className="w-24 h-32 bg-sand/50 relative flex-shrink-0 overflow-hidden">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg text-navy group-hover:text-gold transition-colors mb-1">{member.name}</h3>
                    <p className="text-sm opacity-70">{member.title}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <h2 className="small-title text-navy/70 mb-12 pb-4 border-b border-navy/20">Related Insights</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {relatedNews.map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 0.1}>
                <Link href={`/news/${article.slug}`} className="group block">
                  <p className="small-title text-navy/60 mb-2">{article.date}</p>
                  <h3 className="text-xl text-navy group-hover:text-gold transition-colors mb-2">{article.title}</h3>
                  <p className="text-sm opacity-70">{article.excerpt}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="flex justify-end">
            <Link href="/contact" className="button-primary border-navy/50 text-navy hover:border-navy">
              Contact us
              <span className="inline-block w-2 h-2 border-r border-t border-current transform rotate-45 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
