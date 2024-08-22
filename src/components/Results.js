import { useContext } from "react";
import { PostContext } from "../context/PostContext";

function Results() {
  // ! access the context
  const { posts } = useContext(PostContext);

  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
