import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <div className="px-2">
      <section className="flex h-[350px] flex-col py-2 lg:flex-row-reverse">
        <div className="relative h-full w-full bg-background lg:w-[77.4%]">
          <h1 className="maincol absolute top-1/2 -translate-y-1/2 transform text-7xl font-extrabold uppercase tracking-tight md:text-9xl">
            Reviews
          </h1>
        </div>

        <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-primary/75 via-primary to-primary py-4">
          <h1 className="border-l pl-4 italic text-background">
            Nestled along the pristine coastline, <br /> our luxury villa offers
            an unparalleled lifestyle of opulence and <br /> tranquility. The
            moment you step foot onto the grounds, <br /> you&apos;ll be
            captivated by the breathtaking panoramic views <br /> of the
            boundless sea.
          </h1>
        </div>
      </section>
      <div className="mt-2 flex space-x-4 overflow-x-auto pb-4">
        <Card className="h-fit w-full flex-shrink-0 rounded-none shadow-lg lg:w-[500px]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://a0.muscache.com/im/pictures/user/ed430036-e018-4fd9-9e6c-36e724cd5101.jpg?im_w=240"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Simin</CardTitle>
                <CardDescription>September 2023</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              The apartment is nice and big and has a balcony with ocean view.
              Everything was clean and we enjoyed our stay there.
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-1">
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
          </CardFooter>
        </Card>
        <Card className="h-fit w-full flex-shrink-0 rounded-none shadow-lg lg:w-[500px]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://a0.muscache.com/im/pictures/user/b167b221-550f-4d21-8d1c-07e05c9a9fc0.jpg?im_w=240"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Luke</CardTitle>
                <CardDescription>July 2023</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Great accommodation! Immaculate bathroom with a good living room
              and kitchen. A nice balcony overlooking the city also. Would
              highly recommend!
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-1">
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
          </CardFooter>
        </Card>
        <Card className="h-fit w-full flex-shrink-0 rounded-none shadow-lg lg:w-[500px]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://a0.muscache.com/im/pictures/user/244d9629-e9c3-498c-b1e5-6fb03c0ad5c0.jpg?im_w=240"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Triin</CardTitle>
                <CardDescription>August 2022</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              The apartment is nice and big and has a balcony with ocean view.
              Everything was clean and we enjoyed our stay there.
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-1">
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
          </CardFooter>
        </Card>
        <Card className="h-fit w-full flex-shrink-0 rounded-none shadow-lg lg:w-[500px]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://a0.muscache.com/im/users/14178655/profile_pic/1397288695/original.jpg?im_w=240"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>David</CardTitle>
                <CardDescription>September 2023</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              The apartment is nice and big and has a balcony with ocean view.
              Everything was clean and we enjoyed our stay there.
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-1">
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
          </CardFooter>
        </Card>
        <Card className="h-fit w-full flex-shrink-0 rounded-none shadow-lg lg:w-[500px]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://a0.muscache.com/im/pictures/user/09946227-e493-4f68-af28-c0240e7942ea.jpg?im_w=240"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>John</CardTitle>
                <CardDescription>August 2023</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              The apartment is nice and big and has a balcony with ocean view.
              Everything was clean and we enjoyed our stay there.
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-1">
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
          </CardFooter>
        </Card>
        <Card className="h-fit w-full flex-shrink-0 rounded-none shadow-lg lg:w-[500px]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://a0.muscache.com/im/pictures/user/User-157570460/original/44ed0276-6d92-4c21-8ca7-4fcb4f3316fd.jpeg?im_w=240"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Ana</CardTitle>
                <CardDescription>January 2023</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              The apartment is nice and big and has a balcony with ocean view.
              Everything was clean and we enjoyed our stay there.
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-center gap-1">
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
