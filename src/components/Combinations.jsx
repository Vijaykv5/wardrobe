import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "../utils/firebase";
import ReactImageZoom from "react-image-zoom";

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
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-20 mb-8 ">See New Combinations</h1>
      <button
        onClick={handleShuffle}
        className="bg-gray-900 hover:bg-gray-800  text-white font-bold py-2 px-4 rounded"
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
            <ReactImageZoom
              width={500}
              height={400}
              zoomPosition="right"
              img={selectedImageUrls[0]} // Displaying only one image for zoom
            />
          </div>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
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
