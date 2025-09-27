"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import useSWR from "swr";
import { CoffeeCardSkeleton } from "@/components/coffee/CardSkeleton";

// Tabs for filtering coffees
const TABS = ["All", "Robusta", "Arabic"] as const;

type CoffeeType = (typeof TABS)[number];

// Coffee type definition
export type Coffee = {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  tag?: string;
  image: string;
};

// Generic fetcher for SWR
async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data from API");
  }
  return res.json() as Promise<T>;
}

// Helper to get full image URL (Supabase storage)
function getCoffeeImageUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `https://jkiwvdrkrdjinhpvbqrx.supabase.co/storage/v1/object/public${
    path.startsWith("/") ? "" : "/"
  }${path}`;
}

export default function CoffeeList() {
  const [activeTab, setActiveTab] = useState<CoffeeType>("All");

  // Fetch coffees from the API using SWR
  const {
    data: coffees,
    error,
    isLoading,
  } = useSWR<Coffee[]>("/api/coffees", fetcher);

  // Filter coffees by active tab
  const filteredCoffees = useMemo(() => {
    if (!coffees) return [];
    return activeTab === "All"
      ? coffees
      : coffees.filter((coffee) => coffee.type === activeTab);
  }, [coffees, activeTab]);

  return (
    <section className="py-16 bg-black text-white">
      {/* Section Title */}
      <h2 className="text-center font-bebas text-2xl mb-8 tracking-wide">
        MVST. EXCLUSIVE COFFEE
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm transition-colors ${
              activeTab === tab
                ? "bg-white text-black"
                : "bg-neutral-800 text-gray-400 hover:bg-neutral-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Coffee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {isLoading || !coffees
          ? Array.from({ length: 6 }).map((_, i) => (
              <CoffeeCardSkeleton key={i} />
            ))
          : filteredCoffees.map((coffee) => (
              <div
                key={coffee.id}
                className="bg-neutral-900 rounded-xl shadow-md p-6 flex flex-col items-center relative max-w-sm w-full mx-auto transition-transform hover:scale-105"
              >
                {/* Optional Tag */}
                {coffee.tag && (
                  <span className="absolute top-4 left-4 text-xs bg-neutral-700 px-3 py-1 rounded-full">
                    {coffee.tag}
                  </span>
                )}

                {/* Coffee Image */}
                <Image
                  src={getCoffeeImageUrl(coffee.image)}
                  alt={coffee.name}
                  width={160}
                  height={160}
                  className="mb-4 object-contain"
                />

                {/* Coffee Info */}
                <h3 className="font-bebas text-xl text-center">
                  {coffee.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2 text-center">
                  {coffee.description}
                </p>
                <p className="text-lg font-bold">{coffee.price} €</p>
              </div>
            ))}
      </div>

      {/* Error Handling */}
      {error && (
        <p className="text-center text-red-500 mt-8">
          Failed to load coffees. Please try again later.
        </p>
      )}
    </section>
  );
}
