import './SchoolMarquee.css'
import imgUrl from '../imgUrl'

const schools = [
  { name: 'Central',         file: 'central.png' },
  { name: 'Elmwood',         file: 'elmwood.png' },
  { name: 'Fry',             file: 'fry.png' },
  { name: 'Gregory',         file: 'gregory.png' },
  { name: 'Hindsdale',       file: 'hindsdale.png' },
  { name: 'Jane',            file: 'jane.png' },
  { name: 'Jefferson',       file: 'jefferson.png' },
  { name: 'Kennedy',         file: 'kennedy.png' },
  { name: 'Kindi',           file: 'kindi.png' },
  { name: 'Lincoln',         file: 'lincoln.png' },
  { name: 'Madison',         file: 'madison.png' },
  { name: 'Meadow Glens',    file: 'meadow-glens.png' },
  { name: 'Metea',           file: 'metea.png' },
  { name: 'Mill Street',     file: 'mill-street.png' },
  { name: 'Neuqua',          file: 'neuqua.png' },
  { name: 'NNHS',            file: 'nnhs.png' },
  { name: 'Plainfield North',file: 'plainfield-north.png' },
  { name: 'Pope',            file: 'pope.png' },
  { name: 'Ranch View',      file: 'ranch view.png' },
  { name: 'Scott',           file: 'scott.png' },
  { name: 'Scullen',         file: 'scullen.png' },
  { name: 'Steeple Run',     file: 'steeple-run.png' },
  { name: 'Washington',      file: 'washington.png' },
  { name: 'Welch',           file: 'welch.png' },
  { name: 'White Eagle',     file: 'whiteeagle.png' },
]

interface MarqueeRowProps {
  delay: number
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ delay }) => (
  <div className="marquee__viewport">
    {/* Two identical copies side-by-side so the loop is seamless */}
    <div
      className="marquee__track"
      style={{ animationDelay: `${delay}s` }}
    >
      {[...schools, ...schools].map((s, i) => (
        <div className="marquee__item" key={`${s.file}-${i}`}>
          <img
            src={imgUrl(`/images/school-pics/${s.file}`)}
            alt={s.name}
            draggable={false}
           loading="lazy" decoding="async" />
        </div>
      ))}
    </div>
  </div>
)

const SchoolMarquee: React.FC = () => (
  <div className="school-marquee">
    <MarqueeRow delay={0} />
    <MarqueeRow delay={-18} />
  </div>
)

export default SchoolMarquee
