export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description?: string;
}

export interface AppState {
  query: string;
  images: Image[];
  page: number;
  loading: boolean;
  error: string | null;
  showModal: boolean;
  modalImage: Image | null;
}

export interface AppProps {}
