import './AboutUs.css'

const team: TeamMember[] = [
  {
    name: 'Alex Rivera',
    role: 'Co-founder & CEO',
    bio: 'Serial entrepreneur with two successful exits. Previously at Y Combinator as a partner. Passionate about green-tech and climate solutions.',
    img: 'team-1.jpg',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder & COO',
    bio: 'Operator with 12 years scaling ventures in emerging markets. Led growth at multiple Series B companies before co-founding EcoNomix.',
    img: 'team-2.jpg',
  },
  {
    name: 'Jordan Lee',
    role: 'Head of Programs',
    bio: 'Designed curriculum for 500+ founders across three continents. Combines systems thinking with founder empathy to build transformative programs.',
    img: 'team-3.jpg',
  },
  {
    name: 'Sam Okafor',
    role: 'Head of Partnerships',
    bio: "Former VC analyst turned ecosystem builder. Manages EcoNomix's investor and corporate partner network across 40+ firms.",
    img: 'team-4.jpg',
  },
]

interface TeamMember {
  name: string
  role: string
  bio: string
  img: string
}

const AboutUs: React.FC = () => {
  return (
    <div className="about">
      {/* ===== Page Hero ===== */}
      <section className="page-hero about-hero">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <span className="tag">Our Story</span>
          <h1>We believe every great<br />company starts with <em>belief</em></h1>
          <p>
            EcoNomix was founded in 2019 with a single conviction: the founders who will shape
            tomorrow's economy deserve more than a desk and a pitch deck template.
            They deserve a living, breathing ecosystem.
          </p>
        </div>
      </section>

      {/* ===== Mission Section ===== */}
      <section className="section mission">
        <div className="container mission__inner">
          <div className="mission__text">
            <div className="section-header">
              <span className="tag">Mission & Vision</span>
              <h2>Grow founders.<br />Grow the future.</h2>
              <p>
                Our mission is to democratize access to the tools, capital, and communities
                that turn ambitious founders into successful entrepreneurs. We measure our
                success by the impact our alumni create in the world.
              </p>
            </div>
            <div className="mission__values">
              {[
                { title: 'Roots First', desc: 'We invest deeply in early-stage founders before everyone else does.' },
                { title: 'Ecosystem Thinking', desc: 'Great companies don\'t grow in isolation — they grow in community.' },
                { title: 'Radical Openness', desc: 'We share what we know, make warm intros, and celebrate founder wins loudly.' },
              ].map(v => (
                <div className="mission__value" key={v.title}>
                  <div className="mission__value-dot" />
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mission__visual">
            <div className="img-placeholder" style={{ height: '460px', borderRadius: 'var(--radius-xl)' }}>
              <ImageIcon />
              <span>about-hero.jpg</span>
              <em>Recommended: 900 × 600</em>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header centered">
            <span className="tag">The People</span>
            <h2>Meet the team</h2>
            <p>
              We're founders, operators, and investors who've been in your shoes.
              Our team is obsessed with helping great people build great companies.
            </p>
          </div>

          <div className="team-grid">
            {team.map(member => (
              <div className="team-card card" key={member.name}>
                <div className="team-card__img">
                  <div className="img-placeholder" style={{ height: '240px', borderRadius: '0' }}>
                    <ImageIcon />
                    <span>{member.img}</span>
                    <em>400 × 400</em>
                  </div>
                </div>
                <div className="team-card__body">
                  <h3 className="team-card__name">{member.name}</h3>
                  <span className="team-card__role">{member.role}</span>
                  <p className="team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Office / Culture ===== */}
      <section className="section-sm culture">
        <div className="container culture__inner">
          <div className="culture__img">
            <div className="img-placeholder" style={{ height: '380px', borderRadius: 'var(--radius-xl)' }}>
              <ImageIcon />
              <span>office.jpg</span>
              <em>Recommended: 900 × 600</em>
            </div>
          </div>
          <div className="culture__text">
            <span className="tag">Culture</span>
            <h2>A place where<br />ideas catch fire</h2>
            <p>
              Our space in the heart of the city is designed to spark collisions between founders,
              mentors, and ideas. From open workspaces to curated dinner events, every touchpoint
              is an opportunity to grow.
            </p>
            <ul className="culture__list">
              {['Weekly founder dinners', 'Monthly investor showcases', 'Co-working space access', 'Digital community platform'].map(item => (
                <li key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

const ImageIcon: React.FC = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

const CheckIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

export default AboutUs
