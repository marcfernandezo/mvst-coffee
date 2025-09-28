import CreateCoffee from "@/components/CreateCoffe";

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-between mx-4 sm:mx-20 py-4 sm:py-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
          <span className="font-extrabold">MVST</span> Coffee
        </h2>
        <CreateCoffee triggerLabel="Create" />
      </div>
    </header>
  );
}
