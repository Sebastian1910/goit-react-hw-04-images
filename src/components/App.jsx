import React, { useState } from "react";
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

  const API_KEY = "43574769-6e37a5f1df9cad927843c4fc7";

  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&key=${API_KEY}`,
      );
      const data = await response.json();
      setImages(data.hits);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
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
