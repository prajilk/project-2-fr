"use client";

import { useState } from "react";
import Input from "../hero/input";
import Work from "../icons/work";
import PinDrop from "../icons/pin-drop";

const RouteForm = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <form className="space-y-4">
      <Input
        placeholder="Lieu de prise en charge"
        icon={<Work />}
        route={pickUp}
        setRoute={setPickUp}
      />
      <Input
        placeholder="Lieu de destination"
        icon={<PinDrop />}
        route={destination}
        setRoute={setDestination}
      />
    </form>
  );
};

export default RouteForm;
