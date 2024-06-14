import React from "react";
import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
        onClick={() => onImageClick(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
