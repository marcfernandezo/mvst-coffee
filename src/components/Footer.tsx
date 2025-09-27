import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden">
      <Image
        src="/mvst-footer.webp"
        alt="MVST Footer Banner"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/100 to-transparent" />
    </footer>
  );
}
