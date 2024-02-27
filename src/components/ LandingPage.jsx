import React from "react";


const LandingPage = () => {
  return (
    <div className="h-[90vh]  flex flex-col justify-center items-center bg-gray-100">
      {/* Header */}
      <div className="text-center -mt-40">
        <h1 className="text-4xl font-bold text-gray-800 mt-4">
          Welcome to My Wardrobe
        </h1>
        <p className="text-lg mt-6  text-gray-600">
          Your one-stop destination for stylish clothing
        </p>
      </div>

      {/* Image */}
      <img
        src="https://media.istockphoto.com/id/1398241461/photo/white-luxury-walk-in-closet-interior-with-light-frome-the-window-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=GO8PSuLUMLdZn6WLyCzbBYcciE-dBNv3SxTy9QcI2gw="
        alt="Wardrobe"
        className="w-full max-w-2xl rounded-lg shadow-lg "
      />
      
    </div>
  );
};

export default LandingPage;
