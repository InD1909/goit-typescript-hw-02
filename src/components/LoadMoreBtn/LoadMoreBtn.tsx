import s from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={onClick} className={s.loadBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
