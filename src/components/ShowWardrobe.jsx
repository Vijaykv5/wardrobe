import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, listAll, deleteObject } from "firebase/storage";
import { storage } from "../utils/firebase";
import ReactImageZoom from "react-image-zoom";
import { Toaster, toast } from "react-hot-toast";

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
          return { url, liked: false, ref: item }; // Keep reference for deletion
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

  const handleDeleteImage = async (url, index) => {
    toast.success("Image Deleted Successfully");
    try {
      await deleteObject(imageUrls[index].ref);
      const updatedImageUrls = [...imageUrls];
      updatedImageUrls.splice(index, 1);
      setImageUrls(updatedImageUrls);
      localStorage.setItem(
        "likedImages",
        JSON.stringify(likedImages.filter((img) => img.url !== url))
      );
    } catch (error) {
      console.error("Error deleting image:", error);
    }
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
                <button
                  className="absolute top-2 left-2 text-red-500"
                  onClick={() => handleDeleteImage(url, index)}
                >
                  &#10006;
                </button>
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
                className="m-4 rounded-lg overflow-hidden shadow-md relative transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                <div className="absolute top-2 right-2 ">
                  <button
                    className={`text-2xl ${
                      liked ? "text-red-500" : "text-gray-500"
                    }`}
                    onClick={() => handleLikeImage(index)}
                  >
                    &#9825;
                  </button>
                </div>
                <button
                  className="absolute top-2 left-2 text-red-500"
                  onClick={() => handleDeleteImage(url, index)}
                >
                  &#10006;
                </button>
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
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ShowWardrobe;
