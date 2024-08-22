import { usePosts } from "../context/PostContext";

function SearchPosts() {
  // ! access the context

  return (
    <input
      value={usePosts.searchQuery}
      onChange={(e) => usePosts.setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
