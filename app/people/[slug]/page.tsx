import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { people } from '@/lib/people'

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }))
}

export default function PersonProfilePage({ params }: { params: { slug: string } }) {
  const person = people.find((candidate) => candidate.slug === params.slug)

  if (!person) return notFound()

  return (
    <main className="-mt-[8rem] min-h-screen bg-[#240237] text-navy lg:grid lg:grid-cols-2 lg:items-start">
      <section className="relative flex min-h-[58vh] items-center justify-center overflow-hidden bg-[#240237] px-8 py-16 before:absolute before:inset-0 before:opacity-40 before:[background-image:linear-gradient(30deg,transparent_24%,rgba(255,255,255,0.05)_25%,transparent_26%,transparent_74%,rgba(255,255,255,0.05)_75%,transparent_76%),linear-gradient(150deg,transparent_24%,rgba(255,255,255,0.05)_25%,transparent_26%,transparent_74%,rgba(255,255,255,0.05)_75%,transparent_76%)] before:[background-size:54px_94px] lg:sticky lg:top-0 lg:h-screen lg:min-h-0 lg:px-16 lg:pt-[8rem]">
        <div className="relative aspect-[4/5] w-full max-w-[28rem] overflow-hidden bg-white/10 shadow-2xl">
          <Image src={person.image} alt={person.name} fill priority className="object-cover" />
        </div>
      </section>

      <section className="relative bg-sand px-[var(--side-padding)] py-14 lg:min-h-screen lg:px-16 lg:py-20 lg:pt-[13rem] xl:px-24">
        <div className="mx-auto flex min-h-full max-w-2xl flex-col">
          <div className="flex items-start justify-between gap-8 border-b border-navy/20 pb-10">
            <div>
              <p className="small-title mb-5 font-bold text-navy/60">Our People</p>
              <h1 className="h1-display text-navy">{person.name}</h1>
              <p className="mt-4 text-lg font-light text-navy/75">{person.title}</p>
            </div>
            <Link href="/people" className="small-title mt-2 inline-flex shrink-0 items-center gap-3 text-navy/65 transition-colors hover:text-navy">
              Close
              <span className="relative inline-block h-3 w-3 rotate-45 border-r border-t border-current" />
            </Link>
          </div>

          <div className="grid gap-8 border-b border-navy/20 py-10 sm:grid-cols-[0.55fr_1fr] sm:gap-12">
            <p className="small-title font-bold text-navy/60">Contact</p>
            <div className="space-y-3 text-base font-light text-navy/80">
              <p><span className="mr-4 inline-block text-navy/50">T</span>+44 (0)20 8058 3120</p>
              <p><span className="mr-4 inline-block text-navy/50">E</span><a href="mailto:info@parametricglobal.co.uk" className="transition-colors hover:text-navy">info@parametricglobal.co.uk</a></p>
            </div>
          </div>

          <div className="grid gap-8 py-10 sm:grid-cols-[0.55fr_1fr] sm:gap-12">
            <p className="small-title font-bold text-navy/60">Biography</p>
            <div className="space-y-6 text-base font-light leading-relaxed text-navy/80">
              <p>{person.biography || person.description}</p>
              <p>Parametric GC brings together senior professionals who establish credible facts, reduce uncertainty, and provide clear counsel for decisions that must withstand scrutiny.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
