import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import "./styles.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");

  const handleSearch = (query) => {
    // Funkcja wyszukiwania
  };

  const handleImageClick = (url) => {
    setLargeImageURL(url);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </div>
  );
};

export default App;
