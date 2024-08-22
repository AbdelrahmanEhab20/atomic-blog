import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { usePosts } from "../context/PostContext";

function Header() {
  // ! access the context
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>📖</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
