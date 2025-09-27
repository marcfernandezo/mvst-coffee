"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CoffeeForm } from "@/components/coffee/CoffeForm";
import { useCreateCoffee } from "@/hooks/useCreateCoffe";

interface CreateCoffeeProps {
  triggerLabel: string;
}

export default function CreateCoffee({ triggerLabel }: CreateCoffeeProps) {
  const form = useCreateCoffee();

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#BA8039] text-white rounded-full px-6 py-2 font-semibold hover:bg-[#a36f32] transition"
        >
          <span className="lowercase first-letter:uppercase font-bebas">
            {triggerLabel}
          </span>
        </motion.button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="flex bg-[#191919] text-white max-w-xl rounded-2xl p-10 overflow-hidden border-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <DialogHeader>
            <DialogTitle className="text-4xl font-bebas text-center">
              Create New
            </DialogTitle>
          </DialogHeader>

          <CoffeeForm {...form} />
        </motion.div>

        {/* Coffee Beans Decoration */}
        <Image
          src="/coffee-beans.webp"
          alt="Coffee beans"
          width={140}
          height={140}
          className="absolute bottom-0 left-0 pointer-events-none select-none opacity-70"
        />
      </DialogContent>
    </Dialog>
  );
}
