import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;
  return (
    <div className={s.div}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={s.modal}
      >
        <p className={s.text}>{image.description || image.alt_description}</p>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.img}
        />
        <button onClick={onRequestClose} className={s.btn}>
          X
        </button>
      </Modal>
    </div>
  );
};

export default ImageModal;
