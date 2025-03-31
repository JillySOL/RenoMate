import { Home, Search, Percent, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    icon: Home,
    label: "Home",
    href: "/"
  },
  {
    icon: Search,
    label: "Explore",
    href: "/explore"
  },
  {
    icon: Percent,
    label: "Deals",
    href: "/deals"
  },
  {
    icon: User,
    label: "Profile",
    href: "/profile"
  }
];

export const BottomNav = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t bg-background">
      <div className="mx-auto flex h-16">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav; 