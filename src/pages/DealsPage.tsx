import { PageContainer } from "@/components/layout/PageContainer";
import MetaTags from "@/components/layout/MetaTags";

interface Deal {
  name: string;
  image: string;
  previousPrice: number;
  currentPrice: number;
  validUntil: string;
}

const FEATURED_DEALS: Deal[] = [
  {
    name: "Wall Mirror",
    image: "/deals/mirror.jpg",
    previousPrice: 120,
    currentPrice: 89,
    validUntil: "Mar 10, 2024"
  },
  {
    name: "Pendant Light",
    image: "/deals/light.jpg",
    previousPrice: 199,
    currentPrice: 149,
    validUntil: "Mar 15, 2024"
  }
];

const DealsPage = () => {
  return (
    <PageContainer>
      <MetaTags 
        title="Deals - RenoMate"
        description="Find the best deals on home renovation items and furniture."
      />
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Deals</h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {FEATURED_DEALS.map((deal) => (
            <div 
              key={deal.name}
              className="relative overflow-hidden rounded-2xl bg-white"
            >
              <div className="aspect-[4/3] w-full">
                <img 
                  src={deal.image}
                  alt={deal.name}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-sm text-white">
                Save ${deal.previousPrice - deal.currentPrice}
              </div>

              <div className="p-4">
                <h3 className="font-medium">{deal.name}</h3>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-lg font-bold">${deal.currentPrice}</span>
                  <span className="text-sm text-gray-500 line-through">
                    ${deal.previousPrice}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Price valid until {deal.validUntil}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default DealsPage; 