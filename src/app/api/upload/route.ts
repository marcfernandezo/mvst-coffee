import { NextResponse } from "next/server";
import { createClient } from "@/lib/db/client";

interface UploadResponse {
  url: string;
}

/**
 * POST /api/upload
 * Upload a new coffee image to Database
 */
export async function POST(req: Request) {
  const supabase = createClient()

  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "Missing or invalid file" },
        { status: 400 },
      );
    }

    // Validate type and image size
    const MAX_SIZE_MB = 5;
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      return NextResponse.json(
        { error: `File too large. Max ${MAX_SIZE_MB}MB allowed.` },
        { status: 413 },
      );
    }

    const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Allowed: JPG, PNG, WEBP." },
        { status: 415 },
      );
    }

    // Unique image name
    const fileExt = file.name.split(".").pop() || "bin";
    const fileName = `${Date.now()}-${crypto.randomUUID()}.${fileExt}`;

    // Upload to Database bucket "coffees"
    const { error } = await supabase.storage
      .from("coffees")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;

    // Generate public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("coffees").getPublicUrl(fileName);

    return NextResponse.json<UploadResponse>(
      { url: publicUrl },
      { status: 201 },
    );
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Unexpected server error";
    console.error("POST /api/upload error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
