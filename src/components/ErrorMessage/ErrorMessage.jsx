import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <div className={s.div}>
    <p className={s.p}>{message}</p>
  </div>
);

export default ErrorMessage;
