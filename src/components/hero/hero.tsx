import Image from "next/image";
import ArrowRight from "../icons/arrow-right";
import PinDrop from "../icons/pin-drop";
import Work from "../icons/work";
import Button from "../ui/button";

const Hero = () => {
  return (
    <section className="min-h-[40rem] pt-10 lg:pt-40">
      <div className="container grid h-full gap-5 lg:grid-cols-2 lg:gap-0">
        <div className="order-2 flex max-w-md flex-col justify-center space-y-7 place-self-center lg:order-1 lg:place-self-start">
          <h1 className="text-neon text-center text-4xl font-medium lg:text-left lg:text-5xl">
            Voyagez où vous voulez avec votre chauffeur privé
          </h1>
          <span className="block text-center text-base text-white lg:text-left">
            Entrez votre trajet, et en route !
          </span>
          <div className="space-y-4">
            <div className="bg-secondary flex items-center justify-between rounded-full px-7 py-4 text-white/80">
              <span className="flex items-center gap-5">
                <i className="bg-primary inline-block size-2 rounded-full"></i>
                Lieu de prise en charge
              </span>
              <Work />
            </div>
            <div className="bg-secondary flex items-center justify-between rounded-full px-7 py-4 text-white/80">
              <span className="flex items-center gap-5">
                <i className="bg-primary inline-block size-2 rounded-full"></i>
                Lieu de destination
              </span>
              <PinDrop />
            </div>
          </div>
          <Button
            className="mx-auto w-fit border-none lg:m-0"
            endIcon={<ArrowRight className="group-hover:fill-secondary" />}
          >
            En route
          </Button>
        </div>
        <div className="relative order-1 aspect-square w-full max-w-md place-self-center lg:h-full lg:place-self-end">
          <Image
            src={"/images/inside-car.jpeg"}
            alt="Hero Image, Inside of a car"
            fill
            priority
            objectFit="cover"
            className="ms-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
