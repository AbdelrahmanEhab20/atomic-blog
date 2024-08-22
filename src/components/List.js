import { usePosts } from "../context/PostContext";

function List() {
  return (
    <ul>
      {usePosts.posts.map((post, index) => (
        <li key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
