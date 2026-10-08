import './globals.css';

export const metadata = {
  title: 'Your Name | Software Engineer',
  description: 'Personal portfolio and projects of Your Name, a software engineer.',
  openGraph: {
    title: 'Your Name | Software Engineer',
    description: 'Personal portfolio and projects of Your Name, a software engineer.',
    url: 'https://yourdomain.com',
    siteName: 'Your Name',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | Software Engineer',
    description: 'Personal portfolio and projects of Your Name, a software engineer.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
