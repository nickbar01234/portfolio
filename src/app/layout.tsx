import "./globals.css";
// Override style
// {@link https://stackoverflow.com/questions/66539699/fontawesome-icons-not-working-properly-in-react-next-app}
import "@fortawesome/fontawesome-svg-core/styles.css";
import MediaLink from "@/components/layout/MediaLink";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Nick Doan",
  description: "My personal portfolio",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-12 h-full w-full bg-bg-variant text-text">
          <div className="col-span-1 flex justify-center">
            <div className="fixed bottom-0">
              <MediaLink />
            </div>
          </div>
          <div className="col-span-11">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
export { metadata };
