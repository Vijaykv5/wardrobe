import React, { useEffect, useState } from "react";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import LandingPage from "./ LandingPage";
import GoogleButton from "react-google-button";
import Footer from "./Footer";

const Auth = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { email, displayName } = result.user;
        setUser({ email, name: displayName });
        localStorage.setItem(
          "user",
          JSON.stringify({ email, name: displayName })
        );
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  const handleSignOut = () => {
    setUser({ email: "", name: "" });
    localStorage.removeItem("user");
  };

  return (
    <div>
      {user.email ? (
        <>
         
          <div className=" flex flex-col ">
            <Home user={user} handleSignOut={handleSignOut} />
          </div>
        </>
      ) : (
        <>
          <div className=" ">
            <LandingPage />
            <GoogleButton className="ml-[80vh] " onClick={handleSignIn} />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Auth;
