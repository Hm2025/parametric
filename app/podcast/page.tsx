import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const artworkUrl = '/czqu9lof34xmt6lbzu7co9m99p62.jpeg'

const episodes = [
  { number: '04', date: '12.07.2023', duration: '40:22', title: 'Remote Interview Strategies, and Cooperating With Government Investigations', description: 'Effectively undertaking investigative interviews in remote settings, strategic cooperation with government investigations, and understanding the cost of cooperating or not.', href: 'https://www.investigatorsmindset.com/2092634/episodes/13207856-remote-interview-strategies-and-cooperating-with-government-investigations', audio: 'https://www.buzzsprout.com/2092634/episodes/13207856-remote-interview-strategies-and-cooperating-with-government-investigations.mp3?client_source=buzzsprout_website' },
  { number: '03', date: '10.05.2023', duration: '42:16', title: 'Understanding the Cultural Context, and Examining Glencore', description: 'Understanding cultural context when conducting investigations, and why the Glencore investigation is a useful case study for compliance professionals.', href: 'https://www.investigatorsmindset.com/2092634/episodes/12822043-understanding-the-cultural-context-and-examining-glencore', audio: 'https://www.buzzsprout.com/2092634/episodes/12822043-understanding-the-cultural-context-and-examining-glencore.mp3?client_source=buzzsprout_website' },
  { number: '02', date: '31.03.2023', duration: '29:06', title: 'Developing Triage Processes, and The Corporate Mantras That Spell Trouble', description: 'Factors to consider in an investigation triage process, and why the Coca-Cola executive bribery case matters for corporate culture and compliance.', href: 'https://www.investigatorsmindset.com/2092634/episodes/12557045-developing-triage-processes-and-the-corporate-mantras-that-spell-trouble', audio: 'https://www.buzzsprout.com/2092634/episodes/12557045-developing-triage-processes-and-the-corporate-mantras-that-spell-trouble.mp3?client_source=buzzsprout_website' },
  { number: '01', date: '24.02.2023', duration: '37:35', title: 'Determining Investigation Scope, and Lessons To Learn From a Corporate Resolution', description: 'How to determine the scope of an investigation, with three lessons from the deferred prosecution agreement entered into by Amec Foster Wheeler and the SFO.', href: 'https://www.investigatorsmindset.com/2092634/episodes/12320970-determining-investigation-scope-and-lessons-to-learn-from-a-corporate-resolution', audio: 'https://www.buzzsprout.com/2092634/episodes/12320970-determining-investigation-scope-and-lessons-to-learn-from-a-corporate-resolution.mp3?client_source=buzzsprout_website' },
]

function Arrow() {
  return <span className="inline-block h-2 w-2 rotate-45 border-r border-t border-current" />
}

export default function PodcastPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy px-[var(--side-padding)] pb-20 pt-24 text-sand lg:pb-28 lg:pt-32">
        <div className="absolute inset-0 opacity-20"><Image src={artworkUrl} alt="" fill className="object-cover" unoptimized /></div>
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto grid max-w-content items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <AnimatedSection><p className="small-title mb-5 text-gold">Podcast</p><h1 className="h1-display max-w-[11em]">The Investigator&apos;s Mindset</h1></AnimatedSection>
          <AnimatedSection delay={0.15} className="max-w-xl"><p className="text-lg leading-relaxed text-sand/90 lg:text-xl">A podcast designed to support corporate investigators in achieving excellence in investigations, hosted by anti-corruption expert, economic crime lawyer, former prosecutor, and corporate investigator Lloydette Bai-Marrow.</p></AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-sand text-navy">
        <div className="mx-auto grid max-w-content gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <AnimatedSection><div className="relative mx-auto aspect-square max-w-sm overflow-hidden border-[0.45rem] border-navy/15 bg-white p-3 lg:sticky lg:top-32"><Image src={artworkUrl} alt="The Investigator's Mindset podcast artwork" fill className="object-cover" unoptimized /></div></AnimatedSection>
          <AnimatedSection delay={0.12}>
            <p className="small-title mb-6 text-gold">About the show</p>
            <h2 className="h2-display mb-8 max-w-2xl">Practical insight for the people who investigate, advise, and lead through uncertainty.</h2>
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-navy/80"><p>The Investigator&apos;s Mindset explores the challenges and issues shaping the fast-evolving economic crime landscape, sharing best-practice insights for corporate investigators.</p><p>Lloydette Bai-Marrow is Managing Partner at Parametric Global Consulting. Parametric helps clients navigate complex economic crime issues through independent and impartial investigations, risk reviews, tailored training, and strategic advice.</p></div>
            <div className="mt-10 flex flex-wrap gap-4"><a href="https://www.investigatorsmindset.com/2092634" target="_blank" rel="noreferrer" className="button-primary border-navy/40 text-navy hover:border-navy">Visit podcast website <Arrow /></a><a href="https://www.investigatorsmindset.com/2092634/episodes" target="_blank" rel="noreferrer" className="button-primary border-navy/40 text-navy hover:border-navy">All episodes <Arrow /></a></div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-extra-light-gray text-navy">
        <div className="mx-auto max-w-content">
          <AnimatedSection><div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-navy/20 pb-5"><div><p className="small-title mb-4 text-gold">Season one</p><h2 className="h2-display">Latest episodes</h2></div><p className="text-lg text-navy/65">Four conversations on investigations, culture, scope, and cooperation.</p></div></AnimatedSection>
          <div className="grid gap-6 lg:grid-cols-2">{episodes.map((episode, index) => <AnimatedSection key={episode.number} delay={index * 0.06}><article className="flex h-full flex-col border border-navy/15 bg-white p-6 sm:p-8"><div className="mb-8 flex items-center justify-between gap-4 border-b border-navy/15 pb-4"><p className="small-title text-gold">Episode {episode.number}</p><p className="small-title text-navy/55">{episode.date} · {episode.duration}</p></div><h3 className="h2-display mb-5">{episode.title}</h3><p className="mb-8 flex-1 text-lg leading-relaxed text-navy/75">{episode.description}</p><audio controls preload="none" className="mb-6 w-full" aria-label={`Play ${episode.title}`}><source src={episode.audio} type="audio/mpeg" />Your browser does not support audio playback.</audio><a href={episode.href} target="_blank" rel="noreferrer" className="small-title inline-flex items-center gap-3 text-navy transition-colors hover:text-gold">Episode details <Arrow /></a></article></AnimatedSection>)}</div>
        </div>
      </section>
    </>
  )
}
