const pdfPath = "/downloads/data-analytics-career-starter-kit.pdf";

export const metadata = {
  title: "Thank You | CyberAscent Data Analytics"
};

export default function ThankYouPage() {
  return (
    <main className="thanks">
      <section className="thanks-card">
        <span className="eyebrow">Thank you</span>
        <h1>Your counselling request page is ready.</h1>
        <p className="hero-copy">
          This confirms the funnel route works. Download the CyberAscent Data Analytics career starter kit
          or return to the landing page.
        </p>
        <div className="hero-actions">
          <a className="button" href={pdfPath}>Download starter kit</a>
          <a className="button secondary" href="/">Back to landing page</a>
        </div>
      </section>
    </main>
  );
}
