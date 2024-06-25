"use client";

import Button from "../ui/button";
import Person from "../icons/person";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  const navItems = ["Accueil", "Réservation", "Avis", "Contact"];
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className="container left-1/2 z-50 flex items-center justify-between py-5 lg:fixed lg:-translate-x-1/2">
        <div className="bg-primary h-16 w-20 rounded-3xl"></div>
        <ul className="bg-secondary/70 hidden items-center justify-center gap-14 rounded-full border border-white px-12 py-2 text-lg font-bold text-white lg:flex">
          {navItems.map((item, i) => (
            <li key={i} className="cursor-pointer hover:text-white">
              {item}
            </li>
          ))}
        </ul>
        <Button
          endIcon={<Person className="group-hover:fill-secondary" />}
          className="hidden lg:flex"
        >
          Connexion
        </Button>
        <button
          className="group flex items-center gap-3 lg:hidden"
          onClick={() => setShowNav(true)}
        >
          <span className="text-lg font-bold text-white">Menu</span>
          <div className="flex w-12 flex-col items-center space-y-2">
            <div className="h-0.5 w-8 rounded-full bg-white transition-all duration-300 group-hover:w-12"></div>
            <div className="h-0.5 w-12 rounded-full bg-white transition-all duration-300 group-hover:w-8"></div>
            <div className="h-0.5 w-8 rounded-full bg-white transition-all duration-300 group-hover:w-12"></div>
          </div>
        </button>
      </nav>
      <MobileMenu show={showNav} setShowNav={setShowNav} />
    </>
  );
};

export default Navbar;
