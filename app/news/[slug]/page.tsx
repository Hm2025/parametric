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
      <section className="relative min-h-[32vh] flex items-end pb-12 px-[var(--side-padding)] bg-navy">
        <div className="mx-auto w-full max-w-content">
          <AnimatedSection>
            <p className="small-title mb-4 text-gold">{article.category}</p>
            <h1 className="h1-display max-w-[12em] text-sand">{article.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-sand/80">
              <span>{article.date}</span>
              <span>•</span>
              <span>By {article.author}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-sand text-navy">
        <div className="mx-auto max-w-content">
          <AnimatedSection className="mb-12 overflow-hidden border border-navy/15 bg-navy/5">
            <div className="relative h-[26rem] md:h-[32rem]">
              <Image src={article.image} alt={article.title} fill className="object-cover" />
            </div>
          </AnimatedSection>

          <div className="grid gap-12 lg:grid-cols-[1fr_18rem]">
            <AnimatedSection>
              <article className="max-w-3xl space-y-6 text-base font-light leading-relaxed text-navy/80">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </article>

              <div className="mt-12 flex flex-col gap-6 border-t border-navy/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
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

            <AnimatedSection delay={0.15}>
              <div className="rounded-none border border-navy/15 bg-white p-6">
                <p className="small-title mb-4 text-navy/60">More insight</p>
                <div className="space-y-6">
                  {allArticles
                    .filter((item) => item.slug !== article.slug)
                    .slice(0, 3)
                    .map((item) => (
                      <Link key={item.slug} href={`/news/${item.slug}`} className="group block border-t border-navy/15 pt-4 first:border-t-0 first:pt-0">
                        <p className="small-title text-navy/60">{item.date}</p>
                        <h3 className="mt-2 text-xl text-navy transition-colors group-hover:text-gold">{item.title}</h3>
                      </Link>
                    ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
