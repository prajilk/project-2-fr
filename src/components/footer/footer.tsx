import { PropsWithChildren } from "react";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";

const Footer = () => {
  return (
    <footer className="bg-primary rounded-t-3xl py-28">
      <div className="container grid place-items-center lg:grid-cols-4">
        <div className="mb-10 space-y-16 lg:col-span-2 lg:mb-0 lg:place-self-start">
          <div className="h-16 w-20 rounded-3xl bg-black"></div>
          <div className="hidden space-y-8 lg:block">
            <h1 className="text-5xl font-bold">brand@mail.com</h1>
            <h2 className="text-3xl font-bold">+33 XXX XX XX XX</h2>
          </div>
        </div>
        <ul className="space-y-5 text-2xl font-medium lg:space-y-10 [&>*]:cursor-pointer">
          <ListItem>Accueil</ListItem>
          <ListItem>Réservations</ListItem>
          <ListItem>Avis</ListItem>
          <ListItem>Contact</ListItem>
        </ul>
        <div className="my-14 text-2xl font-bold lg:my-0 lg:justify-self-end">
          <span>Réseaux sociaux</span>
          <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start [&>*]:cursor-pointer">
            <Facebook />
            <Instagram />
          </div>
          <span className="mt-10 block">Mentions légales</span>
        </div>
        <div className="space-y-8 text-center lg:hidden">
          <h1 className="text-4xl font-bold">brand@mail.com</h1>
          <h2 className="text-2xl font-bold">+33 XXX XX XX XX</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const ListItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="relative mx-auto w-fit before:absolute before:bottom-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:scale-x-100 lg:mx-0">
      {children}
    </li>
  );
};
