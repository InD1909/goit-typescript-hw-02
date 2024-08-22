import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={onClick} className={s.loadBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
