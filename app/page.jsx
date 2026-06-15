const pdfPath = "/downloads/data-analytics-career-starter-kit.pdf";

const heroCards = [
  ["Real Business Practice", "Work on data cleaning, reporting, dashboard, KPI, SQL, and business insight assignments."],
  ["Analytics Workflow", "Learn how data moves from raw files to reports, dashboards, insights, and business decisions."],
  ["Career Proof", "Turn project work into interview stories for Data Analyst, MIS, Reporting Analyst, Business Analyst, and Analytics roles."]
];

const toolCards = [
  ["Excel for Analytics", "Excel formulas, pivot tables, data cleaning, lookups, conditional formatting, charts, and business reporting foundations."],
  ["SQL for Data Analysis", "Select queries, joins, filters, grouping, aggregations, case statements, subqueries, and business data extraction practice."],
  ["Power BI and Tableau", "Dashboard design, charts, KPIs, filters, slicers, data modelling basics, storytelling, and executive reporting views."],
  ["Python Basics for Analytics", "Python fundamentals, pandas basics, data cleaning, simple analysis, CSV/Excel handling, and beginner-friendly analytics workflows."]
];

const projectCards = [
  ["Excel Business Reporting Workbook", "A cleaned and structured Excel workbook with formulas, pivots, charts, summary views, and business reporting logic."],
  ["SQL Analysis Assignment Pack", "Query-based analysis using joins, filters, aggregations, KPI calculations, and business questions."],
  ["Power BI / Tableau Dashboard", "A dashboard with KPIs, trends, filters, charts, business insights, and explanation notes."],
  ["Interview-Ready Analytics Project Portfolio", "A clear project narrative that explains the business problem, dataset, cleaning steps, analysis approach, dashboard logic, insights, and recommendations."]
];

const audienceCards = [
  ["Beginners and Career Switchers", "Build Data Analytics foundations with guided assignments instead of trying to learn from scattered videos."],
  ["Excel Users and MIS Professionals", "Upgrade from routine reporting to analytics dashboards, SQL querying, KPI explanation, and business insight communication."],
  ["Business Analysts and Working Professionals", "Add practical data analysis, reporting, dashboarding, and SQL skills to strengthen your BA or business role."],
  ["Freshers and Non-Technical Learners", "Start with Excel and business reporting basics, then move into SQL, dashboards, and analytics project practice step by step."]
];

const starterKitItems = [
  ["Excel Analytics Checklist", "Data cleaning, formulas, pivot tables, charts, summary reports, and dashboard-ready structure."],
  ["SQL Practice Roadmap", "Select, where, group by, joins, aggregations, case statements, and business query examples."],
  ["Dashboard Planning Template", "KPIs, business questions, chart selection, filters, stakeholder view, and insight notes."],
  ["Interview and Project Pack", "Project explanation framework, common interview questions, analytics storytelling prompts, and resume positioning points."]
];

const trainingCards = [
  ["Analytics Foundations and Business Understanding", "Understand business questions, data types, KPIs, reporting needs, stakeholder expectations, and analytics use cases."],
  ["Excel, SQL, and Dashboard Skills", "Practice Excel reporting, SQL querying, Power BI/Tableau dashboards, KPI views, and business insight presentation."],
  ["Python Basics and Data Workflow", "Learn beginner-friendly Python and pandas basics for cleaning, transforming, and analyzing structured data."],
  ["Portfolio and Interview Readiness", "Real assignments, review feedback, mock interview preparation, resume positioning, and career support."]
];

