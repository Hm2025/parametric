export interface Service {
  slug: string
  title: string
  shortDesc: string
  icon: string
  image?: string
}

export interface Article {
  slug: string
  date: string
  title: string
  excerpt: string
  author: string
  category: 'News' | 'Insights' | 'Podcasts'
  image: string
  content: string
}

export interface TeamMember {
  slug: string
  name: string
  title: string
  image: string
  bio: string
  email?: string
  phone?: string
}

export const services: Service[] = [
  { slug: 'special-situations-advisory', title: 'Special Situations Advisory', shortDesc: 'Strategic counsel and hands-on support from experienced experts in complex legal, commercial, regulatory, and reputational crises.', icon: 'special-situations', image: '/images/Impartial-Investigation-1.webp' },
  { slug: 'dispute-resolution', title: 'Dispute Resolution', shortDesc: 'Commercial litigation, arbitration, and mediation across multiple jurisdictions.', icon: 'dispute', image: '/images/careers-feature.png' },
  { slug: 'regulatory-and-compliance', title: 'Regulatory and Compliance', shortDesc: 'Deep expertise in regulatory compliance for both contentious and non-contentious situations in today’s complex global environment.', icon: 'regulatory', image: '/images/careers-hero.png' },
  { slug: 'forensic-investigations-and-intelligence', title: 'Forensic Investigations and Intelligence', shortDesc: 'A holistic approach to the management of legal, regulatory, commercial, and reputational risks.', icon: 'forensic', image: '/images/people-hero.jpg' },
  { slug: 'reputation-management-and-crisis-response', title: 'Reputation Management and Crisis Response', shortDesc: 'Multidisciplinary teams dealing with actions and events that threaten businesses, brands, and personal reputations.', icon: 'reputation', image: '/images/bg1.avif' },
  { slug: 'fintech-and-digital-assets-advisory', title: 'Fintech and Digital Assets Advisory', shortDesc: 'Advice on regulation, investigations, digital assets, and complex cryptocurrency disputes.', icon: 'fintech', image: '/images/bg1.avif' },
  { slug: 'civil-fraud', title: 'Civil Fraud', shortDesc: 'Expertise in civil fraud-related investigations, litigation, asset tracing, and recovery.', icon: 'fraud', image: '/images/bg1.avif' },
  { slug: 'private-client-advisory', title: 'Private Client Advisory', shortDesc: 'Specific expertise for high net worth individuals and owner-managed businesses in the UK and internationally.', icon: 'private', image: '/images/bg1.avif' },
]

