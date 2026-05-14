import './EcoFair.css'

const PlaceholderImg: React.FC<{ label?: string }> = ({ label }) => (
  <div className="ef-placeholder-img">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
    {label && <span>{label}</span>}
  </div>
)

/* ── Podium card ── */
const PodiumCard: React.FC<{
  place: 1 | 2 | 3
  startup: string
  desc: string
  imageSrc?: string
}> = ({ place, startup, desc, imageSrc }) => {
  const medal = place === 1 ? '🥇' : place === 2 ? '🥈' : '🥉'
  const label = place === 1 ? '1st Place' : place === 2 ? '2nd Place' : '3rd Place'
  return (
    <div className={`podium-card podium-card--${place}`}>
      <div className="podium-card__img-wrap">
        {imageSrc
          ? <img src={imageSrc} alt={`${label} — ${startup}`} className="podium-card__photo" />
          : <PlaceholderImg label="team-photo.jpg" />
        }
        <span className="podium-card__medal">{medal}</span>
      </div>
      <div className="podium-card__body">
        <span className="podium-card__place">{label}</span>
        <h3 className="podium-card__startup">{startup}</h3>
        <p className="podium-card__desc">{desc}</p>
      </div>
    </div>
  )
}

const EcoFair: React.FC = () => {
  return (
    <div className="ecofair-page">

      {/* ── Header ── */}
      <section className="ecofair-header">
        <div className="ecofair-header__bg" aria-hidden="true" />
        <div className="ecofair-header__inner">
          <h1>EcoPreneurship Business Fair 2025</h1>
          <p>
            Our inaugural business fair brought together all incubated startups to pitch
            their ideas to a panel of judges, compete for prizes, and showcase their
            prototypes to over a hundred community members.
          </p>
        </div>
      </section>

      <div className="container ecofair-content">

        {/* ── Group photo ── */}
        <div className="ecofair-hero-img">
          <img
            src="/images/session-pics/final-group-pic.JPG"
            alt="EcoPreneurship Business Fair 2025 — group photo"
          />
        </div>

        {/* ── Highlights ── */}
        <section className="ef-highlights">
          {[
            { value: '23',   label: 'Incubated Teams' },
            { value: '50+',  label: 'Students' },
            { value: '$600', label: 'In Prizes' },
            { value: '115+', label: 'Fair Attendees' },
          ].map(s => (
            <div className="ef-stat" key={s.label}>
              <span className="ef-stat__value">{s.value}</span>
              <span className="ef-stat__label">{s.label}</span>
            </div>
          ))}
        </section>

        {/* ── Podium finishers ── */}
        <section className="ef-section">
          <h2 className="ef-section__title">Podium Finishers</h2>

          {/* Visual podium order: 2nd · 1st · 3rd */}
          <div className="podium-row">
            <PodiumCard
              place={2}
              startup="[Startup Name]"
              desc="[Brief description of this team's project and what made it stand out at the fair.]"
              imageSrc="/images/session-pics/second-place.JPG"
            />
            <PodiumCard
              place={1}
              startup="[Startup Name]"
              desc="[Brief description of this team's project and what made it stand out at the fair.]"
              imageSrc="/images/session-pics/first-place.JPG"
            />
            <PodiumCard
              place={3}
              startup="[Startup Name]"
              desc="[Brief description of this team's project and what made it stand out at the fair.]"
              imageSrc="/images/session-pics/third-place.JPG"
            />
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="ef-section ef-section--gallery">
          <h2 className="ef-section__title">Fair Gallery</h2>
          <div className="ef-gallery">
            {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
              <div key={n} className={`ef-gallery__cell ef-gallery__cell--${n}`}>
                <img
                  src={`/images/session-pics/pitchpic${n}.JPG`}
                  alt={`Fair photo ${n}`}
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default EcoFair
