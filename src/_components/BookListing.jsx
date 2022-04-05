import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import BookComponent from "./BookComponent";
import BookListComponent from "./BookListComponent";
import SearchBar from "./SearchBar";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";

import { setBooks } from "../redux/actions/bookActions";

import bookListing from "../styles/BookListing.module.css";

const BookListing = () => {
  const view = useSelector((state) => state.viewReducer.view);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  const fetchBooks = async () => {
    const response = await axios
      .get("https://riabooksapi.azurewebsites.net/books")
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
        console.log(`Error - ${err}`);
      });
    dispatch(setBooks(response.data));
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <Error />;
  } else if (!isLoaded) {
    return (
      <div style={{ paddingTop: "75px" }}>
        <LoadingSpinner />
      </div>
    );
  } else {
    return (
      <>
        <SearchBar />
        {view === "Grid" ? (
          <div className={bookListing.books}>
            <BookComponent />
          </div>
        ) : (
          <div className={bookListing.listView}>
            <BookListComponent />
          </div>
        )}
      </>
    );
  }
};

export default BookListing;
