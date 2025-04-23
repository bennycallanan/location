import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-bold">Welcome to the Location App</h1>
                <div className=" grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {/* Location 1 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg flex items-center justify-center gap-2">
                        <Image src="/flags/de.svg" className="w-fit h-8 rounded-md" alt="Location" width={80} height={80} />
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold">DE, Nuremberg</h2>
                            <p className="text-sm text-gray-400 font-semibold">
                                <span className="text-green-500">20 </span>
                                ping
                            </p>
                        </div>
                    </div>
                    {/* Location 2 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg flex items-center justify-center gap-2">
                        <Image src="/flags/de.svg" className="w-fit h-8 rounded-md" alt="Location" width={80} height={80} />
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold">USA, Los Angeles</h2>
                            <p className="text-sm text-gray-400 font-semibold">
                                <span className="text-red-500">500 </span>
                                ping
                            </p>
                        </div>
                    </div>
                    {/* Location 3 */}
                    <div className="bg-[#1a1a1a] p-4 rounded-lg flex items-center justify-center gap-2">
                        <Image src="/flags/de.svg" className="w-fit h-8 rounded-md" alt="Location" width={80} height={80} />
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold">FI, Helsinki</h2>
                            <p className="text-sm text-gray-400 font-semibold">
                                <span className="text-yellow-500">120 </span>
                                ping
                            </p>
                        </div>
                    </div>
                </div>
                {/* Test Ping Button */}
                <button className="bg-white border border-gray-300 text-black px-4 py-1.5 rounded-md">Test Ping</button>
            </main>
        </div>
    );
}
