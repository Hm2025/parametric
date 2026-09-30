import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/AnimatedSection'
import { allArticles } from '@/lib/data'

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = allArticles.find((a) => a.slug === params.slug)
  if (!article) return notFound()

  return (
    <>
      <section className="article-hero relative flex items-end bg-navy">
        <div className="mx-auto w-full max-w-content">
          <AnimatedSection>
            <p className="small-title mb-4 text-gold">{article.category}</p>
            <h1 className="h1-display max-w-[12em] text-sand">{article.title}</h1>
            <div className="article-hero-meta mt-6 flex flex-wrap items-center gap-4 text-sand/80">
              <span>{article.date}</span>
              <span>•</span>
              <span>By {article.author}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white text-navy">
        <div className="mx-auto max-w-content">
          <div className="grid items-start gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <AnimatedSection className="article-feature relative aspect-[1104/627] overflow-hidden border border-navy/15 bg-navy/5">
              <Image
                src={article.slug === 'we-have-news' ? '/Overlay+Border+Blur.png' : article.image}
                alt={article.title}
                fill
                sizes="(min-width: 1552px) 1104px, (min-width: 1024px) calc(100vw - 28rem), 100vw"
                className="object-cover"
                priority
              />
              <span className="article-feature-overlay" aria-hidden="true" />
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="article-insight lg:sticky lg:top-8">
              <aside className="border border-navy/15 bg-sand p-6">
                <p className="small-title mb-4 text-navy/60">More insight</p>
                <div>
                  {allArticles
                    .filter((item) => item.slug !== article.slug)
                    .slice(0, 3)
                    .map((item) => (
                      <Link key={item.slug} href={`/news/${item.slug}`} className="group block border-t border-navy/15 py-4 first:border-t-0 first:pt-0 last:pb-0">
                        <p className="small-title text-navy/60">{item.date}</p>
                        <h3 className="mt-2 text-lg leading-snug text-navy transition-colors group-hover:text-gold sm:text-xl">{item.title}</h3>
                      </Link>
                    ))}
                </div>
              </aside>
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <article className="article-copy">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </article>

                <div className="mt-10 flex flex-col gap-6 border-t border-navy/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <Link href="/news" className="small-title inline-flex items-center gap-2 text-navy transition-colors hover:text-gold">
                    <span className="inline-block h-2 w-2 rotate-45 border-b border-l border-current" />
                    Back to news
                  </Link>

                  <div className="flex items-center gap-4">
                    <span className="small-title text-navy/60">Share:</span>
                    <button type="button" className="small-title text-navy transition-colors hover:text-gold">LinkedIn</button>
                    <button type="button" className="small-title text-navy transition-colors hover:text-gold">Email</button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
