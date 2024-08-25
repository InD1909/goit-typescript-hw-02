import s from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
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
