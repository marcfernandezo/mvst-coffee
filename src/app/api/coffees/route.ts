import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/db";

/**
 * Types for Coffee records
 */
export interface Coffee {
  id: string;
  name: string;
  price: number | null;
  type: string;
  image?: string | null;
  description?: string | null;
  created_at: string;
}

export interface CoffeeInsert {
  name: string;
  price?: number;
  type: string;
  image?: string;
  description?: string;
}

function handleError(error: unknown, context: string) {
  if (error instanceof Error) {
    console.error(`${context}:`, error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  console.error(`${context}:`, error);
  return NextResponse.json(
    { error: "Unknown error occurred" },
    { status: 500 },
  );
}

/**
 * GET /api/coffees
 * Fetch all coffee records
 */
export async function GET() {
  try {
    const { data, error } = await supabase.from("coffees").select("*");

    if (error) throw error;

    return NextResponse.json<Coffee[]>(data ?? [], { status: 200 });
  } catch (err) {
    return handleError(err, "GET /coffees error");
  }
}

/**
 * POST /api/coffees
 * Create a new coffee record
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CoffeeInsert;
    const { name, type, price, image, description } = body;

    // Basic input validation
    if (!name || !type) {
      return NextResponse.json(
        { error: "Missing required fields: name, type" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("coffees")
      .insert([{ name, price, type, image, description }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json<Coffee>(data, { status: 201 });
  } catch (err) {
    return handleError(err, "POST /coffees error");
  }
}
