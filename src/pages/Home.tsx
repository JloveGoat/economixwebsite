import { Link } from 'react-router-dom'
import './Home.css'
import FlipSlideshow from '../components/FlipSlideshow'
import SchoolMarquee from '../components/SchoolMarquee'
import imgUrl from '../imgUrl'

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="hero__bg-pattern" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              Where Social Innovation<br />Meets <span className="hero__title-accent">Environmental Sustainability</span>
            </h1>
            <div className="hero__actions">
              <Link to="/camps" className="btn btn-primary">
                Explore Our Camps
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link to="/about" className="btn btn-secondary">Meet the Team</Link>
            </div>
          </div>

          <div className="hero__visual">
            <FlipSlideshow />
          </div>
        </div>

        <div className="hero__stats">
          <div className="container">
            <div className="hero__stats-grid">
              {[
                { value: '24+', label: 'Startups Incubated' },
                { value: '$5,000', label: 'Raised' },
                { value: '450+', label: 'Students Impacted' },
                { value: '$600+', label: 'cash funding given' },
                { value: '15+', label: 'Expert Mentors' },
              ].map(s => (
                <div className="hero__stat" key={s.label}>
                  <span className="hero__stat-value">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Schools We Work With ===== */}
      <section className="section what-we-do">
        <div className="container">
          <div className="section-header centered">
            <span className="tag">Our Reach</span>
            <h2>Built for the innovators of tomorrow<br />who are motivated to make a difference</h2>
            <p>
              We are a 501(c)(3) non-profit organization that provides a platform for young innovators to make an impact on the environment by
              providing them mentorship and funding to develop sustainable solutions.
            </p>
          </div>
        </div>

        <div className="schools-marquee-wrap">
          <SchoolMarquee />
        </div>
      </section>

      {/* ===== Sponsors ===== */}
      <section className="section-sm sponsors">
        <div className="container">
          <div className="section-header centered">
            <span className="tag">Backed By</span>
            <h2>Our Sponsors</h2>
          </div>

          {/* Tier 1 — primary sponsors, displayed larger */}
          <div className="sponsors__tier sponsors__tier--primary">
            {primarySponsors.map(s => (
              <div className="sponsor-logo sponsor-logo--primary" key={s.file}>
                <img src={imgUrl(`/images/sponsor-pics/${s.file}`)} alt={s.name}  loading="lazy" decoding="async" />
              </div>
            ))}
          </div>

          {/* Tier 2 — supporting sponsors */}
          <div className="sponsors__tier sponsors__tier--secondary">
            {secondarySponsors.map(s => (
              <div className="sponsor-logo sponsor-logo--secondary" key={s.file}>
                <img src={imgUrl(`/images/sponsor-pics/${s.file}`)} alt={s.name}  loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const primarySponsors = [
  { name: 'Central Dental Associates', file: 'central.png' },
  { name: 'Premier Vision Associates', file: 'vision.png' },
  { name: 'Chang Dental',              file: 'chang.png' },
  { name: "Andy's Frozen Custard",     file: 'andys.png' },
  { name: "Jeni's Ice Cream",          file: 'jenis.png' },
]

const secondarySponsors = [
  { name: 'Area 51',       file: 'area-51.png' },
  { name: 'Bawarchi',      file: 'bawarchi.png' },
  { name: 'Bricks',        file: 'bricks.png' },
  { name: 'Cake',          file: 'cake.png' },
  { name: 'Cinemark',      file: 'cinemark.png' },
  { name: 'Egg Harbor',    file: 'egg-harbor.png' },
  { name: 'Guzman',        file: 'guzman.png' },
  { name: 'Lazy Dog',      file: 'lazydog.png' },
  { name: "Lil' Pops",     file: 'lil-pops.png' },
  { name: 'NRC',           file: 'nrc.png' },
  { name: 'Stemshala',     file: 'stemshala.png' },
  { name: 'Wolves',        file: 'wolves.png' },
]

export default Home
