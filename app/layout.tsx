export const metadata = {
  title: 'Get3Step',
  description: 'Cognitive Execution Engine'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
