import { useState } from 'react'
import './Camps.css'

type Year = '2025' | '2026'

const Camps: React.FC = () => {
  const [activeYear, setActiveYear] = useState<Year>('2026')

  return (
    <div className="camps-page">
      {/* ===== Header ===== */}
      <section className="camps-header">
        <div className="container camps-header__inner">
          <span className="tag">Programs</span>
          <h1>Our Camps</h1>
          <p>Explore highlights from each year of EcoNomix camps.</p>

          {/* Year toggle */}
          <div className="year-toggle">
            {(['2025', '2026'] as Year[]).map(y => (
              <button
                key={y}
                className={`year-toggle__btn${activeYear === y ? ' active' : ''}`}
                onClick={() => setActiveYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Content ===== */}
      <div className="camps-content container">
        {activeYear === '2025' ? <Camp2025 /> : <Camp2026 />}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   2025 Content — 6 sessions
───────────────────────────────────────── */
const sessions2025 = [
  {
    number: '01',
    title: '[Session Title]',
    date: '[Date, 2025]',
    desc: '[Describe what happened in this session — topics covered, activities, guest speakers, key takeaways. Edit this placeholder text.]',
    images: ['session-1a.jpg', 'session-1b.jpg'],
  },
  {
    number: '02',
    title: '[Session Title]',
    date: '[Date, 2025]',
    desc: '[Describe what happened in this session — topics covered, activities, guest speakers, key takeaways. Edit this placeholder text.]',
    images: ['session-2a.jpg', 'session-2b.jpg'],
  },
  {
    number: '03',
    title: '[Session Title]',
    date: '[Date, 2025]',
    desc: '[Describe what happened in this session — topics covered, activities, guest speakers, key takeaways. Edit this placeholder text.]',
    images: ['session-3a.jpg', 'session-3b.jpg'],
  },
  {
    number: '04',
    title: '[Session Title]',
    date: '[Date, 2025]',
    desc: '[Describe what happened in this session — topics covered, activities, guest speakers, key takeaways. Edit this placeholder text.]',
    images: ['session-4a.jpg', 'session-4b.jpg'],
  },
  {
    number: '05',
    title: '[Session Title]',
    date: '[Date, 2025]',
    desc: '[Describe what happened in this session — topics covered, activities, guest speakers, key takeaways. Edit this placeholder text.]',
    images: ['session-5a.jpg', 'session-5b.jpg'],
  },
  {
    number: '06',
    title: '[Session Title]',
    date: '[Date, 2025]',
    desc: '[Describe what happened in this session — topics covered, activities, guest speakers, key takeaways. Edit this placeholder text.]',
    images: ['session-6a.jpg', 'session-6b.jpg'],
  },
]

const Camp2025: React.FC = () => (
  <div className="camp-year">
    {sessions2025.map((s, i) => (
      <div className={`session-block${i % 2 === 1 ? ' session-block--flipped' : ''}`} key={s.number}>
        {/* Text side */}
        <div className="session-block__text">
          <div className="session-block__number">{s.number}</div>
          <h2 className="session-block__title">{s.title}</h2>
          <span className="session-block__date">{s.date}</span>
          <p className="session-block__desc">{s.desc}</p>
        </div>

        {/* Images side */}
        <div className="session-block__images">
          <div className="session-img session-img--main img-placeholder">
            <PlaceholderIcon />
            <span>{s.images[0]}</span>
          </div>
          <div className="session-img session-img--secondary img-placeholder">
            <PlaceholderIcon />
            <span>{s.images[1]}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
)

/* ─────────────────────────────────────────
   2026 Content
───────────────────────────────────────── */
const Camp2026: React.FC = () => (
  <div className="camp-year">
    {/* Hero highlight */}
    <div className="camp-year__hero">
      <div className="camp-year__hero-text">
        <span className="tag">Summer 2026</span>
        <h2>This Year's Cohort</h2>
        <p>
          EcoNomix 2026 is our most ambitious camp yet. With an expanded curriculum,
          new mentor partnerships, and participants from [X] schools, this cohort is
          tackling some of the most pressing environmental challenges in our communities.
        </p>
        <div className="camp-year__stats">
          <div className="camp-stat">
            <span className="camp-stat__value">[#]</span>
            <span className="camp-stat__label">Students</span>
          </div>
          <div className="camp-stat">
            <span className="camp-stat__value">[#]</span>
            <span className="camp-stat__label">Schools</span>
          </div>
          <div className="camp-stat">
            <span className="camp-stat__value">[#]</span>
            <span className="camp-stat__label">Weeks</span>
          </div>
          <div className="camp-stat">
            <span className="camp-stat__value">[$]</span>
            <span className="camp-stat__label">In Prizes</span>
          </div>
        </div>
      </div>
      <div className="camp-year__hero-img img-placeholder">
        <PlaceholderIcon />
        <span>2026-camp-hero.jpg</span>
        <em>Recommended: 800 × 500</em>
      </div>
    </div>

    {/* Schedule */}
    <div className="camp-year__section">
      <h3 className="camp-year__section-title">Program Schedule</h3>
      <div className="schedule-list">
        {[
          { week: 'Week 1–2',  title: 'Foundations',         desc: 'Design thinking, problem scoping, and team formation. Students identify the environmental challenge they will tackle.' },
          { week: 'Week 3–4',  title: 'Research & Ideation', desc: 'Deep-dive research sessions, field interviews, and structured brainstorming to develop viable solution concepts.' },
          { week: 'Week 5–6',  title: 'Build & Prototype',   desc: 'Hands-on prototyping with guidance from mentors. Teams iterate rapidly based on peer and mentor feedback.' },
          { week: 'Week 7',    title: 'Pitch Prep',          desc: 'Storytelling workshops, pitch coaching, and mock presentations to sharpen messaging and delivery.' },
          { week: 'Week 8',    title: 'Demo Day',            desc: 'Public showcase and pitch competition. Winners receive funding and resources to continue developing their project.' },
        ].map(s => (
          <div className="schedule-item" key={s.week}>
            <div className="schedule-item__week">{s.week}</div>
            <div className="schedule-item__content">
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Projects spotlight */}
    <div className="camp-year__section">
      <h3 className="camp-year__section-title">Projects in Progress</h3>
      <div className="projects-grid">
        {[
          { title: '[Project Name]', team: '[Team / School]', desc: 'A brief description of the project idea, the environmental problem it addresses, and the approach the team is taking to solve it.' },
          { title: '[Project Name]', team: '[Team / School]', desc: 'A brief description of the project idea, the environmental problem it addresses, and the approach the team is taking to solve it.' },
          { title: '[Project Name]', team: '[Team / School]', desc: 'A brief description of the project idea, the environmental problem it addresses, and the approach the team is taking to solve it.' },
        ].map((p, i) => (
          <div className="project-card card" key={i}>
            <div className="project-card__body">
              <h4 className="project-card__title">{p.title}</h4>
              <span className="project-card__team">{p.team}</span>
              <p className="project-card__desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const PlaceholderIcon: React.FC = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

export default Camps