export const articles: Article[] = [
  { slug: 'mid-year-market-outlook', date: '23.07.2026', title: 'Directors, Dissent and Duty: Lessons from Saxon', excerpt: 'Co-authored by Rob Bedford and Lisa McCreath, this article examines what recent governance litigation tells us about boardroom accountability and dissenting directors.', author: 'Rob Bedford & Lisa McCreath', category: 'Insights', image: '/images/bg1.avif', content: '<p>Recent decisions in the courts have sharpened the line between legitimate board dissent and a failure to uphold fiduciary duties. Directors who disagree with strategy, process or risk appetite must be able to articulate their views clearly while still complying with the duties they owe to the company.</p><p>In this article, we revisit the practical lessons from recent governance disputes and explain why good decision-making and clear documentation remain central to protecting both directors and the company.</p><p>For boards navigating uncertain conditions, the message is simple: robust governance is not a constraint; it is a source of resilience.</p>' },
  { slug: 'from-stablecoins-to-digital-bills-of-exchange', date: '26.11.2025', title: 'From Stablecoins to “Digital Bills of Exchange”: Why Monitoring After Sanctions Implementation Is Critically Important', excerpt: 'Co-authored by James Ramsden KC, Dr Khrystyna Khanas and Dr Tetiana Dmytrenko.', author: 'James Ramsden KC', category: 'News', image: '/images/careers-feature.png', content: '<p>Sanctions compliance has become a moving target, and the challenge is no longer limited to initial screening. Firms that implement a sanctions process must also monitor post-implementation activity, particularly where value moves through new channels, including tokenised instruments and digital forms of trade finance.</p><p>This article explores the operational and legal risks of failing to sustain monitoring after implementation and sets out practical steps for firms seeking to manage exposure.</p>' },
  { slug: 'carry-on-litigating-mazur', date: '05.11.2025', title: 'Carry on Litigating? Mazur and the Limits of Supervision', excerpt: 'Few judgments have caused so much debate in recent years as that of Mr Justice Sheldon in Mazur & Anor v Charles Russell Speechlys.', author: 'Astraea Team', category: 'Insights', image: '/images/careers-hero.png', content: '<p>The decision in Mazur has prompted a fresh conversation about supervision, legal ethics and the limits of partner oversight. It also raises important questions about how firms should structure responsibility in multi-layered professional relationships.</p><p>Our team examines the practical implications for legal professionals, highlighting why clear boundaries, effective governance and thorough supervision remain critical in complex litigation.</p>' },
  { slug: 'non-financial-misconduct-the-culture-reckoning-deepens', date: '04.11.2025', title: 'Non-Financial Misconduct: The Culture Reckoning Deepens', excerpt: 'The FCA’s recently published survey highlights continued concern about how firms detect and handle non-financial misconduct.', author: 'Astraea Team', category: 'News', image: '/images/bg1.avif', content: '<p>Non-financial misconduct is increasingly treated as a material business risk rather than a peripheral cultural issue. Firms need clear processes, consistent reporting channels and credible enforcement if they are to manage the risk in a sustainable way.</p><p>In this article, we assess how regulatory expectations are shifting and what governance structures are becoming the norm among best-practice firms.</p>' },
  { slug: 'inside-access-how-organised-crime-exploits-uks-financial-services-sector', date: '10.09.2025', title: 'Inside Access: How Organised Crime Exploits the UK’s Financial Services Sector', excerpt: 'Insider threats in financial services are now a strategic risk rather than a niche operational concern.', author: 'Astraea Team', category: 'Insights', image: '/images/careers-feature.png', content: '<p>Organised crime networks increasingly target access points within the financial services sector, exploiting both technology and human vulnerabilities. The risks take many forms: data breaches, collusion, credential abuse and misdirection.</p><p>Our analysis examines where firms are most exposed and what controls are required to protect both compliance frameworks and operational resilience.</p>' },
  { slug: 'john-lough-joins-astraeas-special-situations-advisory-panel', date: '10.09.2025', title: 'John Lough joins Astraea’s Special Situations Advisory Panel', excerpt: 'We are pleased to welcome John Lough to our Special Situations Advisory Panel.', author: 'Astraea Team', category: 'News', image: '/images/careers-hero.png', content: '<p>We are delighted to welcome John Lough to the Special Situations Advisory Panel. His experience in complex corporate situations and stakeholder management adds a valuable dimension to the panel&apos;s capabilities.</p><p>Astraea remains committed to advising clients in high-pressure and high-stakes situations across regulatory, transactional and strategic matters.</p>' },
]

export const team: TeamMember[] = [
  { slug: 'sarah-chen', name: 'Sarah Chen', title: 'Managing Partner', image: '/placeholder-team-1.jpg', bio: 'Sarah advises on complex cross-border transactions and leads the firm&apos;s strategic growth initiatives.', email: 's.chen@parametric-legal.com' },
  { slug: 'james-whitfield', name: 'James Whitfield', title: 'Senior Partner, Finance', image: '/placeholder-team-2.jpg', bio: 'James specialises in structured finance, leveraged acquisition facilities, and debt capital markets.', email: 'j.whitfield@parametric-legal.com' },
  { slug: 'elena-rossi', name: 'Elena Rossi', title: 'Partner, Private Client', image: '/placeholder-team-3.jpg', bio: 'Elena leads the private client practice, advising UHNW families on succession, trusts, and tax.', email: 'e.rossi@parametric-legal.com' },
  { slug: 'michael-adeyemi', name: 'Michael Adeyemi', title: 'Partner, Dispute Resolution', image: '/placeholder-team-4.jpg', bio: 'Michael has represented clients in ICC, LCIA, and UNCITRAL arbitrations across three continents.', email: 'm.adeyemi@parametric-legal.com' },
]

export const legalPages = [
  { slug: 'legal-notice', title: 'Legal Notice' },
  { slug: 'privacy-policy', title: 'Privacy Policy' },
  { slug: 'complaints', title: 'Complaints Procedure' },
]
