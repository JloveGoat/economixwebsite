import { useState, useEffect, useRef } from 'react'
import './Camps.css'
import imgUrl from '../imgUrl'

type Year = '2025' | '2026'

const Camps: React.FC = () => {
  const [activeYear, setActiveYear] = useState<Year>('2025')

  return (
    <div className="camps-page">
      {/* ===== Header ===== */}
      <section className="camps-header">
        <div className="container camps-header__inner">
          <span className="tag">Programs</span>
          <h1>Our Camps</h1>
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

/* ── per-session component so we can use hooks ── */
const SessionEntry: React.FC<{ s: Session; i: number }> = ({ s, i }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const isReal = s.images[0].startsWith('/')
  const count  = s.images.length
  const flipped = i % 2 === 1

  // text is on the left for normal, right for flipped — and vice-versa for images
  const textSide  = flipped ? 'from-right' : 'from-left'
  const imgSide   = flipped ? 'from-left'  : 'from-right'

  return (
    <div
      ref={wrapperRef}
      className={`session-wrapper${visible ? ' is-visible' : ''}`}
    >
          <div className={`session-block${flipped ? ' session-block--flipped' : ''}${count === 7 ? ' session-block--top-align' : ''}`}>
            {/* Text side */}
            <div className="session-block__text" data-side={textSide}>
              <div className="session-block__number">{s.number}</div>
              <h2 className="session-block__title">{s.title}</h2>
              <span className="session-block__date">{s.date}</span>
              <p className="session-block__desc">{s.desc}</p>
            </div>

            {/* Images side */}
            {isReal && count === 7 ? (
              <div className="session-block__images session-block__images--seven" data-side={imgSide}>
                {/* 6a — hero */}
                <div className="session-img seven-hero">
                  <img src={imgUrl(s.images[0])} alt={`${s.title} photo 1`} loading="lazy" decoding="async" />
                </div>
                {/* 6b–6g — 3×2 collage */}
                <div className="seven-collage">
                  {s.images.slice(1).map((src, idx) => (
                    <div key={idx} className="session-img seven-collage__cell">
                      <img src={imgUrl(src)} alt={`${s.title} photo ${idx + 2}`} loading="lazy" decoding="async" />
                    </div>
                  ))}
                </div>
              </div>
            ) : isReal && count === 6 ? (
              <div className="session-block__images session-block__images--six" data-side={imgSide}>
                <div className="session-img six-a">
                  <img src={imgUrl(s.images[0])} alt={`${s.title} photo 1`}  loading="lazy" decoding="async" />
                </div>
                <div className="session-img six-b">
                  <img src={imgUrl(s.images[1])} alt={`${s.title} photo 2`}  loading="lazy" decoding="async" />
                </div>
                <div className="session-img six-c">
                  <img src={imgUrl(s.images[2])} alt={`${s.title} photo 3`}  loading="lazy" decoding="async" />
                </div>
                <div className="session-img six-d">
                  <img src={imgUrl(s.images[3])} alt={`${s.title} photo 4`}  loading="lazy" decoding="async" />
                </div>
                <div className="session-img six-e">
                  <img src={imgUrl(s.images[4])} alt={`${s.title} photo 5`}  loading="lazy" decoding="async" />
                </div>
                <div className="session-img six-f">
                  <img src={imgUrl(s.images[5])} alt={`${s.title} photo 6`}  loading="lazy" decoding="async" />
                </div>
              </div>
            ) : isReal && count === 4 ? (
              <div className="session-block__images session-block__images--four" data-side={imgSide}>
                {s.images.map((src, idx) => (
                  <div key={idx} className="session-img four-cell">
                    <img src={imgUrl(src)} alt={`${s.title} photo ${idx + 1}`}  loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            ) : isReal && count === 5 ? (
              <div className="session-block__images session-block__images--five" data-side={imgSide}>
                {/* Row 1: 3a + 3b */}
                <div className="session-img five-r1a">
                  <img src={imgUrl(s.images[0])} alt={`${s.title} photo 1`}  loading="lazy" decoding="async" />
                </div>
                <div className="session-img five-r1b">
                  <img src={imgUrl(s.images[1])} alt={`${s.title} photo 2`}  loading="lazy" decoding="async" />
                </div>
                {/* Row 2: 3c + 3d side by side (state reps) */}
                <div className="session-img five-r2a">
                  <img src={imgUrl(s.images[2])} alt={`${s.title} photo 3`}  loading="lazy" decoding="async" />
                </div>
                <div className="session-img five-r2b">
                  <img src={imgUrl(s.images[3])} alt={`${s.title} photo 4`}  loading="lazy" decoding="async" />
                </div>
                {/* Row 3: 3e full width */}
                <div className="session-img five-r3">
                  <img src={imgUrl(s.images[4])} alt={`${s.title} photo 5`}  loading="lazy" decoding="async" />
                </div>
              </div>
            ) : isReal && count >= 3 ? (
              <div className="session-block__images session-block__images--trio" data-side={imgSide}>
                <div className="session-img session-img--trio-main">
                  <img src={imgUrl(s.images[0])} alt={`${s.title} photo 1`}  loading="lazy" decoding="async" />
                </div>
                <div className="session-img-row">
                  <div className="session-img session-img--trio-sub">
                    <img src={imgUrl(s.images[1])} alt={`${s.title} photo 2`}  loading="lazy" decoding="async" />
                  </div>
                  <div className="session-img session-img--trio-sub">
                    <img src={imgUrl(s.images[2])} alt={`${s.title} photo 3`}  loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            ) : isReal ? (
              <div className="session-block__images session-block__images--pair" data-side={imgSide}>
                <div className="session-img session-img--pair-a">
                  <img src={imgUrl(s.images[0])} alt={`${s.title} photo 1`}  loading="lazy" decoding="async" />
                </div>
                <div className="session-img session-img--pair-b">
                  <img src={imgUrl(s.images[1])} alt={`${s.title} photo 2`}  loading="lazy" decoding="async" />
                </div>
              </div>
            ) : (
              <div className="session-block__images" data-side={imgSide}>
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
                    <img src={imgUrl(src)} alt={`Pitch photo ${idx + 1}`}  loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
  )
}

const Camp2025: React.FC = () => (
  <div className="camp-year">
    {sessions2025.map((s, i) => (
      <SessionEntry key={s.number} s={s} i={i} />
    ))}
  </div>
)

/* ─────────────────────────────────────────
   2026 Content
───────────────────────────────────────── */
/* TODO: replace this URL with the real Google Form interest link */
const INTEREST_FORM_URL = 'https://forms.gle/c5mvmxXKPTtQj3dCA'

const Camp2026: React.FC = () => (
  <div className="camp-year camp-year--signup">
    <div className="signup-box">
      <span className="tag">Summer 2026</span>
      <h2 className="signup-box__heading">Sign up for the 2026 EcoNomix Program</h2>
      <p className="signup-box__sub">
        Applications are now open. Fill out the interest form to reserve your spot in
        the next cohort of EcoNomix's sustainability startup incubator.
      </p>
      <a
        href={INTEREST_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary signup-box__btn"
      >
        Sign up Now →
      </a>
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
