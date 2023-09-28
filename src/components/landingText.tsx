import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Rainbow, Waves, Wine } from "lucide-react";
import { motion } from "framer-motion";

const LandingText = () => {
  return (
    <div className="relative h-screen w-full">
      <Image alt="Image" src="/image04.jpeg" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black"></div>

      <div className="maincol relative top-[58%] flex flex-col items-end text-center text-background sm:top-[77%] lg:top-[47%]">
        <motion.h1
          className="text-right text-7xl font-extrabold uppercase tracking-tight lg:text-9xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
        >
          Luxury <br /> Mansion <br />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 5, bounce: 0.4 }}
            className="text-primary"
          >
            For rent
          </motion.span>
        </motion.h1>

        <div className="flex flex-col items-end justify-end gap-2 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.2, bounce: 0.1 }}
          >
            <Button variant={"ghost"} className="flex items-center gap-2">
              <span>Swimming Pool</span>
              <Waves className="h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.8, bounce: 0.1 }}
          >
            <Button variant={"ghost"} className="flex items-center gap-2">
              <span>Scenic Views</span>
              <Rainbow className="h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 2.3, bounce: 0.1 }}
          >
            <Button variant={"ghost"} className="flex items-center gap-2">
              <span>Wine Cellar</span>
              <Wine className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
