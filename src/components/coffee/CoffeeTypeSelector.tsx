import { Label } from "@/components/ui/label";

type CoffeeType = "Arabic" | "Robusta";

interface Props {
  type: CoffeeType | null;
  setType: (t: CoffeeType) => void;
}

export function CoffeeTypeSelector({ type, setType }: Props) {
  return (
    <div>
      <Label className="text-gray-400 text-sm">Type</Label>
      <div className="flex gap-4 mt-2">
        {(["Arabic", "Robusta"] as CoffeeType[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`w-full px-4 py-2 border rounded-md transition ${
              type === t
                ? "text-white font-semibold"
                : "border-gray-600 text-gray-300 hover:border-gray-400"
            }`}
            aria-pressed={type === t}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
