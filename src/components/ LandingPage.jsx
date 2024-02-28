import React from "react";

const LandingPage = () => {
  return (
    <div className="mt-40 flex flex-col justify-center items-center ">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-5">
          Welcome to My Wardrobe
        </h1>
        <p className="text-lg mt-2 text-gray-600">
          Your one-stop destination for stylish clothing
        </p>
      </div>

      {/* Image */}
      <div className="max-w-lg w-full rounded-lg overflow-hidden shadow-lg mb-20">
        <img
          src="https://media.istockphoto.com/id/1398241461/photo/white-luxury-walk-in-closet-interior-with-light-frome-the-window-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=GO8PSuLUMLdZn6WLyCzbBYcciE-dBNv3SxTy9QcI2gw="
          alt="Wardrobe"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default LandingPage;
