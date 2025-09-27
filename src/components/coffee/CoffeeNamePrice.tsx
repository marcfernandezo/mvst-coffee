import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  name: string;
  setName: (v: string) => void;
  price: string;
  setPrice: (v: string) => void;
  formatPrice: (v: string) => string;
}

export function CoffeeNamePrice({
  name,
  setName,
  price,
  setPrice,
  formatPrice,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <Label htmlFor="name" className="text-gray-400 text-sm">
          Name
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name your coffee here"
          className="border border-gray-600 bg-muted text-white placeholder:text-gray-500"
          required
        />
      </div>
      <div>
        <Label htmlFor="price" className="text-gray-400 text-sm">
          Price
        </Label>
        <div className="flex">
          <Input
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value.replace(",", "."))}
            onBlur={() => setPrice(formatPrice(price))}
            placeholder="0.00"
            inputMode="decimal"
            type="text"
            className="bg-transparent border border-gray-600 text-white border-r-0 rounded-r-none placeholder:text-gray-500
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            required
          />
          <span className="flex items-center px-3 border border-gray-600 border-l-0 rounded-r-md text-gray-300 bg-transparent">
            €
          </span>
        </div>
      </div>
    </div>
  );
}
