import Image from "next/image";
import ArrowRight from "../icons/arrow-right";
import Button from "../ui/button";

const Section4 = () => {
  return (
    <div className="bg-secondary py-40">
      <div className="container grid items-center gap-10 text-white lg:grid-cols-3 lg:gap-0">
        <div className="order-2 space-y-10 lg:order-1 lg:col-span-2">
          <h1 className="text-neon text-center text-4xl font-bold lg:text-left lg:text-5xl">
            Une Question ?<br /> Besoin d&apos;un renseignement ?
          </h1>
          <Button
            endIcon={<ArrowRight className="group-hover:fill-secondary" />}
            className="mx-auto border-none lg:mx-0"
            color="secondary"
          >
            Accédez à notre FAQ
          </Button>
        </div>
        <div className="relative order-1 aspect-square w-full max-w-md place-self-center lg:order-2 lg:place-self-end">
          <Image
            src={"/images/iphone.jpeg"}
            alt="Iphone"
            fill
            priority
            objectFit="cover"
            className="ms-auto rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
