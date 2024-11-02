import type {Metadata} from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Thor Urbana Intranet",
  description: "Thor Urbana",
};

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
