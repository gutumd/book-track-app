import { useSelector, useDispatch } from "react-redux";

import { setIsOpen } from "../redux/actions/modalActions";
import { setSelectedBook } from "../redux/actions/bookActions";

import bookListing from "../styles/BookListing.module.css";

const BookListComponent = () => {
  const books = useSelector((state) => state.allBooks.books);
  const searchTerm = useSelector((state) => state.searchReducer.searchTerm);
  const isOpen = useSelector((state) => state.modalReducer.isOpen);

  const dispatch = useDispatch();

  const renderList = books
    .filter((book) => {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .map((book, index) => {
      const { title, authors, categories } = book;

      return (
        <div
          className={bookListing.listItem}
          key={title}
          onClick={() => {
            document.querySelector("body").style.overflow = "hidden";
            dispatch(setSelectedBook(index));
            dispatch(setIsOpen(!isOpen));
          }}
        >
          <h3>{title}</h3>

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
      );
    });

  return (
    <>{renderList.length > 0 ? renderList : <h1>No results found..</h1>}</>
  );
};

export default BookListComponent;
