import "./globals.css";
// Override style
// {@link https://stackoverflow.com/questions/66539699/fontawesome-icons-not-working-properly-in-react-next-app}
import "@fortawesome/fontawesome-svg-core/styles.css";
import MediaLink from "@/components/layout/MediaLink";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Monitor from "@/components/computer";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Nick Doan",
  description: "My personal portfolio",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overscroll-none overflow-hidden h-screen w-screen bg-bg-variant text-text md:p-12 p-2 flex justify-center`}
      >
        <Monitor>{children}</Monitor>
      </body>
    </html>
  );
};

export default Layout;
export { metadata };
