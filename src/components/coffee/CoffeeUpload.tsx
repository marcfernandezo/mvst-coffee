import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  setImage: (f: File | null) => void;
}

export function CoffeeUpload({ setImage }: Props) {
  return (
    <div>
      <Label htmlFor="image" className="text-gray-400 text-sm">
        Upload image
      </Label>
      <Input
        id="image"
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) setImage(e.target.files[0]);
        }}
        className="border-gray-600 text-white 
          file:mr-4 file:px-4 file:py-1 file:text-sm file:font-semibold file:text-gray-400"
        required
      />
    </div>
  );
}
