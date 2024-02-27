import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link if you're using it

const SelectItems = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <p
          className="text-3xl my-16 -mb-16 m-20 p-3 font-bold bg-black rounded-md text-white"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Select items you want to add to your wardrobe
        </p>
      </div>
      <h1 className="text-3xl mt-32  m-20 -mb-16 font-bold">Clothing </h1>
      <p className="h-4 mt-16 m-20  -mb-16 w-40 bg-black"></p>
      <div className="grid grid-cols-4 m-20 gap-4 justify-center my-20">
        {/* Item 1 */}
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">T-Shirts</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Jackets</h2>
          </div>
        </Link>
        {/* Item 2 */}
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Hoodies</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Skirts</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Pants</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Shorts</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800 h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Undergarments</h2>
          </div>
        </Link>

        {/* Add more items here */}
        {/* For example:
          <div className="bg-gray-900 hover:bg-slate-800 p-5 h-56 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-3xl font-semibold text-white">Item 3</h2>
            <p className="text-gray-700">Card Content</p>
          </div>
          Add similar divs for other items
      */}
      </div>

      {/* next */}
      <h1 className="text-3xl my-16 -mb-16 m-20 font-bold">Footwear </h1>
      <p className="h-4 mt-16 m-20  -mb-16 w-40 bg-black"></p>
      <div className="grid grid-cols-4 m-20 gap-4 justify-center my-20">
        {/* Item 1 */}
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Shoes</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Slippers</h2>
          </div>
        </Link>
        {/* Item 2 */}
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Flip-flops</h2>
          </div>
        </Link>
      </div>
      {/* next */}
      <h1 className="text-3xl my-16 -mb-16 m-20 font-bold">Accessories </h1>
      <p className="h-4 mt-16 m-20  -mb-16 w-40 bg-black"></p>
      <div className="grid grid-cols-4 m-20 gap-4 justify-center my-20">
        {/* Item 1 */}
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Belts</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Hats</h2>
          </div>
        </Link>
        {/* Item 2 */}
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Watches</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Handbags</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Backpacks</h2>
          </div>
        </Link>
        <Link to="/addwardrobe">
          <div className="bg-gray-900 hover:bg-slate-800  h-32 flex flex-col justify-center shadow-md items-center rounded-lg">
            <h2 className="text-xl font-semibold text-white">Jewelry</h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SelectItems;
