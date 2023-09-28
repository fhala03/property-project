import { Bus, Palmtree, School, Store } from "lucide-react";
import React from "react";

const Location = () => {
  return (
    <section className="flex items-center justify-center h-[450px]">
      <div className="flex w-full flex-col items-center justify-center gap-10 py-6">
        <h1 className="text-7xl font-extrabold uppercase tracking-tight md:text-9xl">
          Location
        </h1>
        <div className="flex w-full flex-col justify-between gap-10 px-10 py-4 md:flex-row lg:w-[70%] lg:items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <School strokeWidth={0.8} className="z-10 h-14 w-14" />
              <div className="absolute inset-0 left-[5%] top-[20%] -z-10 h-[50px] w-[50px] bg-primary/30" />
            </div>
            <div>
              <h1 className="text-2xl font-light">School</h1>
              <h2 className="font-light text-muted-foreground">5 km</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Palmtree strokeWidth={0.8} className="z-10 h-14 w-14" />
              <div className="absolute inset-0 left-[5%] top-[20%] -z-10 h-[50px] w-[50px] bg-primary/30" />
            </div>
            <div>
              <h1 className="text-2xl font-light">Beach</h1>
              <h2 className="font-light text-muted-foreground">5 km</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Store strokeWidth={0.8} className="z-10 h-14 w-14" />
              <div className="absolute inset-0 left-[5%] top-[20%] -z-10 h-[50px] w-[50px] bg-primary/30" />
            </div>
            <div>
              <h1 className="text-2xl font-light">Mall</h1>
              <h2 className="font-light text-muted-foreground">5 km</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bus strokeWidth={0.8} className="z-10 h-14 w-14" />
              <div className="absolute inset-0 left-[5%] top-[20%] -z-10 h-[50px] w-[50px] bg-primary/30" />
            </div>
            <div>
              <h1 className="text-2xl font-light">Bus Station</h1>
              <h2 className="font-light text-muted-foreground">5 km</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
