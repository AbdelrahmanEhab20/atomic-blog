import { usePosts } from "../context/PostContext";

function Results() {
  return <p>🚀 {usePosts.posts.length} atomic posts found</p>;
}

export default Results;
