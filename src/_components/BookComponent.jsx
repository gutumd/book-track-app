import { useSelector, useDispatch } from "react-redux";

import { setIsOpen } from "../redux/actions/modalActions";
import { setSelectedBook } from "../redux/actions/bookActions";

import bookListing from "../styles/BookListing.module.css";

const BookComponent = () => {
  const books = useSelector((state) => state.allBooks.books);
  const searchTerm = useSelector((state) => state.searchReducer.searchTerm);
  const isOpen = useSelector((state) => state.modalReducer.isOpen);

  const dispatch = useDispatch();

  const renderList = books
    .filter((book) => {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .map((book, index) => {
      const { title, thumbnailURL, authors, categories } = book;
      const noImageAvailable =
        "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6";
      let image;
      if (!thumbnailURL || thumbnailURL.includes("barlotta2.jpg")) {
        image = noImageAvailable;
      } else {
        image = thumbnailURL;
      }

      return (
        <div
          className={bookListing.booksItem}
          key={title}
          onClick={() => {
            document.querySelector("body").style.overflow = "hidden";
            dispatch(setSelectedBook(index));
            dispatch(setIsOpen(!isOpen));
          }}
        >
          <h3>{title}</h3>
          <div className={bookListing.booksItemContent}>
            <div>
              <img src={image} alt={title} />
            </div>

            <div>
              <ul>
                {categories.map((genre) => {
                  return <li key={genre}>{genre}</li>;
                })}
              </ul>
              <ul>
                {authors.map((author) => {
                  return <li key={author}>{author}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    });

  return (
    <>{renderList.length > 0 ? renderList : <h1>No results found..</h1>}</>
  );
};

export default BookComponent;
