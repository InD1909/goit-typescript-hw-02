import s from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.wrapper}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
