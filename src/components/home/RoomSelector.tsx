import { Link } from "react-router-dom";

interface RoomOption {
  name: string;
  description: string;
  image: string;
  dimensions?: string;
  style?: string;
}

const ROOM_OPTIONS: RoomOption[] = [
  {
    name: "Bedroom",
    description: "Transform your bedroom",
    image: "/rooms/bedroom.jpg",
    dimensions: "3 x 5m",
    style: "Minimalism"
  },
  {
    name: "Living Room",
    description: "Upgrade your living space",
    image: "/rooms/living-room.jpg",
    dimensions: "4 x 6m",
    style: "Modern"
  },
  {
    name: "Kitchen",
    description: "Renovate your kitchen",
    image: "/rooms/kitchen.jpg",
    dimensions: "3 x 4m",
    style: "Contemporary"
  }
];

export const RoomSelector = () => {
  return (
    <div role="region" aria-label="Room Selection" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">My Rooms</h2>
        <Link to="/new-project" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {ROOM_OPTIONS.map((room) => (
          <Link 
            to="/new-project" 
            key={room.name} 
            className="group relative overflow-hidden rounded-2xl bg-gray-100"
            aria-label={`Select ${room.name} for renovation`}
          >
            <div className="aspect-[4/3] w-full">
              <img 
                src={room.image} 
                alt={room.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
              <h3 className="font-medium">{room.name}</h3>
              <div className="mt-1 flex gap-2 text-xs">
                {room.dimensions && (
                  <span className="rounded-full bg-white/20 px-2 py-1">
                    {room.dimensions}
                  </span>
                )}
                {room.style && (
                  <span className="rounded-full bg-white/20 px-2 py-1">
                    {room.style}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoomSelector; 