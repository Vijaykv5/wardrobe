import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "../utils/firebase";
import ReactImageZoom from "react-image-zoom";

const ShowWardrobe = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [likedImages, setLikedImages] = useState([]);
  const [showLiked, setShowLiked] = useState(false);

  useEffect(() => {
    fetchImageUrls();
  }, []);

  useEffect(() => {
    const likedImagesFromStorage =
      JSON.parse(localStorage.getItem("likedImages")) || [];
    setLikedImages(likedImagesFromStorage);
  }, []);

  const fetchImageUrls = async () => {
    try {
      const storageRef = ref(storage, "files");
      const items = await listAll(storageRef);

      const urls = await Promise.all(
        items.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return { url, liked: false };
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

  const handleLikeImage = (index) => {
    const updatedImageUrls = [...imageUrls];
    updatedImageUrls[index].liked = !updatedImageUrls[index].liked;
    setImageUrls(updatedImageUrls);

    const likedImage = updatedImageUrls[index];
    if (likedImage.liked) {
      setLikedImages((prevLikedImages) => [...prevLikedImages, likedImage]);
    } else {
      setLikedImages((prevLikedImages) =>
        prevLikedImages.filter((img) => img.url !== likedImage.url)
      );
    }

    localStorage.setItem("likedImages", JSON.stringify(likedImages));
  };

  return (
    <div className="text-center">
      <div className="flex justify-center items-center">
        <p
          className="text-3xl  -mb-16 m-16 p-3 font-bold bg-blue-500 rounded-md text-white"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Your Wardrobe Items
        </p>
      </div>
      <div className="mt-20">
        <button
          className="text-2xl font-bold mb-4 text-blue-500"
          onClick={() => setShowLiked(!showLiked)}
        >
          {showLiked ? "Show All Items" : "Show Liked Items"}
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {showLiked
          ? likedImages.map(({ url, liked }, index) => (
              <div
                key={index}
                className="m-4 rounded-lg overflow-hidden shadow-md relative"
              >
                <div className="absolute top-2 right-2">
                  <button
                    className={`text-2xl ${
                      liked ? "text-red-500" : "text-gray-500"
                    }`}
                    onClick={() => handleLikeImage(index)}
                  >
                    &#9829;
                  </button>
                </div>
                <img
                  src={url}
                  alt={`Wardrobe Image ${index}`}
                  className="w-72 h-72 object-cover cursor-pointer"
                  onClick={() => handleImageClick(url)}
                />
              </div>
            ))
          : imageUrls.map(({ url, liked }, index) => (
              <div
                key={index}
                className="m-4 rounded-lg overflow-hidden shadow-md relative"
              >
                <div className="absolute top-2 right-2">
                  <button
                    className={`text-2xl ${
                      liked ? "text-red-500" : "text-gray-500"
                    }`}
                    onClick={() => handleLikeImage(index)}
                  >
                    &#9825;
                  </button>
                </div>
                <img
                  src={url}
                  alt={`Wardrobe Image ${index}`}
                  className="w-72 h-72 object-cover cursor-pointer"
                  onClick={() => handleImageClick(url)}
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
