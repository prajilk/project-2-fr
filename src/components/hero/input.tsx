"use client";

import { addresses } from "@/lib/utils/data";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

// Defining the props type for the Input component
type InputProps = {
  placeholder: string;
  icon: JSX.Element;
  route: string;
  setRoute: Dispatch<SetStateAction<string>>;
};

const Input = ({ placeholder, icon, route, setRoute }: InputProps) => {
  // State to track whether the dropdown menu is open or not
  const [open, setOpen] = useState(false);
  // State to store the filtered addresses
  const [filterAddresses, setFilterAddresses] = useState(addresses);

  // Function to handle input changes and filter addresses
  function handleFilterAddress(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    // Update the route value with the input value
    setRoute(value);
    // Filter addresses based on the input value
    setFilterAddresses(() =>
      addresses.filter((address) =>
        address.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  }

  // Function to set the route value and close the dropdown menu
  function handleSetRoute(address: string) {
    setRoute(address);
    setOpen(false);
  }

  return (
    <div
      className="relative flex items-center rounded-full bg-secondary px-5 text-white/80 md:px-7"
      tabIndex={0}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <div className="flex flex-1 items-center gap-3 md:gap-5">
        <i className="inline-block size-2 rounded-full bg-primary"></i>
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilterAddress}
          value={route}
          className="w-full flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-sm md:text-base md:placeholder:text-base"
        />
      </div>
      {icon}
      <div
        // Dropdown menu container with styles and conditional visibility
        className={`absolute left-0 top-full z-[9999] mt-2 w-full justify-center rounded-2xl border border-white/10 bg-secondary shadow-lg ${
          !open && "hidden"
        }`}
      >
        <ul className="py-3">
          {filterAddresses.length === 0 ? (
            // No results message
            <div className="flex h-20 items-center justify-center text-white/50">
              No result
            </div>
          ) : (
            // List of filtered addresses
            filterAddresses.map((address, i) => (
              <li
                key={i}
                className="w-full cursor-pointer px-4 py-2.5 text-sm hover:bg-black/50 md:text-base"
                onClick={() => handleSetRoute(address)}
              >
                {address}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Input;
