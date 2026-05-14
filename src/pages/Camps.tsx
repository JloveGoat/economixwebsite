import { useState } from 'react'
import './Camps.css'
import imgUrl from '../imgUrl'

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
type Session = {
  number: string
  title: string
  date: string
  desc: string
  images: string[]
  pitchImages?: string[]
}

const sessions2025: Session[] = [
  {
    number: '01',
    title: 'Introduction + Brainstorming',
    date: 'June 24th, 2025',
    desc: 'Welcoming over 65 students, we went through various brainstorming activities, like the mini-pitch challenge, where students competed for over $250 in prizes. We also welcomed Mr. Ben Mjolsness, who shared his insights on various sustainability ventures taking place in the Naperville community.',
    images: [
      '/images/session-pics/session-1a.JPG',
      '/images/session-pics/session-1b.JPG',
      '/images/session-pics/session-1c.JPG',
    ],
  },
  {
    number: '02',
    title: 'The Building Blocks of a Startup',
    date: 'July 1st, 2025',
    desc: 'We welcomed over 50 students, who learned about market segmentation and target market analysis. After a guest speech by Mr. Sumit Chugh, who talked about the importance of cost benefit analysis in startups, our 24 startups competed in a 75 second pressure pitch challenge for over $300 in prizes, where they had to pitch their chosen problem to our judges.',
    images: [
      '/images/session-pics/session-2a.JPG',
      '/images/session-pics/session-2b.JPG',
    ],
    pitchImages: [
      '/images/session-pics/session-2c.JPG',
      '/images/session-pics/session-2d.JPG',
      '/images/session-pics/session-2e.JPG',
      '/images/session-pics/session-2f.JPG',
      '/images/session-pics/session-2g.JPG',
    ],
  },
  {
    number: '03',
    title: 'Prototyping 101',
    date: 'July 8th 2025',
    desc: 'With over 65 students, we went through a crash course in accurate prototyping using various methods. After a guest speech by Il. Rep. Theresa Mah and Janet Yang Rohr, our first actiivty of the day was a blitz build challenge where each startup had to construc the tallest tower possible. To conclude the day, all the teams started their prototypes using their allocated budget, ensuring the most efficient use of materials.',
    images: [
      '/images/session-pics/session-3a.JPG',
      '/images/session-pics/session-3b.JPG',
      '/images/session-pics/session-3c.JPG',
      '/images/session-pics/session-3d.JPG',
      '/images/session-pics/session-3e.JPG',
    ],
  },
  {
    number: '04',
    title: 'Crash Course in Marketing',
    date: 'July 14th, 2025',
    desc: 'After welcoming over 45 students, we went through a quick crash course in marketing by analyzing big brands like Nike and Apple. After a guest speech from Ms. Archana Sharma, covering how she used marketing to power her own business, all the startups took part in a flyer showdown contest for a chance to win over $150 in prizes! We ended the session with some team work time on their pitches',
    images: [
      '/images/session-pics/session-4a.JPG',
      '/images/session-pics/session-4b.JPG',
      '/images/session-pics/session-4c.JPG',
      '/images/session-pics/session-4d.JPG',
    ],
  },
  {
    number: '05',
    title: 'The Key to a Successful Pitch',
    date: 'July 22nd, 2025',
    desc: 'With over 50 students, we went through a comprehensive guide to public speaking, with everyone taking part in really fun public speaking drills. After analyzing 2 successful pitches, we went through a round of "Pitch or Ditch!" where each startup had to convince the others that they needed some randomly assigned product for over $200 in prizes! We ended off with some more work time.',
    images: [
      '/images/session-pics/session-5a.JPG',
      '/images/session-pics/session-5b.JPG',
      '/images/session-pics/session-5c.JPG',
      '/images/session-pics/session-5d.JPG',
      '/images/session-pics/session-5e.JPG',
      '/images/session-pics/session-5f.JPG',
    ],
  },
  {
    number: '06',
    title: 'Pitch Practice Day',
    date: 'July 29th, 2025',
    desc: 'All our 20+ incubated startup teams went through a full day of pitch practice, with everyone revising their pitch and trifold, gearing up for a chance to win out of the $600 cash prize pool at the EcoPreneurship Business Fair! All the teams got specialized help from our mentors, ensuring that they were all ready to pitch at the fair.',
    images: [
      '/images/session-pics/session-6a.JPG',
      '/images/session-pics/session-6b.JPG',
      '/images/session-pics/session-6c.JPG',
      '/images/session-pics/session-6d.JPG',
      '/images/session-pics/session-6e.JPG',
      '/images/session-pics/session-6f.JPG',
      '/images/session-pics/session-6g.JPG',
    ],
  },
]

