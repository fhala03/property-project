import { Bed, ChefHat, Leaf, Plus, Rainbow } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex h-[550px] w-full flex-col md:flex-row">
      <div className="flex h-full w-full items-center justify-center bg-foreground">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="flex gap-20">
            <div className="flex w-fit flex-col items-center gap-1">
              <Bed className="h-8 w-8 text-primary" />
              <span className="text-lg font-light text-background">
                6 Bedrooms
              </span>
            </div>
            <div className="flex w-fit flex-col items-center gap-1">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-lg font-light text-background">Garden</span>
            </div>
          </div>
          <Plus strokeWidth={0.7} className="h-16 w-16 text-primary"/>
          <div className="flex gap-20">
            <div className="flex w-fit flex-col items-center gap-1">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-lg font-light text-background">
                2 Kitchen
              </span>
            </div>
            <div className="flex w-fit flex-col items-center gap-1">
              <Rainbow className="h-8 w-8 text-primary" />
              <span className="text-lg font-light text-background">
                Terrace
              </span>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="Image"
        src={"/image01.jpeg"}
        className="w-full object-cover md:w-1/2 lg:w-full"
        height={1920}
        width={1080}
      />
    </section>
  );
};

export default Hero;
