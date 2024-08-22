import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import { PostProvider } from "./context/PostContext";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    // adding context provider + object of the value for state and functions
    // 2) second step context
    // ! 2.1 post list ---> searchedPosts ,
    // * 2.2 adding Function ---> handleAddPost ,
    // ? 2.3 clearing Function ---> handleClearPosts
    // ! 2.4 Search Query ,
    // * 2.5 Set Search Query

    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
