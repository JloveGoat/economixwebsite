import { useEffect, useRef } from 'react'
import './AboutUs.css'
import imgUrl from '../imgUrl'

/* ── Scroll-driven overlay darkening ── */
const usePhotoDim = (overlayRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const onScroll = () => {
      const el = overlayRef.current
      if (!el) return
      const vh = window.innerHeight
      // Stay fully bright until 25% scrolled; reach max dim (62%) by 110% vh
      const progress = Math.min(Math.max((window.scrollY - vh * 0.25) / (vh * 0.85), 0), 1)
      el.style.opacity = String(progress * 0.62)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [overlayRef])
}

interface TeamMember {
  name: string
  role: string
  bio: string
  img: string
  graduated?: boolean
  imgPosition?: string
}

const cofounders: TeamMember[] = [
  {
    name: 'Parik Puranam',
    role: 'Co-Founder, Co-President',
    bio: 'Parik is a junior at NNHS and lives and breathes entrepreneurship. As a finalist at the Blue Ocean Competition(largest entrepreneurship competition in the world), one of the Top 100 Emerging Innovators in the world named by the EIA, and an economics researcher at UNC Chapel Hill, he uses what he learns from his own experiences to mentor future entrepreneurs. By running EcoNomix, he hopes to give each young entrepreneur the opportunity they need to showcase their talent to the world.',
    img: '/images/headshot-pics/parik.jpeg',
  },
  {
    name: 'Kevin Chen',
    role: 'Co-President',
    bio: "Kevin is a junior at NNHS and is motivated to prepare today's youth for the future. He is the Co-Founder of Airobic Athletics, a startup that he runs, and is an international qualifier in DECA. He can't wait to work with this summer's batch of young eco-preneurs!" ,
    img: '/images/headshot-pics/kevin.png',
  },
]

const vps: TeamMember[] = [
  { name: 'Nathan Ho', role: 'Vice President', bio: "Nathan is a junior at NNHS. He's passionate about working with kids and promoting the success of others, motivating him to work with EcoNomix. He's interested in going into a career of oncology where he can carry out his passion for community service in a professional setting.", img: '/images/headshot-pics/nathan.jpeg', imgPosition: 'center 85%' },
  { name: 'Ronak Chugh', role: 'Vice President', bio: 'Ronak is a junior at NNHS and is passionate about business and economics. He is a competitor at DECA and a National Qualifier for BPA(Business Professionals of America).', img: '/images/headshot-pics/ronak.png' },
  { name: 'Luke Domark', role: 'Vice President', bio: '[Brief bio — background and what they bring to EcoNomix.]', img: '/images/headshot-pics/luke.jpeg', imgPosition: 'center 15%' },
]

const executives: TeamMember[] = [
  { name: 'Charlie Minott', role: 'Executive Team Member', bio: 'Charlie is a junior at NNHS and is driven to serve his community. With his experience as a two-time HOSA State Qualifier and a prominent figure in his community, he is commited to growing the next generation of leaders.', img: '/images/headshot-pics/charlie.png' },
  { name: 'Bilal Hussain', role: 'Executive Team Member', bio: 'Bilai is a Junior at NNHS and is looking to enter the medical and business fields. He is a former wrestler and football player and is passionate about mentoring future entrepreneurs to success.', img: '/images/headshot-pics/bilal.png' },
  { name: 'Musa Hussain', role: 'Executive Team Member', bio: 'Musa is a senior at Plainfield High School and looks forward to working with the next generation of entrepreneurs.', img: '/images/headshot-pics/musa.png' },
  { name: 'Killian Tinglof', role: 'Executive Team Member', bio: "Killian is a junior at NNHS and is passionate about helping others. He's the founder of the Story Point volunteer committee, and he looks forward to mentoring the future generation of entrepreneurs this summer!", img: '/images/headshot-pics/killian.png' },
  { name: 'Sravya Chevula', role: 'Executive Team Member', bio: 'Sravya is a sophmore at NNHS and looks forward to working with the next generation of entrepreneurs.', img: 'exec-3.jpg' }
]


/* ── Reusable team card ── */
const TeamCard: React.FC<{ member: TeamMember; variant: 'founder' | 'vp' | 'exec' | 'mentor' }> = ({ member, variant }) => {
  const imgHeight = variant === 'founder' ? '400px' : variant === 'vp' ? '300px' : variant === 'exec' ? '240px' : '160px'
  const isRealImg = member.img.startsWith('/')

  return (
    <div className={`team-card card team-card--${variant}${member.graduated ? ' team-card--graduated' : ''}`}>
      <div className="team-card__img-wrap" style={{ height: imgHeight }}>
        {isRealImg
          ? <img src={imgUrl(member.img)} alt={member.name} loading="lazy" decoding="async" className="team-card__photo" style={member.imgPosition ? { objectPosition: member.imgPosition } : undefined} />
          : (
            <div className="img-placeholder" style={{ height: '100%', borderRadius: '0' }}>
              <ImageIcon />
              <span>{member.img}</span>
            </div>
          )
        }
        {member.graduated && (
          <div className="team-card__grad-badge">Alumni</div>
        )}
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <span className="team-card__role">{member.role}</span>
        <p className="team-card__bio">{member.bio}</p>
      </div>
    </div>
  )
}

