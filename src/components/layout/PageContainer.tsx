import { cn } from "@/lib/utils";
import BottomNav from "./BottomNav";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hideNav?: boolean;
}

export const PageContainer = ({
  children,
  className,
  hideNav = false,
  ...props
}: PageContainerProps) => {
  return (
    <>
      <main
        className={cn(
          "container mx-auto px-4 pb-20",
          className
        )}
        {...props}
      >
        {children}
      </main>
      {!hideNav && <BottomNav />}
    </>
  );
};

export default PageContainer;
