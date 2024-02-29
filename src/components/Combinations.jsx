import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "../utils/firebase";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Combinations = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImageUrls, setSelectedImageUrls] = useState([]);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    fetchImageUrls();
  }, []);

  const fetchImageUrls = async () => {
    try {
      const storageRef = ref(storage, "files");
      const items = await listAll(storageRef);

      const urls = await Promise.all(
        items.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        })
      );

      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  };

  const handleShuffle = () => {
    toast.success("New Combinations added!");
    const shuffledUrls = shuffleArray(imageUrls);
    setSelectedImageUrls(shuffledUrls.slice(0, 3)); // Displaying 3 unique images
  };

  const handleImageClick = (url) => {
    setSelectedImageUrls([url]);
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  return (
    <>
      <Link to="/">
        <button className="absolute top-2 left-2 text-white px-4 py-2 rounded-md bg-black ">
          Back
        </button>
      </Link>
      <div className="text-center">
        <div className="flex justify-center items-center">
          <p
            className="text-3xl  -mb-16 m-16 p-3 font-bold bg-blue-500 rounded-md text-white"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            See New Combinations
          </p>
        </div>

        <button
          onClick={handleShuffle}
          className="bg-blue-500 hover:bg-blue-400  text-white font-bold my-20 py-2 px-4 rounded"
        >
          Shuffle Wardrobe
        </button>
        <div className="flex flex-wrap justify-center mt-8">
          {selectedImageUrls.map((url, index) => (
            <div
              key={index}
              className="m-4 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(url)}
            >
              <img
                src={url}
                alt={`Wardrobe Image ${index}`}
                className="w-72 h-72 object-cover"
              />
            </div>
          ))}
        </div>
        {isZoomed && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-white text-xl bg-transparent border-none cursor-pointer"
                onClick={handleCloseZoom}
              >
                &times;
              </button>
              <img
                src={selectedImageUrls[0]} // Displaying only one image for zoom
                alt="Selected Image"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        )}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
  
};


// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default Combinations;
