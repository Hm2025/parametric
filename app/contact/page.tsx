import AnimatedSection from '@/components/AnimatedSection'

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-end pb-12 px-[var(--side-padding)] bg-navy">
        <div className="max-w-content mx-auto w-full">
          <AnimatedSection>
            <h1 className="h1-display text-sand">Contact</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-sand pb-0 pt-16 text-navy lg:pt-24">
        <div className="max-w-content mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="field">
                  <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-navy/30 py-3 focus:outline-none focus:border-navy placeholder:text-navy/50" />
                </div>
                <div className="field">
                  <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-navy/30 py-3 focus:outline-none focus:border-navy placeholder:text-navy/50" />
                </div>
              </div>
              <div className="field">
                <textarea placeholder="Message" rows={5} className="w-full bg-transparent border-b border-navy/30 py-3 focus:outline-none focus:border-navy placeholder:text-navy/50 resize-y" />
              </div>
              <div className="flex justify-end pt-4">
                <button type="submit" className="button-primary border-navy/50 text-navy hover:border-navy">
                  Send message
                  <span className="inline-block w-2 h-2 border-r border-t border-current transform rotate-45 ml-2" />
                </button>
              </div>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-8">
              <div>
                <h3 className="small-title text-navy/70 mb-4">London</h3>
                <p className="font-light">20-22 Wenlock Road<br />London, England, N1 7GU</p>
              </div>
              <div>
                <h3 className="small-title text-navy/70 mb-4">Email</h3>
                <p className="font-light">info@parametricglobal.co.uk</p>
              </div>
              <div>
                <h3 className="small-title text-navy/70 mb-4">Telephone</h3>
                <p className="font-light">+44 (0)208 058 3120</p>
              </div>
            </div>
          </AnimatedSection>
          </div>
          <iframe
            title="Map showing 20-22 Wenlock Road, London, N1 7GU"
            src="https://www.google.com/maps?q=20-22%20Wenlock%20Road%2C%20London%2C%20N1%207GU&output=embed"
            className="relative left-1/2 mt-12 h-80 w-screen -translate-x-1/2 border-0 bg-navy/10 lg:mt-16 lg:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
