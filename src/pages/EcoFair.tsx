import './EcoFair.css'

const EcoFair: React.FC = () => {
  return (
    <div className="ecofair-page">
      <section className="ecofair-header">
        <div className="ecofair-header__bg" aria-hidden="true" />
        <div className="container ecofair-header__inner">
          <span className="tag">Annual Event</span>
          <h1>EcoPreneurship<br />Business Fair</h1>
          <p>
            [Short description of the EcoPreneurship Business Fair — what it is,
            who it's for, and why it matters. Edit this placeholder text.]
          </p>
        </div>
      </section>

      <div className="container ecofair-content">
        <p className="ecofair-placeholder">
          Content coming soon. Add event details, schedule, gallery, and registration info here.
        </p>
      </div>
    </div>
  )
}

export default EcoFair
