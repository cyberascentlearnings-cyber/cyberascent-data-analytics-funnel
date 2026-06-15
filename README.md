# CyberAscent Data Analytics Funnel

A simple premium Next.js landing page for CyberAscent's Data Analytics Training Program.

## Stack

- Next.js App Router
- React
- Plain CSS
- Public PDF downloads from `/public/downloads`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Render deployment steps

Create a new Render Web Service connected to the GitHub repository.

Use these settings:

- Environment: Node
- Branch: `main`
- Build Command: `npm install && npm run build`
- Start Command: `npm start`

Do not use Docker and do not add a Dockerfile.

## PDF download

The public starter kit path is:

```text
/downloads/data-analytics-career-starter-kit.pdf
```

Place the final PDF at `public/downloads/data-analytics-career-starter-kit.pdf`.

## Environment variables

Firebase variables can be added later when the lead form is connected to Firestore or another CRM. This first version intentionally keeps the form simple and redirects to `/thank-you`.
