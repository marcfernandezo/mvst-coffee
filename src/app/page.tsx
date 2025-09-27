import Image from "next/image";

import CoffeeList from "@/components/CoffeeList";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import CreateCoffee from "@/components/CreateCoffe";

export default function HomeRoute() {
  return (
    <section className="relative h-screen w-full bg-black text-white">
      {/* MVST Header Coffe Backgroudn */}
      <Image
        src="/background-header.webp"
        alt="MVST Header Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-12 py-8">
        <Header />
        <div className="flex flex-1 items-center">
          <div className="max-w-md space-y-6">
            <h1 className="text-7xl font-bebas">ROASTED COFFEE</h1>
            <p className="text-gray-300">
              Choose a coffee from below or create your own.
            </p>
            <CreateCoffee triggerLabel="Create your own coffee" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-black/80" />

      <CoffeeList />

      <Footer />
    </section>
  );
}
