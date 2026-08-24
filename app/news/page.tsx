'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import { articles } from '@/lib/data'

const tabs = ['All', 'Insights', 'News', 'Podcasts'] as const

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('All')

  const visibleArticles = useMemo(() => {
    if (activeTab === 'All') return articles
    return articles.filter((article) => article.category === activeTab)
  }, [activeTab])

  return (
    <>
      <section className="relative min-h-[30vh] flex items-end pb-12 px-[var(--side-padding)] bg-navy">
        <div className="max-w-content mx-auto w-full">
          <AnimatedSection>
            <h1 className="h1-display text-sand">News & Insights</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-sand text-navy">
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

          <div className="space-y-2">
            {visibleArticles.map((article, index) => (
              <AnimatedSection key={article.slug} delay={index * 0.04}>
                <Link href={`/news/${article.slug}`} className="group block border-t border-navy/15 py-6 transition-colors hover:border-navy/30">
                  <div className="grid gap-6 md:grid-cols-[10rem_1fr_12rem] md:items-start">
                    <div className="small-title text-navy/60">{article.date}</div>

                    <div className="space-y-3">
                      <p className="small-title text-navy/60">{article.category}</p>
                      <h3 className="h2-display max-w-3xl text-navy transition-colors group-hover:text-gold">{article.title}</h3>
                      <p className="max-w-3xl text-base font-light leading-relaxed text-navy/80">{article.excerpt}</p>
                      <span className="small-title inline-flex items-center gap-2 text-navy transition-colors group-hover:text-gold">
                        Read article
                        <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" />
                      </span>
                    </div>

                    <div className="relative h-32 overflow-hidden border border-navy/10 bg-navy/5 md:h-28">
                      <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
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
