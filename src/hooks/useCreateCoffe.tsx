"use client";

import { useState, useMemo, useCallback, FormEvent } from "react";
import { supabase } from "@/lib/db";
import { toast } from "sonner";
import { TriangleAlert } from "lucide-react";
import { mutate } from "swr";

type CoffeeType = "Arabic" | "Robusta";

interface CreateCoffeePayload {
  name: string;
  price: number;
  type: CoffeeType;
  image: string;
  description?: string;
}

const MAX_IMAGE_SIZE_MB = 5;
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function useCreateCoffee() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState<CoffeeType>("Arabic");
  const [image, setImage] = useState<File | null>(null);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const isFormValid = useMemo(
    () => Boolean(name.trim() && price && type && image),
    [name, price, type, image],
  );

  const formatPrice = useCallback((value: string): string => {
    if (!value) return "";
    const num = parseFloat(value.replace(",", "."));
    return isNaN(num) || num < 0 ? "" : num.toFixed(2);
  }, []);

  const resetForm = useCallback(() => {
    setName("");
    setPrice("");
    setType("Arabic");
    setImage(null);
    setDesc("");
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isFormValid || !image) {
        toast.error("Please fill in all required fields.");
        return;
      }

      // 🔒 Image validations
      if (image.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
        toast.error(`Image too large. Max ${MAX_IMAGE_SIZE_MB}MB allowed.`);
        return;
      }
      if (!ALLOWED_IMAGE_TYPES.includes(image.type)) {
        toast.error("Invalid file type. Allowed: JPG, PNG, WEBP.");
        return;
      }

      setLoading(true);

      try {
        // Check duplicate
        const { data: existingCoffee, error: fetchError } = await supabase
          .from("coffees")
          .select("id")
          .eq("name", name.trim())
          .limit(1)
          .maybeSingle();

        if (fetchError) throw fetchError;

        if (existingCoffee) {
          toast(
            <div className="flex items-center gap-2">
              <TriangleAlert className="w-5 h-5" />
              <span>A coffee with the same name already exists</span>
            </div>,
            {
              unstyled: true,
              className:
                "bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-lg",
            },
          );
          return;
        }

        // Upload image
        const filePath = `${Date.now()}-${crypto.randomUUID()}-${image.name}`;
        const { error: uploadError } = await supabase.storage
          .from("coffees")
          .upload(filePath, image);

        if (uploadError) throw uploadError;

        const {
          data: { publicUrl },
        } = supabase.storage.from("coffees").getPublicUrl(filePath);

        // Build payload
        const payload: CreateCoffeePayload = {
          name: name.trim(),
          price: parseFloat(price),
          type,
          image: publicUrl,
          description: desc.trim() || undefined,
        };

        // Save in DB
        const res = await fetch("/api/coffees", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || "Failed to create coffee");
        }

        toast.success("Coffee created successfully ☕️");

        // Refresh SWR cache
        mutate("/api/coffees");

        resetForm();
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Something went wrong";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    },
    [isFormValid, image, name, price, type, desc, resetForm],
  );

  return {
    name,
    setName,
    price,
    setPrice,
    type,
    setType,
    image,
    setImage,
    desc,
    setDesc,
    loading,
    isFormValid,
    formatPrice,
    handleSubmit,
    resetForm,
  };
}
