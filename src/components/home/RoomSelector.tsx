import { PaintBucket, Hammer, Bath } from "lucide-react";
import { Link } from "react-router-dom";

interface RoomOption {
  icon: JSX.Element;
  name: string;
  description: string;
}

const ROOM_OPTIONS: RoomOption[] = [
  {
    icon: <PaintBucket className="h-6 w-6" />,
    name: "Living Room",
    description: "Transform your living space"
  },
  {
    icon: <Hammer className="h-6 w-6" />,
    name: "Kitchen",
    description: "Upgrade your kitchen"
  },
  {
    icon: <Bath className="h-6 w-6" />,
    name: "Bathroom",
    description: "Renovate your bathroom"
  },
];

export const RoomSelector = () => {
  return (
    <div role="region" aria-label="Room Selection">
      <h2 className="text-sm font-medium mb-4 text-gray-900">What room do you want to renovate?</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
        {ROOM_OPTIONS.map((room) => (
          <Link 
            to="/new-project" 
            key={room.name} 
            className="group flex flex-col items-center p-3 sm:p-5 bg-white rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md hover:border-green-200 transition-all"
            aria-label={`Select ${room.name} for renovation`}
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-green-100 group-hover:bg-green-200 flex items-center justify-center mb-2 sm:mb-4 transition-colors">
              {room.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-900">{room.name}</span>
            <span className="text-xs text-gray-500 mt-1 hidden sm:block">{room.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoomSelector; 