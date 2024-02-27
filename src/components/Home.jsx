import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ConfettiExplosion from "react-confetti-explosion";
import { Link } from "react-router-dom";

const Home = ({ user, handleSignOut }) => {
  const [isExploding, setIsExploding] = useState(false);

  const handleExplode = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 5000);
  };

  useEffect(() => {
    handleExplode();
  }, []);

  return (
    <>
      <div>
        {isExploding && (
          <ConfettiExplosion
            blast
            duration={7000}
            maxBlastSize={20000}
            speed={5}
          />
        )}
      </div>
      <div>
        <Navbar user={user} handleSignOut={handleSignOut} />
        <div>
          <div className="flex justify-center my-40 -mb-36 items-center">
            <h1 className="font-bold text-3xl font-serif"> Customize your wardrobe</h1>
          </div>
          <div className="flex justify-center my-48 items-center ">
            <Link to="/selectItems">
              <div className="bg-gray-900  hover:bg-slate-800 p-5 w-96 h-56 m-2 flex flex-col justify-center shadow-md items-center rounded-lg">
                <h2 className="text-3xl font-semibold text-white">Add Items</h2>
                <p className="text-gray-700">Make a collection in wardrobe</p>
              </div>
            </Link>
            <Link to="/showwardrobe">
              <div className="bg-gray-900  hover:bg-slate-800 w-96 h-56  p-5 m-2 flex flex-col justify-center shadow-md items-center rounded-lg">
                <h2
                  className="text-3xl font-semibold text-white"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Show Wardrobe
                </h2>
                <p className="text-gray-700 ">
                  Display all collections in my wardrobe
                </p>
              </div>
            </Link>
            <Link to="/combinations">
              <div className="bg-gray-900  hover:bg-slate-800 w-96 h-56  p-5 m-2 flex flex-col justify-center shadow-md items-center rounded-lg">
                <h2 className="text-3xl font-semibold text-white">
                  Shuffle items
                </h2>
                <p className="text-gray-700 ">
                 Get combination of your outfits
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
