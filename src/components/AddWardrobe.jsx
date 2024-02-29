import React, { useState } from "react";
import { storage } from "../utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom"; // Import Link component from React Router
import "../App.css"; // Import CSS file for styling
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
      return;
    }
    toast.success("Image Uploaded Successfully");

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          window.location.href = "/";
        });
      }
    );
  };

  const removeBackground = () => {
    if (!file) {
      alert("Please upload an image first!");
      return;
    }
    setTimeout(() => {
      toast.success("Background Removed!");
    }, 2000);

    setLoading(true);

    const apiKey = "B6c5X69duodovFz8NneALSDx"; 

    const formData = new FormData();
    formData.append("image_file", file);

    fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const newFile = new File(
          [blob],
          `background_removed_image_${Date.now().toString()}.png`,
          {
            type: "image/png",
          }
        );
        setFile(newFile);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error removing background. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="container flex justify-center items-center h-screen">
      <div className="max-w-lg mx-auto">
        <div>
          <div className="flex justify-center mb-6">
          <Link
            to="/selectItems"
            className="absolute top-2 left-2 text-white px-4 py-2 rounded-md bg-black"
          >
            Back
          </Link>
          <div
            id="image-preview"
            className={`w-1/2 p-6 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg text-center cursor-pointer ${
              file ? "" : "border-dashed border-2 border-gray-400"
            }`}
          >
            {file && !loading && (
              <img
                src={URL.createObjectURL(file)}
                className="max-h-48 rounded-lg mx-auto mb-4"
                alt="Original Image"
              />
            )}
            {loading && (
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
                Loading...
              </div>
            )}
            {!file && (
              <>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
                  No image uploaded
                </div>
                <p className="text-gray-500 mt-2">PNG,JPG Files only</p>
              </>
            )}
          </div>
          {file && !loading && (
            <div className="w-1/2 ml-6">
              <img
                src={URL.createObjectURL(file)}
                className="max-h-48 rounded-lg mx-auto mb-4"
                alt="Background Removed Image"
              />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <div>
            <input
              id="upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleChange}
            />
            <label
              htmlFor="upload"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mb-2 cursor-pointer"
            >
              Upload Image
            </label>
          </div>
          <div>
            <button
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center ml-2 mb-2 cursor-pointer"
              onClick={handleUpload}
              disabled={!file}
            >
              Upload to Wardrobe
            </button>
          </div>
          <div>
            <button
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center ml-2 mb-2 cursor-pointer"
              onClick={removeBackground}
              disabled={!file}
            >
              Remove Background
            </button>
          </div>
        </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
}

export default App;
