import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import List from "./List";

function Posts() {
  // ! access the context
  const { posts } = useContext(PostContext);

  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