const pulseItems = [
  ["Data Analytics", "Data Analytics career trends", "Growing demand for professionals who can combine business understanding, SQL, dashboards, and decision-focused reporting."],
  ["BI Tools", "Power BI and Tableau dashboards", "Organizations need dashboards that are not only attractive but also clear, reliable, and business-friendly."],
  ["Excel to Analytics", "From Excel reporting to Data Analytics", "Excel users can move into analytics by adding SQL, dashboards, KPI thinking, and project storytelling."],
  ["SQL Skills", "SQL for business data analysis", "SQL remains one of the most practical skills for extracting, filtering, joining, and summarizing business data."],
  ["AI and Analytics", "AI-assisted analytics workflow", "AI can support data explanation, report summaries, dashboard narratives, and interview preparation, but analysts still need judgment."],
  ["Finance Analytics", "Financial reporting and KPI analysis", "Revenue, cost, profit, variance, and trend analysis are common project areas for analytics learners."],
  ["Retail Analytics", "Customer and sales analytics", "Retail dashboards often focus on sales trends, product categories, customer behavior, inventory, and store performance."],
  ["Healthcare Analytics", "Healthcare reporting and operational insights", "Healthcare analytics can include patient flow, service utilization, cost, quality, and operational performance."],
  ["Supply Chain Analytics", "Inventory, demand, and logistics reporting", "Supply chain analytics helps explain delays, stock movement, supplier risks, cost changes, and fulfillment performance."],
  ["Interview Prep", "Data Analyst interview readiness", "Candidates should explain tools, projects, data cleaning, SQL logic, dashboard choices, insights, and business recommendations."]
];

const companies = ["Accenture", "Deloitte", "Cognizant", "Capgemini", "TCS", "Infosys", "Wipro", "IBM", "Amazon", "Microsoft", "HCLTech", "Tech Mahindra"];

const testimonials = [
  ["Priya S.", "Career transition learner", "The training helped me move from basic Excel reporting to understanding dashboards, SQL, and business insights."],
  ["Rahul M.", "Working professional", "The guided sessions helped me understand how to explain a dashboard project in interviews instead of only showing charts."],
  ["Ananya K.", "Aspiring Data Analyst", "I finally understood how Excel, SQL, Power BI, and business questions connect in a real analytics project."]
];

const blogCards = [
  ["Data Analytics Career Roadmap", "How to Start a Data Analytics Career as a Beginner", "Learn how Excel, SQL, dashboards, Python basics, projects, and interview preparation fit into a practical Data Analytics roadmap."],
  ["Excel to Data Analyst", "How Excel Users Can Move into Data Analytics", "A practical guide for Excel and MIS professionals who want to upgrade into SQL, Power BI/Tableau, and analytics project roles."],
  ["SQL for Analytics", "Why SQL Is Still Important for Data Analyst Roles", "Understand how SQL helps analysts extract, join, filter, summarize, and explain business data."],
  ["Power BI / Tableau Projects", "What Makes a Dashboard Interview-Ready?", "Learn how to explain KPIs, chart choices, filters, insights, and business recommendations from dashboard projects."]
];

const faqs = [
  ["Is this suitable for non-technical learners?", "Yes. The training starts with Excel, business reporting, and analytics thinking before moving into SQL, dashboards, and Python basics."],
  ["Do I need coding experience?", "No. Python is introduced at a beginner-friendly level. The main focus is practical analytics, dashboards, SQL, reporting, and business insights."],
  ["Will I learn Power BI or Tableau?", "Yes. The program can include Power BI/Tableau dashboard practice depending on your chosen path and career goal."],
  ["Will I work on projects?", "Yes. You will work on practical assignments and business analytics project scenarios that can be explained in interviews."],
  ["Is this live training?", "Yes. CyberAscent provides 1:1 live instructor-led training with practical guidance and career-focused support."],
  ["Will you help with interviews?", "Yes. The program includes interview preparation, project explanation practice, resume positioning guidance, and common Data Analyst interview questions."]
];

const quickPrompts = [
  "Which Data Analytics role fits my background?",
  "Do I need coding to start Data Analytics?",
  "Should I learn Power BI or Tableau first?",
  "How much SQL do I need?",
  "What projects will I build?",
  "How does the 24-hour offer work?"
];

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}

