import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick} className={s.div}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.img}
      />
    </div>
  );
};

export default ImageCard;
