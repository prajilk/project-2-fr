"use client";

import ArrowRight from "../icons/arrow-right";
import Button from "../ui/button";
import Star from "../icons/star";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Section3 = () => {
  return (
    <div className="container py-20">
      <div className="space-y-10 text-white lg:grid lg:grid-cols-2">
        <div className="space-y-10">
          <h1 className="text-center text-4xl font-bold text-neon lg:text-left lg:text-5xl">
            Nos derniers passagers
          </h1>
          <p className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            Nos clients sont notre meilleure publicité. Voici ce qu&apos;ils
            disent de notre service :
          </p>
          <Button
            endIcon={<ArrowRight className="group-hover:fill-secondary" />}
            className="mx-auto border-none lg:mx-0"
          >
            Laissez votre avis
          </Button>
        </div>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, i) => (
              <CarouselItem key={i} className="md:basis-1/2">
                <UserCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Section3;

const UserCard = () => {
  return (
    <div className="flex aspect-[1/1.2] w-full flex-shrink-0 flex-col items-center justify-center gap-10 rounded-3xl bg-secondary text-white">
      <div className="space-y-4">
        <div className="mx-auto size-20 rounded-full bg-neon"></div>
        <ul className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
              <Star />
            </li>
          ))}
        </ul>
        <h4 className="text-2xl font-semibold text-neon">John Doe</h4>
      </div>
      <span>John Doe</span>
    </div>
  );
};
