import { useState } from "react";
import { Location } from "../data/locations";

export default function usePingLocations(initialLocations: Location[]) {
  const [locations, setLocations] = useState<Location[]>(initialLocations);
  const [isPinging, setIsPinging] = useState(false);

  const pingLocation = async (locationId: string) => {
    setLocations(prev => prev.map(loc =>
      loc.id === locationId ? { ...loc, isLoading: true } : loc
    ));

    try {
      const response = await fetch(`/api/ping?location=${locationId}`);
      const data = await response.json();

      if (data.success) {
        setLocations(prev => prev.map(loc =>
          loc.id === locationId ? { ...loc, ping: data.pingTime, isLoading: false } : loc
        ));
      } else {
        setLocations(prev => prev.map(loc =>
          loc.id === locationId ? { ...loc, ping: undefined, isLoading: false } : loc
        ));
        console.error(`Failed to ping ${locationId}: ${data.error}`);
      }
    } catch (error) {
      console.error(`Error pinging ${locationId}:`, error);
      setLocations(prev => prev.map(loc =>
        loc.id === locationId ? { ...loc, isLoading: false } : loc
      ));
    }
  };

  const pingAllLocations = async () => {
    if (isPinging) return;

    setIsPinging(true);

    for (const location of locations) {
      await pingLocation(location.id);
    }

    setIsPinging(false);
  };

  return {
    locations,
    isPinging,
    pingLocation,
    pingAllLocations
  };
}