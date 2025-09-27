import { supabase } from "@/lib/db";

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: "Arabic" | "Robusta";
}

/** Seed Data */
const coffees: Coffee[] = [
  {
    id: 1,
    name: "Dark Roast",
    description: "Free in the MVST office",
    price: 19.0,
    image: "/coffees/arabic.webp",
    type: "Arabic",
  },
  {
    id: 2,
    name: "Americano",
    description: "Free in the MVST office",
    price: 20.0,
    image: "/coffees/robusta.webp",
    type: "Robusta",
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Free in the MVST office",
    price: 15.0,
    image: "/coffees/arabic.webp",
    type: "Arabic",
  },
  {
    id: 4,
    name: "Decaf Americano",
    description: "Free in the MVST office",
    price: 20.0,
    image: "/coffees/robusta.webp",
    type: "Robusta",
  },
  {
    id: 5,
    name: "Pine Roast",
    description: "Free in the MVST office",
    price: 19.0,
    image: "/coffees/arabic.webp",
    type: "Arabic",
  },
  {
    id: 6,
    name: "Raphael Original",
    description: "Free in the MVST office",
    price: 15.0,
    image: "/coffees/arabic.webp",
    type: "Arabic",
  },
];

async function seedCoffees() {
  console.log("[lOG]: Starting seed for coffees...");

  const { error } = await supabase
    .from("coffees")
    .upsert(coffees, { onConflict: "id" });

  if (error) {
    console.error("[LOG]:", error.message);
    process.exit(1);
  }

  console.log(`[LOG]: Seeded ${coffees.length} coffees`);
}

seedCoffees();
