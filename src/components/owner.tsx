import Image from "next/image";
import React from "react";

const Owner = () => {
  return (
    <div className="flex flex-col px-2 lg:gap-6">
      <section className="flex h-[350px] flex-col py-2 lg:flex-row">
        <div className="relative h-full w-full bg-background lg:w-[77.4%]">
          <h1 className="absolute top-1/2 -translate-y-1/2 transform text-6xl font-extrabold uppercase tracking-tight md:text-8xl lg:right-[-5%] lg:text-9xl">
            Meet the owner
          </h1>
        </div>
        <div className="maincol mt-8 flex h-full w-full items-center justify-center bg-primary py-4">
          <h1 className="border-l pl-4 italic text-background">
            Nestled along the pristine coastline, <br /> our luxury villa offers
            an unparalleled lifestyle of opulence and <br /> tranquility. The
            moment you step foot onto the grounds, <br /> you&apos;ll be
            captivated by the breathtaking panoramic views <br /> of the
            boundless sea.
          </h1>
        </div>
      </section>

      <div className="flex h-[450px] flex-col gap-4 py-4 lg:flex-row">
        <Image
          alt="Image"
          src={"/image01.jpeg"}
          className="w-full object-cover lg:w-1/3"
          height={1920}
          width={1080}
        />
        <div className="flex flex-col gap-10 bg-secondary py-8 lg:items-center lg:justify-center lg:px-32">
          <h1 className="border-l px-4 pl-4 italic">
            Nestled along the pristine coastline, our luxury villa offers an
            unparalleled lifestyle of opulence and tranquility. The moment you
            step foot onto the grounds, you&apos;ll be captivated by the
            breathtaking panoramic views of the boundless sea.
          </h1>
          <h1 className="border-r px-4 pr-4 italic">
            Nestled along the pristine coastline, our luxury villa offers an
            unparalleled lifestyle of opulence and tranquility. The moment you
            step foot onto the grounds, you&apos;ll be captivated by the
            breathtaking panoramic views of the boundless sea.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Owner;