const Camp2025: React.FC = () => (
  <div className="camp-year">
    {sessions2025.map((s, i) => {
      const isReal = s.images[0].startsWith('/')
      const count = s.images.length

      return (
        <div className="session-wrapper" key={s.number}>
          <div className={`session-block${i % 2 === 1 ? ' session-block--flipped' : ''}${count === 7 ? ' session-block--top-align' : ''}`}>
            {/* Text side */}
            <div className="session-block__text">
              <div className="session-block__number">{s.number}</div>
              <h2 className="session-block__title">{s.title}</h2>
              <span className="session-block__date">{s.date}</span>
              <p className="session-block__desc">{s.desc}</p>
            </div>

            {/* Images side */}
            {isReal && count === 7 ? (
              <div className="session-block__images session-block__images--seven">
                {/* 6a — hero */}
                <div className="session-img seven-hero">
                  <img src={imgUrl(s.images[0])} alt={`${s.title} photo 1`} />
                </div>
                {/* 6b–6g — 3×2 collage */}
                <div className="seven-collage">
                  {s.images.slice(1).map((src, idx) => (
                    <div key={idx} className="session-img seven-collage__cell">
                      <img src={imgUrl(src)} alt={`${s.title} photo ${idx + 2}`} />
                    </div>
                  ))}
                </div>
              </div>
            ) : isReal && count === 6 ? (
              <div className="session-block__images session-block__images--six">
                <div className="session-img six-a">
                  <img src={imgUrl(s.images[0])} alt={`${s.title} photo 1`} />
                </div>
                <div className="session-img six-b">
                  <img src={imgUrl(s.images[1])} alt={`${s.title} photo 2`} />
                </div>
                <div className="session-img six-c">
                  <img src={imgUrl(s.images[2])} alt={`${s.title} photo 3`} />
                </div>
                <div className="session-img six-d">
                  <img src={imgUrl(s.images[3])} alt={`${s.title} photo 4`} />
                </div>
                <div className="session-img six-e">
                  <img src={imgUrl(s.images[4])} alt={`${s.title} photo 5`} />
                </div>
                <div className="session-img six-f">
                  <img src={imgUrl(s.images[5])} alt={`${s.title} photo 6`} />
                </div>
              </div>
            ) : isReal && count === 4 ? (
              <div className="session-block__images session-block__images--four">
                {s.images.map((src, idx) => (
                  <div key={idx} className="session-img four-cell">
                    <img src={imgUrl(src)} alt={`${s.title} photo ${idx + 1}`} />
                  </div>
                ))}
              </div>
            ) : isReal && count === 5 ? (
              <div className="session-block__images session-block__images--five">
                {/* Row 1: 3a + 3b */}
                <div className="session-img five-r1a">
                  <img src={imgUrl(s.images[0])} alt={`${s.title} photo 1`} />
                </div>
                <div className="session-img five-r1b">
                  <img src={imgUrl(s.images[1])} alt={`${s.title} photo 2`} />
                </div>
                {/* Row 2: 3c + 3d side by side (state reps) */}
                <div className="session-img five-r2a">
                  <img src={imgUrl(s.images[2])} alt={`${s.title} photo 3`} />
                </div>
                <div className="session-img five-r2b">
                  <img src={imgUrl(s.images[3])} alt={`${s.title} photo 4`} />
                </div>
                {/* Row 3: 3e full width */}
                <div className="session-img five-r3">
                  <img src={imgUrl(s.images[4])} alt={`${s.title} photo 5`} />
                </div>
              </div>
            ) : isReal && count >= 3 ? (
              <div className="session-block__images session-block__images--trio">
                <div className="session-img session-img--trio-main">
                  <img src={imgUrl(s.images[0])} alt={`${s.title} photo 1`} />
                </div>
                <div className="session-img-row">
                  <div className="session-img session-img--trio-sub">
                    <img src={imgUrl(s.images[1])} alt={`${s.title} photo 2`} />
                  </div>
                  <div className="session-img session-img--trio-sub">
                    <img src={imgUrl(s.images[2])} alt={`${s.title} photo 3`} />
                  </div>
                </div>
              </div>
            ) : isReal ? (
              <div className="session-block__images session-block__images--pair">
                <div className="session-img session-img--pair-a">
                  <img src={imgUrl(s.images[0])} alt={`${s.title} photo 1`} />
                </div>
                <div className="session-img session-img--pair-b">
                  <img src={imgUrl(s.images[1])} alt={`${s.title} photo 2`} />
                </div>
              </div>
            ) : (
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
            )}
          </div>

          {/* Pitch collage — shown when pitchImages are provided */}
          {s.pitchImages && s.pitchImages.length > 0 && (
            <div className="pitch-collage">
              <p className="pitch-collage__label">Students pitching their startups</p>
              <div className="pitch-collage__grid">
                {s.pitchImages.map((src, idx) => (
                  <div
                    key={idx}
                    className={`pitch-collage__item pitch-collage__item--${idx}`}
                  >
                    <img src={imgUrl(src)} alt={`Pitch photo ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    })}
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
