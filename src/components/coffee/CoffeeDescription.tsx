import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  desc: string;
  setDesc: (v: string) => void;
}

export function CoffeeDescription({ desc, setDesc }: Props) {
  return (
    <div>
      <Label htmlFor="description" className="text-gray-400 text-sm">
        Description
      </Label>
      <Input
        id="description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Add a description"
        className="bg-transparent border border-gray-600 text-white placeholder:text-gray-500"
      />
    </div>
  );
}
