

export const metadata = {
  title: "Dashboard page",
  description: "test ))",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
