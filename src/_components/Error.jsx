import errorImg from "../assets/error.png";
import error from "../styles/Error.module.css";

const Error = () => {
  return (
    <img
      src={errorImg}
      alt="Oops, something went wrong.."
      className={error.error}
    />
  );
};

export default Error;
