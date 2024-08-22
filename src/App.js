import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import createRandomPost from "./helpers/createRandomPost";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import { PostContext } from "./context/PostContext";

function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

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

    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

        <Header />

        <Main />

        <Archive />

        <Footer />
      </section>
    </PostContext.Provider>
  );
}

export default App;
