import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/AnimatedSection'
import { legalPages } from '@/lib/data'

export function generateStaticParams() {
  return legalPages.map((p) => ({ page: p.slug }))
}

const legalContent: Record<string, string> = {
  'legal-notice': '<p>This website is operated by Parametric Legal LLP. The content is for general information only and does not constitute legal advice.</p><p class="mt-4">All intellectual property rights in this site and its content belong to Parametric Legal LLP or its licensors.</p>',
  'privacy-policy': '<p>We process personal data in accordance with the UK GDPR and Data Protection Act 2018.</p><p class="mt-4">We collect only the information necessary to provide our services and maintain client relationships. We do not sell personal data to third parties.</p><p class="mt-4">You have the right to access, rectify, and erase your personal data. Contact our Data Protection Officer for requests.</p>',
  'complaints': '<p>We are committed to providing high-quality legal services. If you are dissatisfied, please contact the partner responsible for your matter in the first instance.</p><p class="mt-4">If the issue remains unresolved, you may escalate to our Complaints Partner at complaints@parametric-legal.com.</p><p class="mt-4">Should you remain dissatisfied, you have the right to refer your complaint to the Legal Ombudsman.</p>',
}

export default function LegalPage({ params }: { params: { page: string } }) {
  const page = legalPages.find((p) => p.slug === params.page)
  if (!page) return notFound()

  return (
    <>
      <section className="relative min-h-[30vh] flex items-end pb-12 px-[var(--side-padding)] bg-navy">
        <div className="max-w-content mx-auto w-full">
          <AnimatedSection>
            <h1 className="h1-display text-sand">{page.title}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-sand text-navy">
        <div className="max-w-content mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none font-light" dangerouslySetInnerHTML={{ __html: legalContent[params.page] || '' }} />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
