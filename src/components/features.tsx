import { Check } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section className="h-full bg-primary text-background lg:h-[250px]">
      <div className="flex h-full flex-col items-start justify-center gap-20 px-10 py-10 sm:items-center lg:flex-row">
        <div className="flex items-center gap-1">
          <Check strokeWidth={0.6} />
          <h1 className="text-lg font-medium">Swimming Pool</h1>
        </div>
        <div className="flex items-center gap-1">
          <Check strokeWidth={0.6} />
          <h1 className="text-lg font-medium">Free Parking</h1>
        </div>
        <div className="flex items-center gap-1">
          <Check strokeWidth={0.6} />
          <h1 className="text-lg font-medium">Cinema</h1>
        </div>
        <div className="flex items-center gap-1">
          <Check strokeWidth={0.6} />
          <h1 className="text-lg font-medium">Balcony</h1>
        </div>
        <div className="flex items-center gap-1">
          <Check strokeWidth={0.6} />
          <h1 className="text-lg font-medium">Gym</h1>
        </div>
      </div>
    </section>
  );
};

export default Features;
