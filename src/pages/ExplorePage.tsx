import { Link } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import { IMAGES } from "@/constants/images";
import EnhancedBeforeAfter from "@/components/ui-custom/EnhancedBeforeAfter.tsx";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import MetaTags from "@/components/layout/MetaTags";

const ExplorePage = () => {
  return (
    <PageContainer>
      <MetaTags 
        title="Explore Examples - RenoMate" 
        description="Browse real room transformation examples and get inspired for your next renovation project."
      />
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button className="mr-2 hover:bg-accent hover:text-accent-foreground h-10 w-10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">Explore Examples</h1>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-budget-dark">Budget-Friendly Bathroom Refresh</h2>
            <span className="bg-[#E6F4EA] text-green-800 text-sm font-medium px-2.5 py-1 rounded-full">
              +$18,000 Value
            </span>
          </div>

          <p className="text-budget-dark/70 mb-4">
            See how we transformed this bathroom for under $450
          </p>

          <Link to="/project/bathroom-refresh" className="block">
            <EnhancedBeforeAfter
              beforeImage={IMAGES.BEFORE}
              afterImage={IMAGES.AFTER}
              className="mb-6 hover:opacity-95 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default ExplorePage;
