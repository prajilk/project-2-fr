import Image from "next/image";
import ArrowRight from "../icons/arrow-right";
import Button from "../ui/button";

const Section1 = () => {
  return (
    <div className="container py-20">
      <div className="grid gap-5 text-white lg:grid-cols-2 lg:gap-0">
        <div className="order-2 space-y-10 lg:order-1">
          <h1 className="mx-auto max-w-lg text-center text-4xl font-bold text-neon lg:mx-0 lg:max-w-max lg:text-left lg:text-5xl">
            De nombreux véhicules Adaptés à vos besoins
          </h1>
          <p className="mx-auto max-w-lg text-center lg:mx-0 lg:max-w-max lg:text-left">
            Nous proposons une flotte diversifiée pour répondre à toutes vos
            exigences de transport, que ce soit des berlines de luxe, des SUV
            spacieux ou des minivans pour les groupes. Tous nos véhicules sont
            entretenus avec soin pour garantir votre confort et votre sécurité.
            Réservez dès aujourd&apos;hui et voyagez en toute sérénité avec nos
            chauffeurs professionnels.
          </p>
          <Button
            endIcon={<ArrowRight className="group-hover:fill-secondary" />}
            className="mx-auto border-none lg:mx-0"
          >
            Réservez un véhicule
          </Button>
        </div>
        <div className="relative order-1 aspect-square w-full max-w-md place-self-center lg:order-2 lg:place-self-end">
          <Image
            src={"/images/inside-car2.jpeg"}
            alt="Hero Image, Inside of a car"
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

export default Section1;
