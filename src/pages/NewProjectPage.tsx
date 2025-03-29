import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ImageUploader from "@/components/ui-custom/ImageUploader";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import StyleChip from "@/components/ui-custom/StyleChip";
import FlipTypeSelector from "@/components/ui-custom/FlipTypeSelector";
import MetaTags from "@/components/layout/MetaTags";

const STYLE_OPTIONS = [
  { id: "minimalist", label: "Minimalist" },
  { id: "modern", label: "Modern" },
  { id: "scandinavian", label: "Scandinavian" },
  { id: "industrial", label: "Industrial" },
  { id: "bohemian", label: "Bohemian" },
  { id: "japandi", label: "Japandi" },
  { id: "coastal", label: "Coastal" },
  { id: "traditional", label: "Traditional" },
];

const FLIP_TYPES = [
  {
    id: "redecorate",
    name: "Redecorate",
    description: "No renovation, just refresh the look with new colors, accessories, and styling",
  },
  {
    id: "diy",
    name: "DIY Only",
    description: "Focus on DIY projects, no major changes or new furniture",
  },
  {
    id: "reshuffle",
    name: "Reshuffle Layout",
    description: "Optimize room layout for better feng shui and flow",
  },
  {
    id: "budget",
    name: "Budget Flip",
    description: "Professional makeover without structural changes (under $5,000)",
  },
  {
    id: "full",
    name: "Full Renovation",
    description: "Complete room transformation with structural changes and new furniture",
  },
];

const NewProjectPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [projectData, setProjectData] = useState({
    name: "",
    image: null as File | null,
    style: "minimalist",
    flipType: "redecorate",
  });

  const handleImageSelect = (file: File) => {
    setProjectData((prev) => ({ ...prev, image: file }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit and create project
      navigate("/project/new");
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === 1) {
      navigate('/');
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const isNextDisabled = () => {
    if (currentStep === 1 && !projectData.image) return true;
    if (currentStep === 2 && !projectData.name) return true;
    return false;
  };

  return (
    <PageContainer>
      <MetaTags title="New Project - RenoMate" />
      <div className="flex items-center mb-6">
        <Button className="mr-2 hover:bg-accent hover:text-accent-foreground h-10 w-10" onClick={handlePreviousStep}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-semibold">New Project</h1>
      </div>
      
      <div className="flex justify-between mb-6">
        {[1, 2, 3].map((step) => (
          <div 
            key={step}
            className={`h-1 flex-1 mx-0.5 rounded-full ${
              step <= currentStep ? "bg-budget-teal" : "bg-muted"
            }`}
          />
        ))}
      </div>
      
      {currentStep === 1 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h2 className="text-lg font-medium mb-2">Upload Room Photo</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Take a clear photo of your room from a good angle
            </p>
            <ImageUploader onImageSelect={handleImageSelect} />
          </div>
        </div>
      )}
      
      {currentStep === 2 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h2 className="text-lg font-medium mb-2">Project Details</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Tell us more about your project
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input
                  id="project-name"
                  placeholder="e.g. Living Room Refresh"
                  value={projectData.name}
                  onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Design Style</Label>
                <div className="flex flex-wrap gap-2">
                  {STYLE_OPTIONS.map((style) => (
                    <StyleChip
                      key={style.id}
                      label={style.label}
                      selected={projectData.style === style.id}
                      onClick={() => setProjectData({ ...projectData, style: style.id })}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {currentStep === 3 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h2 className="text-lg font-medium mb-2">Choose Your Approach</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Select how you want to transform your space
            </p>
            
            <div className="space-y-6">
              <FlipTypeSelector
                types={FLIP_TYPES}
                selectedTypeId={projectData.flipType}
                onSelect={(typeId) => setProjectData({ ...projectData, flipType: typeId })}
              />
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8">
        <Button 
          className="w-full flex items-center justify-center gap-2"
          onClick={handleNextStep}
          disabled={isNextDisabled()}
        >
          {currentStep < 3 ? "Continue" : "Generate Designs"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </PageContainer>
  );
};

export default NewProjectPage;
