import { CoffeeNamePrice } from "@/components/coffee/CoffeeNamePrice";
import { CoffeeTypeSelector } from "@/components/coffee/CoffeeTypeSelector";
import { CoffeeUpload } from "@/components/coffee/CoffeeUpload";
import { CoffeeDescription } from "@/components/coffee/CoffeeDescription";
import { CoffeeFooter } from "@/components/coffee/CoffeeFooter";

interface Props {
  name: string;
  setName: (v: string) => void;
  price: string;
  setPrice: (v: string) => void;
  type: "Arabic" | "Robusta" | null;
  setType: (t: "Arabic" | "Robusta") => void;
  setImage: (f: File | null) => void;
  desc: string;
  setDesc: (v: string) => void;
  isFormValid: boolean;
  loading: boolean;
  formatPrice: (v: string) => string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export function CoffeeForm(props: Props) {
  return (
    <form onSubmit={props.handleSubmit} className="space-y-6 mt-6">
      <CoffeeNamePrice
        name={props.name}
        setName={props.setName}
        price={props.price}
        setPrice={props.setPrice}
        formatPrice={props.formatPrice}
      />

      <CoffeeTypeSelector type={props.type} setType={props.setType} />

      <CoffeeUpload setImage={props.setImage} />

      <CoffeeDescription desc={props.desc} setDesc={props.setDesc} />

      <CoffeeFooter isFormValid={props.isFormValid} loading={props.loading} />
    </form>
  );
}
