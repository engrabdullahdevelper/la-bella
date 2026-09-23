function About() {
    return(
        <section id="about" style={{background: 'var(--cream)'}}>
    <div className="about">
      <div className="about-img-wrap">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Restaurant Interior"/>
        <div className="about-badge">
          <span className="num">25+</span>
          <span className="lbl">Years of<br/>Excellence</span>
        </div>
      </div>
      <div className="about-text">
        <p className="section-tag">Our Story</p>
        <h2 className="section-title">Passion for Food,<br/><em>Love</em> for People</h2>
        <div className="section-line"></div>
        <p>La Bella Cucina was born from a simple dream — to bring the warmth of an Italian family kitchen to the heart of Pakistan. Since 1998, we have been serving authentic recipes passed down through generations.</p>
        <p>Every dish tells a story of tradition, craftsmanship, and the finest imported ingredients blended with local flavours — creating an experience unlike any other.</p>
        <div className="about-stats">
          <div className="stat-item">
            <div className="num">50+</div>
            <div className="lbl">Menu Items</div>
          </div>
          <div className="stat-item">
            <div className="num">12K+</div>
            <div className="lbl">Happy Guests</div>
          </div>
          <div className="stat-item">
            <div className="num">8</div>
            <div className="lbl">Awards Won</div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default About;