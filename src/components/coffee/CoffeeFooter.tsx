import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  isFormValid: boolean;
  loading: boolean;
}

export function CoffeeFooter({ isFormValid, loading }: Props) {
  return (
    <DialogFooter className="sm:justify-center gap-6 mt-10">
      <DialogClose asChild>
        <Button
          type="button"
          variant="outline"
          className="border border-[#BA8039] text-[#BA8039] bg-transparent rounded-full px-8 hover:bg-[#2a2a2a]"
        >
          Discard
        </Button>
      </DialogClose>

      <Button
        type="submit"
        disabled={!isFormValid || loading}
        className="bg-[#BA8039] hover:bg-[#a36f32] text-black font-semibold rounded-full px-8 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Confirm"}
      </Button>
    </DialogFooter>
  );
}
