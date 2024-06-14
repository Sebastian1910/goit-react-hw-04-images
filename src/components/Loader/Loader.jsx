import React from "react";
import { Puff } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loader.css";

const LoaderComponent = () => {
  return (
    <div className="loader">
      <Puff color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderComponent;
