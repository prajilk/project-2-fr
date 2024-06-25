import Image from "next/image";
import ArrowRight from "../icons/arrow-right";
import Button from "../ui/button";

const Section2 = () => {
  return (
    <div className="container flex flex-col-reverse py-20 lg:flex-col lg:py-40">
      <div className="grid gap-5 text-white lg:grid-cols-2 lg:gap-0">
        <div className="order-2 space-y-10 lg:order-1">
          <h1 className="text-neon mx-auto max-w-lg text-center text-4xl font-bold lg:mx-0 lg:max-w-max lg:text-left lg:text-5xl">
            Parce que rien ne vaut un transport personnalisé
          </h1>
          <p className="mx-auto max-w-lg text-center lg:mx-0 lg:max-w-max lg:text-left">
            Nous offrons un service de transport sur mesure, adapté à vos
            besoins spécifiques. Profitez de l'élégance, du confort et de la
            ponctualité avec nos chauffeurs expérimentés, dédiés à rendre chaque
            trajet unique et agréable. Votre satisfaction est notre priorité,
            car rien ne vaut un transport personnalisé.
          </p>
          <Button
            endIcon={<ArrowRight className="group-hover:fill-secondary" />}
            className="mx-auto border-none lg:mx-0"
          >
            Choisissez votre chauffeur
          </Button>
        </div>
        <div className="relative order-1 mt-5 aspect-square w-full max-w-md place-self-center lg:order-2 lg:mt-0 lg:w-full lg:min-w-max lg:place-self-end">
          <Image
            src={"/images/car-with-key.jpeg"}
            alt="Car with key on hand"
            fill
            priority
            objectFit="cover"
            className="ms-auto rounded-3xl"
          />
        </div>
      </div>
      <div className="mx-auto mt-10 grid w-[80vw] gap-5 lg:mx-0 lg:ms-auto lg:grid-cols-6">
        <div className="relative mx-auto aspect-square h-full w-full max-w-md lg:col-span-4 lg:mx-0 lg:aspect-auto lg:max-w-full">
          <Image
            src={"/images/benz.jpeg"}
            alt="Benz car"
            fill
            priority
            objectFit="cover"
            className="ms-auto rounded-3xl"
          />
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md lg:col-span-2 lg:mx-0 lg:max-w-full">
          <Image
            src={"/images/tesla.jpeg"}
            alt="Tesla car"
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

export default Section2;
