import React from "react";
import { Link } from "react-router-dom";

const SelectItems = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <p
          className="text-3xl my-16 -mb-16 m-20 p-3 font-bold bg-blue-500 rounded-md text-white"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Select items you want to add to your wardrobe
        </p>
      </div>
      <h1 className="text-3xl mt-32 m-20 -mb-16 font-bold">Clothing </h1>
      <p className="h-4 mt-16 m-20 -mb-16 w-40 bg-black"></p>
      <div className="grid grid-cols-4 m-20 gap-4 justify-center my-20">
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">T-Shirts</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-blue-500 to-green-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Jackets</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-yellow-500 to-red-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Hoodies</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-pink-500 to-purple-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Skirts</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-green-500 to-blue-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Pants</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-red-500 to-yellow-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Shorts</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-orange-500 to-indigo-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Undergarments</h2>
          </div>
        </Link>
      </div>

      <h1 className="text-3xl my-16 -mb-16 m-20 font-bold">Footwear </h1>
      <p className="h-4 mt-16 m-20 -mb-16 w-40 bg-black"></p>
      <div className="grid grid-cols-4 m-20 gap-4 justify-center my-20">
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-yellow-500 to-green-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Shoes</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Slippers</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-indigo-500 to-pink-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Flip-flops</h2>
          </div>
        </Link>
      </div>

      <h1 className="text-3xl my-16 -mb-16 m-20 font-bold">Accessories </h1>
      <p className="h-4 mt-16 m-20 -mb-16 w-40 bg-black"></p>
      <div className="grid grid-cols-4 m-20 gap-4 justify-center my-20">
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-green-500 to-yellow-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Belts</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-red-500 to-orange-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Hats</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-purple-500 to-yellow-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Watches</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-orange-500 to-indigo-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Handbags</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-blue-500 to-green-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Backpacks</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gradient-to-br from-pink-500 to-red-500 hover:bg-gray-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Jewelry</h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SelectItems;
