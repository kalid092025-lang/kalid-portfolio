import portrait from "../assets/khalid-portrait.jpeg";

export default function About() {
  return (
    <section id="about" className="about-section page-section">
      <div className="about-grid">
        <div className="portrait-wrap">
          <img src={portrait} alt="Khalid Ismail" className="portrait-image" />
        </div>

        <div className="about-copy">
          <div className="section-eyebrow">About me</div>

          <h2>Khalid Ismail</h2>

          <p>
            I am an Oslo-based fullstack developer with a background in logistics,
            interpreting, customer service, and hands-on technology. That mix has taught
            me to stay structured under pressure, communicate clearly, and solve problems
            with patience.
          </p>

          <p>
            My technical foundation covers HTML, CSS, JavaScript, React, Node.js, SQL,
            Figma, Git/GitHub, responsive design, and API integrations. I learn new tools
            quickly, enjoy turning ideas into clean interfaces, and bring the same focus
            on accuracy from logistics into every digital product I build.
          </p>

          <div className="about-highlights" aria-label="Key strengths">
            <span>Problem solving</span>
            <span>Clear communication</span>
            <span>Fast learner</span>
            <span>Team focused</span>
          </div>
        </div>
      </div>
    </section>
  );
}
