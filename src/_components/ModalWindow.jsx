import { useSelector, useDispatch } from "react-redux";

import { setIsOpen } from "../redux/actions/modalActions";
import modal from "../styles/ModalWindow.module.css";

import closeBtn from "../assets/close.svg";

const ModalWindow = () => {
  const isOpen = useSelector((state) => state.modalReducer.isOpen);
  const books = useSelector((state) => state.allBooks.books);
  const bookId = useSelector((state) => state.allBooks.bookId);

  const dispatch = useDispatch();

  const noImageAvailable =
    "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6";

  return (
    <div className={modal.modalWrapper}>
      <div className={modal.modalInner}>
        <button
          onClick={() => {
            document.querySelector("body").style.overflow = "unset";
            dispatch(setIsOpen(!isOpen));
          }}
        >
          <img src={closeBtn} alt="Close" />
        </button>
        <h3>{books[bookId].title}</h3>
        <div className={modal.bookInfoWrapper}>
          <img
            src={
              !books[bookId].thumbnailURL ||
              books[bookId].thumbnailURL.includes("barlotta2.jpg")
                ? noImageAvailable
                : books[bookId].thumbnailURL
            }
            alt={books[bookId].title}
            style={{ width: "150px", height: "188px" }}
          />
          <div className={modal.bookInfo}>
            <ul>
              <p>Genres:</p>
              {books[bookId].categories.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
            <ul>
              <p>Authors:</p>
              {books[bookId].authors.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div>
          <p>
            {books[bookId].shortDescription
              ? books[bookId].shortDescription
              : books[bookId].longDescription
              ? books[bookId].longDescription.slice(0, 260) + "..."
              : "This book don't provide any description."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
