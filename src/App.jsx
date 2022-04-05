import { useSelector } from "react-redux";

import ModalWindow from "./_components/ModalWindow";
import NavBar from "./_components/NavBar";
import BookListing from "./_components/BookListing";

function App() {
  const isOpen = useSelector((state) => state.modalReducer.isOpen);

  return (
    <>
      {isOpen && <ModalWindow />}
      <NavBar />
      <BookListing />
    </>
  );
}

export default App;
