import Image from "next/image";
import { Location } from "../data/locations";

interface LocationCardProps {
  location: Location;
  onPing?: (locationId: string) => void;
}

export default function LocationCard({ location, onPing }: LocationCardProps) {
  const getPingColor = (ping: number | undefined) => {
    if (ping === undefined) return "text-gray-400";
    if (ping < 50) return "text-green-500";
    if (ping < 150) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="bg-[#1a1a1a] p-4 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={location.flag}
          className="w-fit h-8 rounded-md"
          alt={`${location.country} flag`}
          width={80}
          height={80}
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">{location.country}, {location.name}</h2>
          <p className="text-sm text-gray-400 font-semibold">
            {location.isLoading ? (
              <span className="text-gray-400">Pinging...</span>
            ) : location.ping !== undefined ? (
              <>
                <span className={getPingColor(location.ping)}>{location.ping} </span>
                ping
              </>
            ) : (
              <span className="text-gray-400">Not tested</span>
            )}
          </p>
        </div>
      </div>

      {onPing && (
        <button
          className="text-xs bg-gray-800 hover:bg-gray-700 text-white px-2 py-1 rounded"
          onClick={() => onPing(location.id)}
          disabled={location.isLoading}
        >
          {location.isLoading ? "..." : "Test"}
        </button>
      )}
    </div>
  );
}