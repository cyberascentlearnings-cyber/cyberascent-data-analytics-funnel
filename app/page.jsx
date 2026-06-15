const pdfPath = "/downloads/data-analytics-career-starter-kit.pdf";

const benefits = [
  {
    title: "Career-ready roadmap",
    text: "Move from analytics fundamentals to portfolio-ready business reporting workflows."
  },
  {
    title: "Practical project focus",
    text: "Practice cleaning, querying, visualizing, and explaining data like a real analyst."
  },
  {
    title: "Guided learning path",
    text: "Get a clear path for beginners, career switchers, and professionals upgrading their skills."
  }
];

const tools = [
  ["Excel", "Spreadsheets, pivots, cleaning, formulas, and dashboard thinking."],
  ["SQL", "Queries, joins, filters, aggregates, and business database logic."],
  ["Power BI", "Data models, visual reports, and executive dashboard storytelling."],
  ["Tableau", "Interactive visual analytics, calculated fields, and presentation-ready views."],
  ["Python Basics", "A gentle introduction to repeatable analysis with Python and pandas concepts."]
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="/" aria-label="CyberAscent Data Analytics home">
            <span className="brand-mark">CA</span>
            <span>
              CyberAscent
              <small>Data Analytics</small>
            </span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#benefits">Benefits</a>
            <a href="#tools">Tools</a>
            <a href="#lead-form">Apply</a>
            <a href="/thank-you">Thank you</a>
          </nav>
          <a className="button" href="#lead-form">Get counselling</a>
        </div>
      </header>

      <main>
        <section className="shell hero">
          <div>
            <span className="eyebrow">Premium beginner-friendly analytics training</span>
            <h1>CyberAscent Data Analytics Training Program</h1>
            <p className="hero-copy">
              Build a strong analytics foundation with Excel, SQL, Power BI, Tableau, and Python basics.
              Learn the thinking, tools, and project habits that help turn raw data into decisions.
            </p>
            <div className="hero-actions">
              <a className="button" href="#lead-form">Book free counselling</a>
              <a className="button secondary" href={pdfPath}>Download starter kit</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Program highlights">
            <div className="panel-top">
              <strong>Launch-ready analytics skills</strong>
              <p>Designed for learners who want a polished, practical path into data analytics.</p>
            </div>
            <div className="metric-grid">
              <div className="metric">
                <strong>5</strong>
                <span>Tools covered</span>
              </div>
              <div className="metric">
                <strong>1:1</strong>
                <span>Guidance ready</span>
              </div>
              <div className="metric">
                <strong>PDF</strong>
                <span>Career starter kit</span>
              </div>
              <div className="metric">
                <strong>Live</strong>
                <span>Lead capture funnel</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section alt" id="benefits">
          <div className="shell">
            <div className="section-head">
              <h2>Course benefits built around real analyst work.</h2>
              <p>
                The first version keeps the experience focused: clear positioning, practical benefits,
                downloadable PDF access, and a direct lead form for counselling requests.
              </p>
            </div>
            <div className="grid benefits">
              {benefits.map((benefit, index) => (
                <article className="card" key={benefit.title}>
                  <span className="icon">{index + 1}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="tools">
          <div className="shell">
            <div className="section-head">
              <h2>Tools covered</h2>
              <p>
                A balanced stack for entry-level analytics roles, reporting work, and business dashboard projects.
              </p>
            </div>
            <div className="grid tools">
              {tools.map(([name, text]) => (
                <article className="card" key={name}>
                  <span className="icon">{name.slice(0, 2)}</span>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="lead-form">
          <div className="shell lead-wrap">
            <div className="download-box">
              <h2>Start with the free career starter kit.</h2>
              <p>
                Download the PDF at the public path below, then submit the form to reach the thank-you page.
                Firebase environment variables can be connected later when the funnel is ready for live lead storage.
              </p>
              <a className="button secondary" href={pdfPath}>Open PDF download</a>
            </div>

            <form className="form-card" action="/thank-you">
              <h2>Request counselling</h2>
              <p className="form-note">
                Tell us where you are in your analytics journey. This first version does not store submissions yet.
              </p>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000" />
                </div>
                <div className="field">
                  <label htmlFor="tool">Primary interest</label>
                  <select id="tool" name="tool" defaultValue="">
                    <option value="" disabled>Choose a tool</option>
                    <option>Excel</option>
                    <option>SQL</option>
                    <option>Power BI</option>
                    <option>Tableau</option>
                    <option>Python Basics</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="goal">Learning goal</label>
                  <textarea id="goal" name="goal" placeholder="I want to move into a data analytics role..." />
                </div>
              </div>
              <button className="button form-submit" type="submit">Continue to thank-you page</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          CyberAscent Data Analytics Funnel. PDF path: {pdfPath}
        </div>
      </footer>
    </>
  );
}
