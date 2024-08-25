import { ErrorMessageProps } from "./ErrorMessage.types";
import s from "./ErrorMessage.module.css";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={s.div}>
    <p className={s.p}>{message}</p>
  </div>
);

export default ErrorMessage;
