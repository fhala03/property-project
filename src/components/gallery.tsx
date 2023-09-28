import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="px-2">
      <section className="flex h-[350px] flex-col py-2 lg:flex-row">
        <div className="relative h-full w-full bg-background lg:w-[77.4%]">
          <h1 className="maincol absolute top-1/2 -translate-y-1/2 transform text-7xl font-extrabold uppercase tracking-tight md:text-9xl lg:right-[-5%]">
            Gallery
          </h1>
        </div>

        <div className="flex h-full w-full items-center justify-center bg-primary py-4">
          <h1 className="border-l pl-4 italic text-background">
            Nestled along the pristine coastline, <br /> our luxury villa offers
            an unparalleled lifestyle of opulence and <br /> tranquility. The
            moment you step foot onto the grounds, <br /> you&apos;ll be
            captivated by the breathtaking panoramic views <br /> of the
            boundless sea.
          </h1>
        </div>
      </section>
      <div className="flex h-[450px] gap-2 overflow-x-auto overflow-y-hidden pb-2">
        <Image
          alt="Image"
          src={"/image01.jpeg"}
          className="h-[500px] w-full object-cover"
          height={1920}
          width={1080}
        />
        <Image
          alt="Image"
          src={"/image01.jpeg"}
          className="h-[500px] w-full object-cover"
          height={1920}
          width={1080}
        />
        <Image
          alt="Image"
          src={"/image01.jpeg"}
          className="h-[500px] w-full object-cover"
          height={1920}
          width={1080}
        />
        <Image
          alt="Image"
          src={"/image01.jpeg"}
          className="h-[500px] w-full object-cover"
          height={1920}
          width={1080}
        />
      </div>
    </div>
  );
};

export default Gallery;
