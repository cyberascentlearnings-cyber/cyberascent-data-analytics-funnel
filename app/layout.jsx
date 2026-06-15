import "./globals.css";

export const metadata = {
  title: "CyberAscent Data Analytics Training Program",
  description:
    "A premium CyberAscent landing page for Data Analytics training covering Excel, SQL, Power BI, Tableau, and Python basics."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
