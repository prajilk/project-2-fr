import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Values = () => {
  return (
    <>
      <div className="bg-secondary mt-20">
        <div className="container flex flex-col items-center justify-between gap-10 py-10 text-white lg:flex-row lg:gap-0">
          <h1 className="max-w-sm text-center text-4xl font-bold lg:text-left lg:text-5xl">
            Ils nous font confiance
          </h1>
          <ul className="flex flex-col gap-10 text-3xl font-bold lg:flex-row lg:gap-7">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>Brand</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container py-20 lg:py-40">
        <div className="grid items-center gap-5 text-white lg:grid-cols-4">
          <h2 className="text-center text-4xl font-bold lg:text-left lg:text-5xl">
            Nos Valerus:
          </h2>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-secondary hidden aspect-[1/1.3] w-full flex-col items-center justify-center rounded-xl lg:flex"
            >
              <b className="text-neon text-9xl font-medium">{i + 1}</b>
              <span className="text-3xl font-medium">Valerus</span>
            </div>
          ))}
        </div>
        <Carousel>
          <CarouselContent className="mt-10 lg:hidden">
            {Array.from({ length: 3 }).map((_, i) => (
              <CarouselItem key={i} className="md:basis-1/2">
                <div className="bg-secondary flex aspect-[1/1.3] w-full flex-col items-center justify-center rounded-xl text-white">
                  <b className="text-neon text-9xl font-medium">{i + 1}</b>
                  <span className="text-3xl font-medium">Valerus</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Values;
