import { Loading } from "@/components/layout";
import EditorProvider, {
  NumberedLine,
} from "@/components/programs/portfolio/editor";
import { Activity } from "@/components/programs/portfolio/files";
import { Suspense } from "react";

interface LayoutProps {
  github: React.ReactNode;
  apple: React.ReactNode;
}

const Layout = ({ github, apple }: LayoutProps) => {
  return (
    <Activity active={true} typingCommand={false}>
      <EditorProvider active={true} typingCommand={false}>
        <NumberedLine>
          <div className="flex justify-center w-full">
            <div className="italic text-comment font-medium">
              Looking for some quick insights?
            </div>
          </div>
        </NumberedLine>
        <NumberedLine></NumberedLine>
        <NumberedLine>
          <div className="w-full grid grid-cols-12 gap-4 overflow-hidden">
            <div className="lg:col-span-8 col-span-12 min-h-56">
              <Suspense fallback={Loading}>{github}</Suspense>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <Suspense fallback={Loading}>{apple}</Suspense>
            </div>
          </div>
        </NumberedLine>
        <NumberedLine />
        <NumberedLine>
          <div className="w-full bg-bg-highlight p-8 rounded">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=19IBsB2RXDNZIoS0HES_gQJ_TwZS2DOQ&ehbc=2E312F"
              className="w-full text-text"
              height="560"
            />
          </div>
        </NumberedLine>
      </EditorProvider>
    </Activity>
  );
};

export default Layout;
