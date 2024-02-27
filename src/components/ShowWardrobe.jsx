import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "../utils/firebase";
import ReactImageZoom from "react-image-zoom";

const ShowWardrobe = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

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

  const handleImageClick = (url) => {
    setSelectedImageUrl(url);
  };

  const handleCloseImage = () => {
    setSelectedImageUrl(null);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-20 mb-8 ">Your Wardrobe Items</h1>
      <div className="flex flex-wrap justify-center">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="m-4 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105"
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
      {selectedImageUrl && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-xl bg-transparent border-none cursor-pointer"
              onClick={handleCloseImage}
            >
              &times;
            </button>
            <ReactImageZoom
              width={500}
              height={400}
              zoomPosition="right"
              img={selectedImageUrl}
              zoomImage={selectedImageUrl}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowWardrobe;
