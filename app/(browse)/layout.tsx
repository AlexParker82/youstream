import { Navbar } from "./_components/navbar";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

const BrowseLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={cn(font.className)}>
      <Navbar />
      <div className="flex h-full pt-20">
        {children}
      </div>
    </div>
  );
};

export default BrowseLayout;