import './globals.css';

export const metadata = {
  title: 'MindVision AI',
  description: 'AI-powered business solutions platform'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
