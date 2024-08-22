import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { SearchBar } from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import axios from "axios";
import Loader from "../Loader/Loader";
import s from "./App.module.css";

const API_KEY = "GYd7KEd25K2mefM5GQPU0z00l9SazjjXutll20XOvJ4";

const BASE_URL = "https://api.unsplash.com";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BASE_URL}/search/photos`, {
          params: {
            query,
            page,
            per_page: 16,
            client_id: API_KEY,
          },
        });
        setImages((prevImage) => [...prevImage, ...response.data.results]);
      } catch (error) {
        setError("Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div className={s.div}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage((prevPage) => prevPage + 1)} />
      )}
      {showModal && (
        <ImageModal
          isOpen={showModal}
          onRequestClose={closeModal}
          image={modalImage}
        />
      )}
      <Toaster />
    </div>
  );
};

export default App;
