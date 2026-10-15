import './globals.css';

export const metadata = {
  title: 'doubleangels | Software Engineer',
  description: 'Projects by doubleangels, including Redact and NextDNS Manager.',
  openGraph: {
    title: 'doubleangels | Software Engineer',
    description: 'Projects by doubleangels, including Redact and NextDNS Manager.',
    siteName: 'doubleangels',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'doubleangels | Software Engineer',
    description: 'Projects by doubleangels, including Redact and NextDNS Manager.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