const AboutUs: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null)
  usePhotoDim(overlayRef)

  return (
    <div className="about">

      {/* ══════════════════════════════════════
          STICKY PHOTO STAGE
          The sticky bg lives here; all content
          inside scrolls over it. Team section
          below this div ends the effect.
      ══════════════════════════════════════ */}
      <div className="about-stage">

        {/* Sticky background: sticks to top, dimmed by JS */}
        <div className="about-bg">
          <img
            src={imgUrl('/images/group-pics/our-pic.JPG')}
            alt="EcoNomix team"
            loading="eager"
            decoding="async"
          />
          <div className="about-bg-overlay" ref={overlayRef} />
        </div>

        {/* ── Panel 1: full-screen photo, scroll hint only ── */}
        <div className="about-hero-panel">
          <div className="about-scroll-hint">
            <span>Scroll down</span>
            <MouseScrollIcon />
          </div>
        </div>

        {/* ── Panel 2: content scrolling over the photo ── */}
        <div className="about-over-content">

          {/* Mission & Vision */}
          <section className="about-mission">
            <div className="container about-mission__inner">
              <div className="about-mission__text">
                <span className="tag tag--light">Mission & Vision</span>
                <h2>Mentor future founders.<br />Spark innovation. <br />Pioneer a more eco-friendly future</h2>
                <p>
                  EcoNomix started out of the need to pioneer environmental sustainability, a problem that is increasingly becoming a global issue. We believe that the future of sustainability is in the hands of the next generation, and we are committed to mentoring them to success.
                </p>
                <div className="about-values">
                  {[
                    { title: 'Mentor-Driven Initiative',        desc: 'With an incredibly talented team of mentors, we ensure that each startup team is given the mentorship they need to succeed.' },
                    { title: 'Growth within an Ecosystem', desc: "Our curriculum is designed to help teams learn from one another, ensuring that everyone grows as a whole despite competing against one another." },
                    { title: 'Access to the Best',   desc: 'We bring in some of the most succesful environmental and business leaders in the community, ensuring that each team has someone to look up to.' },
                  ].map(v => (
                    <div className="about-value" key={v.title}>
                      <div className="about-value__dot" />
                      <div>
                        <h4>{v.title}</h4>
                        <p>{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ── White-bg layer: covers the sticky photo from here on ── */}
        <div className="about-white-cover">

          {/* Meet the Team */}
          <section className="section team-section">
            <div className="container">
              <div className="section-header centered">
                <span className="tag">The People</span>
                <h2>Meet the team</h2>
                <p>The founders, operators, and mentors behind EcoNomix.</p>
              </div>

              {/* Co-founders */}
              <div className="team-tier">
                <span className="team-tier__label">Co-founders</span>
                <div className="team-grid team-grid--founders">
                  {cofounders.map(m => <TeamCard key={m.name} member={m} variant="founder" />)}
                </div>
              </div>

              {/* VPs */}
              <div className="team-tier">
                <span className="team-tier__label">Vice Presidents</span>
                <div className="team-grid team-grid--vps">
                  {vps.map(m => <TeamCard key={m.img} member={m} variant="vp" />)}
                </div>
              </div>

              {/* Executive team */}
              <div className="team-tier">
                <span className="team-tier__label">Executive Team</span>
                <div className="team-grid team-grid--execs">
                  {executives.map(m => <TeamCard key={m.img} member={m} variant="exec" />)}
                </div>
              </div>

              {/* Mentors */}
              <div className="team-tier">
                <span className="team-tier__label">Mentors</span>
                <p className="mentors-tba">Mentors to be announced!</p>
              </div>

            </div>
          </section>

        </div>
        {/* ── End white cover ── */}

      </div>
      {/* ═══ End of sticky stage ═══ */}

    </div>
  )
}

/* ── Animated mouse scroll icon ── */
const MouseScrollIcon: React.FC = () => (
  <svg className="mouse-icon" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="22" height="36" rx="11" stroke="white" strokeWidth="2" />
    <circle className="mouse-wheel" cx="12" cy="10" r="3" fill="white" />
  </svg>
)

const ImageIcon: React.FC = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)


export default AboutUs
