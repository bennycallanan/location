'use client';

import { locations as initialLocations } from "./data/locations";
import LocationCard from "./components/LocationCard";
import usePingLocations from "./hooks/usePingLocations";

export default function Home() {
    const { locations, isPinging, pingAllLocations, pingLocation } = usePingLocations(initialLocations);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-bold">Welcome to the Location App</h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {locations.map((location) => (
                        <LocationCard 
                            key={location.id} 
                            location={location} 
                            onPing={pingLocation}
                        />
                    ))}
                </div>
                
                {/* Test All Locations Button */}
                <button 
                    className={`bg-white border border-gray-300 text-black px-4 py-1.5 rounded-md ${isPinging ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={pingAllLocations}
                    disabled={isPinging}
                >
                    {isPinging ? "Testing..." : "Test All Locations"}
                </button>
            </main>
        </div>
    );
}
