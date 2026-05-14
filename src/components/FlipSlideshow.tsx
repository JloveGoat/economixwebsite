import { useState, useEffect, useRef } from 'react'
import './FlipSlideshow.css'
import imgUrl from '../imgUrl'

const images = [
  imgUrl('/images/group-pics/session-one-pic.JPG'),
  imgUrl('/images/group-pics/session-3-pic.JPG'),
  imgUrl('/images/group-pics/session-5-pic.JPG'),
  imgUrl('/images/group-pics/final-session-pic.JPG'),
]

const HOLD_MS = 7000  // how long each image stays visible

const FlipSlideshow: React.FC = () => {
  const [current,   setCurrent]   = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Computed — never stored in state so it can never drift
  const next = (current + 1) % images.length

  // Schedule the next flip whenever we're in a resting state
  useEffect(() => {
    if (animating) return

    timerRef.current = setTimeout(() => setAnimating(true), HOLD_MS)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, animating])

  // Called by onAnimationEnd — advance index THEN drop the class in one batch
  const handleAnimationEnd = () => {
    setCurrent(c => (c + 1) % images.length)
    setAnimating(false)
    // ↑ React 18 batches these two setState calls into a single render,
    //   so the class is removed and the new front-face image appears
    //   simultaneously with zero visible jump.
  }

  return (
    <div className="flip-slideshow">
      <div
        className={`flip-card__inner${animating ? ' animating' : ''}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {/* Front — current image */}
        <div className="flip-card__face flip-card__front">
          <img
            src={images[current]}
            alt={`EcoNomix session ${current + 1}`}
            draggable={false}
          />
        </div>

        {/* Back — next image, pre-counter-rotated so it reads correctly */}
        <div className="flip-card__face flip-card__back">
          <img
            src={images[next]}
            alt={`EcoNomix session ${next + 1}`}
            draggable={false}
          />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flip-slideshow__dots" aria-hidden="true">
        {images.map((_, i) => (
          <span
            key={i}
            className={`flip-slideshow__dot${i === current ? ' active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default FlipSlideshow
