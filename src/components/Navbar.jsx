import React from "react";
import { VscSignOut } from "react-icons/vsc";
import toast, { Toaster } from "react-hot-toast"; // Import the default export from 'react-hot-toast'

const Navbar = ({ user, handleSignOut }) => {
  const handleSignOutClick = () => {
    // Display a toast message when sign-out button is clicked
    toast.success("You have signed out!");
    // Call the handleSignOut function
    handleSignOut();
  };

  return (
    <div className="w-full bg-slate-800 p-10 text-2xl font-semibold text-white">
      <div className="flex justify-between">
        Welcome, {user.name}!
        <VscSignOut
          size={32}
          className="cursor-pointer"
          onClick={handleSignOutClick} // Call handleSignOutClick when sign-out button is clicked
        />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Navbar;
