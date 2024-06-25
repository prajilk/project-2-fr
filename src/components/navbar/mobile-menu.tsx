import Close from "../icons/close";
import Person from "../icons/person";
import Button from "../ui/button";

const MobileMenu = ({
  show,
  setShowNav,
}: {
  show: boolean;
  setShowNav: (arg0: boolean) => void;
}) => {
  return (
    <div
      className={`${show ? "translate-y-0" : "-translate-y-full"} fixed inset-0 z-50 flex min-h-[100dvh] w-full flex-col items-center justify-between bg-[#000212] p-8 text-white transition-transform duration-500 lg:hidden`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="bg-primary h-16 w-20 rounded-3xl"></div>
        <button className="text-white" onClick={() => setShowNav(false)}>
          <Close />
        </button>
      </div>
      <ul className="space-y-10 text-center text-4xl font-medium">
        <li>Accueil</li>
        <li>Réservation</li>
        <li>Avis</li>
        <li>Contact</li>
      </ul>
      <Button endIcon={<Person className="group-hover:fill-secondary" />}>
        Connexion
      </Button>
    </div>
  );
};

export default MobileMenu;
