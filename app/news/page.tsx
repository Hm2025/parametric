'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import { allArticles } from '@/lib/data'

const tabs = ['All', 'Briefings'] as const
const textOnlyArticleSlugs = new Set([
  'former-uk-prosecutor-don-t-get-caught-in-an-endless-cycle-of-internal-investigations',
  'former-uk-prosecutor-does-your-organizational-culture-produce-brave-and-bold-employees',
  'former-uk-prosecutor-six-ways-to-prepare-for-the-coming-surge-in-internal-investigations',
  'the-uk-is-on-a-trajectory-is-toward-increased-corporate-criminal-liability',
  'former-uk-prosecutor-four-things-investigators-can-learn-from-wirecard',
  'former-uk-prosecutor-work-from-home-options-trigger-new-internal-compliance-concerns',
  'former-uk-prosecutor-rebuilding-trust-should-be-at-the-heart-of-sfo-reforms',
  'former-uk-prosecutor-the-art-of-cooperating-or-not-with-the-sfo',
  'three-big-lessons-from-amec-foster-wheeler-s-uk-dpa',
  'what-charges-against-former-mcdonald-s-ceo-can-teach-us-about-investigations-of-senior-officers',
])

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('All')

  const visibleArticles = useMemo(() => {
    if (activeTab === 'All') return allArticles
    return allArticles.filter((article) => article.category === activeTab)
  }, [activeTab])

  return (
    <>
      <section className="relative -mt-[8rem] min-h-[30vh] flex items-end pb-12 px-[var(--side-padding)] bg-navy pt-[8rem]">
        <div className="max-w-content mx-auto w-full">
          <AnimatedSection>
            <h1 className="h1-display text-sand">News & Briefings</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-sand pt-16 text-navy lg:pt-24">
        <div className="mx-auto max-w-content">
          <div className="mb-10 flex flex-wrap gap-5 border-b border-navy/20 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`small-title transition-colors ${activeTab === tab ? 'text-navy' : 'text-navy/50 hover:text-navy'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article, index) => (
              <AnimatedSection key={article.slug} delay={index * 0.04}>
                <Link href={`/news/${article.slug}`} className="group flex h-full flex-col rounded-[1.25rem] border-[0.45rem] border-navy/15 bg-white p-3 transition-transform duration-300 hover:-translate-y-1 sm:p-4">
                  {!textOnlyArticleSlugs.has(article.slug) && (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[0.9rem] bg-navy/10">
                      <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col px-1 pb-2 pt-5 sm:px-2">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="small-title text-gold">{article.category}</p>
                      <p className="small-title text-navy/50">{article.date}</p>
                    </div>
                    <h3 className="h2-display mb-4 text-navy transition-colors group-hover:text-gold">{article.title}</h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-navy/70">{article.excerpt}</p>
                    <span className="small-title inline-flex items-center gap-3 text-navy transition-colors group-hover:text-gold">
                      Read more
                      <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" />
                    </span>
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
