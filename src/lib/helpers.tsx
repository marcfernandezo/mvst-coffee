import { toast } from "sonner";
import { TriangleAlert } from "lucide-react";

export function formatPrice(value: string): string {
  if (!value) return "";
  const num = parseFloat(value.replace(",", "."));
  if (isNaN(num) || num < 0) return "";
  return num.toFixed(2);
}

export function showError(message: string) {
  toast(
    <div className="flex items-center gap-2">
      <TriangleAlert className="w-5 h-5" />
      <span>{message}</span>
    </div>,
    {
      unstyled: true,
      className:
        "bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-lg",
    },
  );
}
