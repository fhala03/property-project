import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const Faq = () => {
  return (
    <div className="px-2">
      <section className="flex h-[350px] flex-col py-2 lg:flex-row">
        <div className="relative h-full w-full bg-background lg:w-[77.4%]">
          <h1 className="maincol absolute top-1/2 -translate-y-1/2 transform text-7xl font-extrabold uppercase tracking-tight md:text-9xl lg:right-[-5%]">
            FAQ&apos;S
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
      <div className="flex h-fit flex-col gap-8 py-4 lg:h-[450px] lg:flex-row">
        <Image
          alt="Image"
          src={"/image04.jpeg"}
          className="w-full object-cover"
          height={1920}
          width={1080}
        />
        <div className="flex w-full flex-col gap-4">
          <Accordion defaultValue="item-1" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-base font-semibold ">
                  What&apos;s the check-in/check-out process?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-muted-foreground">
                    The check-in and check-out process can vary from one host to
                    another. Typically, hosts will provide you with instructions
                    for checking in and out in the Airbnb app or through
                    messages. It&apos;s essential to communicate your arrival
                    and departure times with your host to ensure a smooth
                    process.
                  </h1>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex items-center justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-base font-semibold ">
                  Is the neighborhood safe?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-muted-foreground">
                    The check-in and check-out process can vary from one host to
                    another. Typically, hosts will provide you with instructions
                    for checking in and out in the Airbnb app or through
                    messages. It&apos;s essential to communicate your arrival
                    and departure times with your host to ensure a smooth
                    process.
                  </h1>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-base font-semibold ">
                  Can I bring pets or additional guests?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-muted-foreground">
                    The check-in and check-out process can vary from one host to
                    another. Typically, hosts will provide you with instructions
                    for checking in and out in the Airbnb app or through
                    messages. It&apos;s essential to communicate your arrival
                    and departure times with your host to ensure a smooth
                    process.
                  </h1>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="flex items-center justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-base font-semibold ">
                  What&apos;s the check-in/check-out process?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-muted-foreground">
                    The check-in and check-out process can vary from one host to
                    another. Typically, hosts will provide you with instructions
                    for checking in and out in the Airbnb app or through
                    messages. It&apos;s essential to communicate your arrival
                    and departure times with your host to ensure a smooth
                    process.
                  </h1>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="flex items-center justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-base font-semibold ">
                  What&apos;s the check-in/check-out process?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-muted-foreground">
                    The check-in and check-out process can vary from one host to
                    another. Typically, hosts will provide you with instructions
                    for checking in and out in the Airbnb app or through
                    messages. It&apos;s essential to communicate your arrival
                    and departure times with your host to ensure a smooth
                    process.
                  </h1>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="flex items-center justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-base font-semibold ">
                  What&apos;s the check-in/check-out process?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <h1 className="text-muted-foreground">
                    The check-in and check-out process can vary from one host to
                    another. Typically, hosts will provide you with instructions
                    for checking in and out in the Airbnb app or through
                    messages. It&apos;s essential to communicate your arrival
                    and departure times with your host to ensure a smooth
                    process.
                  </h1>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