function CardGrid({ items, className = "" }) {
  return (
    <div className={`grid card-grid ${className}`}>
      {items.map(([title, text], index) => (
        <article className="card" key={title}>
          <span className="icon">{String(index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

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
            <a href="#tools">Tools</a>
            <a href="#projects">Projects</a>
            <a href="#webinar">Webinar</a>
            <a href="#lead-form">Talk to Advisor</a>
          </nav>
          <a className="button" href="#lead-form">Talk to Advisor</a>
        </div>
      </header>

      <main>
        <section className="session-band">
          <div className="shell session-inner">
            <div>
              <span className="eyebrow">Upcoming Free Session</span>
              <h2>How Data Analytics Is Changing Career Opportunities Across Business, Reporting, and Decision-Making Roles</h2>
              <p>Bring your workbook and see how real business data is cleaned, analyzed, visualized, and explained using Excel, SQL, Power BI/Tableau, and Python basics.</p>
            </div>
            <a className="button secondary" href="#webinar">Book Your Webinar Now</a>
          </div>
        </section>

        <section className="shell hero">
          <div>
            <span className="eyebrow">Data Analytics Training Program</span>
            <p className="kicker">Data Analytics Training for Beginners, Excel Users, MIS Professionals, Business Analysts, Career Switchers, and Working Professionals</p>
            <h1>Become a Practical Data Analyst, Not Just a Dashboard Viewer</h1>
            <p className="hero-copy">
              Learn Data Analytics with Excel, SQL, Power BI/Tableau, Python basics, real-time business analytics projects, assignments,
              interview preparation, and guided 1:1 live instructor-led mentoring from CyberAscent.
            </p>
            <div className="hero-actions">
              <a className="button" href={pdfPath}>Get Free Data Analytics Starter Kit</a>
              <a className="button secondary" href="#pricing">Download Course Syllabus</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Program highlights">
            <div className="panel-top">
              <strong>Practical analytics mentoring</strong>
              <p>Business thinking, tool practice, reviewed assignments, and interview-ready project stories.</p>
            </div>
            <div className="metric-grid">
              <div className="metric"><strong>Excel</strong><span>Reporting foundation</span></div>
              <div className="metric"><strong>SQL</strong><span>Business queries</span></div>
              <div className="metric"><strong>BI</strong><span>Dashboards</span></div>
              <div className="metric"><strong>1:1</strong><span>Guided mentoring</span></div>
            </div>
          </aside>
        </section>

        <section className="section">
          <div className="shell">
            <CardGrid items={heroCards} />
          </div>
        </section>

        <section className="section alt" id="lead-form">
          <div className="shell lead-wrap">
            <div className="download-box">
              <span className="eyebrow">Free Counselling</span>
              <h2>Start with a Practical Data Analytics Roadmap</h2>
              <p>Share your background and CyberAscent will help you understand the right Data Analytics learning path based on your current skills, career goal, and target role.</p>
              <a className="button secondary" href={pdfPath}>Download Data Analytics Starter Kit</a>
            </div>

            <form className="form-card" action="/thank-you">
              <h2>Request My Counselling Call</h2>
              <p className="form-note">No email or WhatsApp automation is triggered in this version. Your details are saved securely for manual follow-up.</p>
              <div className="form-grid">
                <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" type="text" required /></div>
                <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
                <div className="field"><label htmlFor="country-code">Country code</label><input id="country-code" name="countryCode" type="text" placeholder="+91" /></div>
                <div className="field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" placeholder="Enter a valid local number" /></div>
                <div className="field"><label htmlFor="contact">Preferred contact method</label><select id="contact" name="contact" defaultValue=""><option value="" disabled>Select preference</option><option>Email</option><option>Phone</option><option>WhatsApp</option></select></div>
                <div className="field"><label htmlFor="alternate-phone">Different contact number, if any</label><input id="alternate-phone" name="alternatePhone" type="tel" /></div>
                <div className="field"><label htmlFor="role">Current job role</label><input id="role" name="role" type="text" /></div>
                <div className="field"><label htmlFor="experience">Experience level</label><select id="experience" name="experience" defaultValue=""><option value="" disabled>Select experience</option><option>Fresher</option><option>0-2 years</option><option>3-5 years</option><option>5+ years</option></select></div>
                <div className="field full"><label htmlFor="interest">Preferred tool interest</label><select id="interest" name="interest" defaultValue=""><option value="" disabled>Excel / SQL / Power BI / Tableau / Python / Not sure yet</option><option>Excel</option><option>SQL</option><option>Power BI</option><option>Tableau</option><option>Python</option><option>Not sure yet</option></select></div>
                <div className="field full"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Tell us your goal, current job role, reporting experience, or timeline." /></div>
                <label className="consent full"><input name="consent" type="checkbox" required /> I agree that CyberAscent may contact me about this Data Analytics webinar, starter kit, counselling, and training offer using my selected contact preference.</label>
              </div>
              <button className="button form-submit" type="submit">Request My Counselling Call</button>
            </form>
          </div>
        </section>

        <section className="section">
          <div className="shell compare">
            <SectionIntro
              title="Modern Data Analysts do more than create reports."
              text="They explain business performance, patterns, risks, and opportunities."
            />
            <CardGrid
              items={[
                ["Basic Reporting", "Creates routine Excel reports, monthly MIS files, or dashboards, but may not explain the business meaning behind the numbers."],
                ["Practical Data Analyst", "Uses Excel, SQL, Power BI/Tableau, and Python basics to clean data, find patterns, build dashboards, explain KPIs, and support decision-making."],
                ["CyberAscent Approach", "Teaches business thinking first, then tools. You build reviewed assignments and learn how to explain your data work clearly in interviews and project discussions."]
              ]}
            />
          </div>
        </section>

        <section className="section alt" id="tools">
          <div className="shell">
            <SectionIntro
              title="Tools You Will Learn and Use"
              text="Build confidence across spreadsheets, databases, dashboards, analytics thinking, and business reporting."
            />
            <CardGrid items={toolCards} />
          </div>
        </section>

        <section className="section" id="projects">
          <div className="shell">
            <SectionIntro
              title="What You Will Build"
              text="A project portfolio with practical Data Analytics deliverables."
            />
            <CardGrid items={projectCards} />
            <div className="inline-actions">
              <a className="button secondary" href="#webinar">Webinar Workbook</a>
              <a className="button secondary" href="#blog">Interview Prep Guide</a>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="shell">
            <SectionIntro
              title="Who This Is For"
              text="Designed for ambitious learners who want practical analytics capability, not surface-level theory."
            />
            <CardGrid items={audienceCards} />
          </div>
        </section>

        <section className="section starter">
          <div className="shell">
            <SectionIntro
              title="Download the Free Data Analytics Career Starter Kit"
              text="Get a practical starter pack with tool roadmap, Excel checklist, SQL practice questions, dashboard planning template, KPI examples, project outline, and interview preparation notes."
            />
            <div className="inline-actions">
              <a className="button" href={pdfPath}>Download Data Analytics Starter Kit</a>
              <a className="button secondary" href="#lead-form">Book Free Counselling</a>
            </div>
            <CardGrid items={starterKitItems} />
          </div>
        </section>

        <section className="section alt media-section" id="webinar">
          <div className="shell two-col">
            <div>
              <span className="eyebrow">Trainer Video</span>
              <h2>Watch How Business Data Becomes an Analytics Dashboard</h2>
              <p>Add a short CyberAscent intro, webinar replay, student walkthrough, or trainer explanation video from Sanity. Use this block to build trust before the lead form.</p>
              <a className="button" href="#lead-form">Join Free Webinar</a>
            </div>
            <div className="video-box">
              <span>Video Placeholder</span>
              <p>Add your YouTube, Vimeo, or Loom link from Sanity.</p>
            </div>
          </div>
        </section>

        <section className="section webinar">
          <div className="shell cta-panel">
            <span className="eyebrow">Free Webinar</span>
            <h2>How to Start a Data Analytics Career with Excel, SQL, Dashboards, and Real Business Projects</h2>
            <p>Join CyberAscent live to see how Data Analytics works in real business scenarios, including data cleaning, SQL analysis, KPI reporting, dashboard creation, insight communication, and project interview preparation.</p>
            <div className="inline-actions">
              <a className="button" href="#lead-form">Join Free Webinar</a>
              <a className="button secondary" href="#projects">Webinar Workbook</a>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="shell">
            <SectionIntro
              title="Guided Live Training"
              text="Practical guidance for analytics tools, business reporting, dashboards, and interview readiness. Learn the concept, apply it to an assignment, review the output, and turn it into a story you can explain."
            />
            <CardGrid items={trainingCards} />
          </div>
        </section>

        <section className="section" id="pulse">
          <div className="shell">
            <SectionIntro
              title="Data Analytics Market Pulse"
              text="Trending Data Analytics topics learners should watch this year. Use these topics for dashboard ideas, SQL practice, KPI examples, project stories, and interview preparation."
            />
            <div className="pulse-grid">
              {pulseItems.map(([tag, title, text]) => (
                <article className="pulse-card" key={title}>
                  <span>{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt outcomes">
          <div className="shell">
            <SectionIntro
              title="Career Outcomes"
              text="Learners can use this program to prepare for roles and interviews across technology, consulting, product, operations, finance, retail, healthcare, and service companies."
            />
            <div className="stats">
              <div><strong>700+</strong><span>Learners trained</span></div>
              <div><strong>4.8/5</strong><span>Experience rating</span></div>
              <div><strong>Career-ready</strong><span>Project-focused learning</span></div>
            </div>
            <div className="logo-cloud">{companies.map((company) => <span key={company}>{company}</span>)}</div>
          </div>
        </section>

        <section className="section feedback">
          <div className="shell">
            <SectionIntro
              title="Learner Feedback"
              text="Practical training feels different when assignments are reviewed."
            />
            <div className="rating-panel">
              <div>
                <span>Training experience rating</span>
                <strong>4.8 / 5</strong>
                <p>Based on CyberAscent learner feedback and counselling conversations.</p>
              </div>
              <ul>
                <li>Reviewed analytics assignments</li>
                <li>Dashboard-ready project stories</li>
                <li>Interview answer confidence</li>
                <li>Excel, SQL, and BI workflow practice</li>
              </ul>
            </div>
            <div className="grid testimonials">
              {testimonials.map(([name, role, quote]) => (
                <article className="card" key={name}>
                  <span className="eyebrow">5-star feedback</span>
                  <p>"{quote}"</p>
                  <h3>{name}</h3>
                  <small>{role}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="blog">
          <div className="shell">
            <SectionIntro
              title="Data Analytics Blog"
              text="Build topical authority with Data Analytics, BI, SQL, dashboard, and career articles."
            />
            <div className="grid blog-grid">
              {blogCards.map(([tag, title, text]) => (
                <article className="card" key={title}>
                  <span className="eyebrow">{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a className="text-link" href="#lead-form">Read article</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section assistant">
          <div className="shell two-col">
            <div>
              <span className="eyebrow">Ask CyberAscent</span>
              <h2>Data Analytics assistant roadmap</h2>
              <p>Next step: add a lightweight assistant that answers common Data Analytics training questions from approved FAQs, then routes serious enquiries to the lead form or your team.</p>
              <a className="button" href="#lead-form">Talk to Advisor</a>
            </div>
            <div className="prompt-list">
              {quickPrompts.map((prompt) => <span key={prompt}>{prompt}</span>)}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="shell">
            <SectionIntro title="Common Questions" text="Answers for learners evaluating the CyberAscent Data Analytics Training Program." />
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="shell price-wrap">
            <div>
              <span className="eyebrow">Pricing</span>
              <h2>Data Analytics Guided Live Training</h2>
              <p>Start your Data Analytics training with a premium guided live program built around practical assignments, dashboard practice, SQL exercises, project reviews, and interview preparation.</p>
              <p className="form-note">The 24-hour offer window starts only after enquiry submission.</p>
            </div>
            <div className="price-card">
              <h3>Limited-Time Career Accelerator Offer</h3>
              <div className="price-row"><span>Regular Price</span><strong>$[Add Regular Price in CMS]</strong></div>
              <div className="price-row"><span>Offer Price</span><strong>$[Add Offer Price in CMS]</strong></div>
              <div className="price-row"><span>You Save</span><strong>$[Add Savings in CMS]</strong></div>
              <div className="price-row"><span>Discount</span><strong>[Add Discount Percentage in CMS]</strong></div>
              <p>Scholarship-style discount valid for 24 hours after enquiry submission.</p>
              <div className="inline-actions">
                <a className="button" href="#lead-form">Book Free Counselling</a>
                <a className="button secondary" href="#projects">Download Course Syllabus</a>
              </div>
              <span className="whatsapp">WhatsApp Group</span>
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="shell cta-panel">
            <span className="eyebrow">Next Step</span>
            <h2>Get the starter kit, then speak with an advisor.</h2>
            <p>Share your background once. CyberAscent can guide you toward the right Data Analytics training path, starter kit, webinar, and counselling option.</p>
            <a className="button" href="#lead-form">Talk to Advisor</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          CyberAscent Data Analytics Training Program. Starter kit path: {pdfPath}
        </div>
      </footer>
    </>
  );
}
