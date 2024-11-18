import { usePosts } from "../context/PostContext";
import Test from "../Test";

function List() {
  // ! access the context
  const { posts } = usePosts();
  return (
    <>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {/* <Test /> */}
    </>
  );
}

export default List;
