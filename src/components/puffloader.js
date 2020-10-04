import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PuffLoader = ({ setShowLoader }) => {
  useEffect(() => {
    console.log(":In Loader usueeffect");
    setTimeout(() => setShowLoader(false), 1000);
  }, []);

  return (
    <Loader
      style={{ position: "absolute", top: "50%", left: "50%" }}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={1000} //3 secs
    />
  );
};

export default PuffLoader;
