import { useState } from "react";

import { usePosts } from "../context/PostContext";
import createRandomPost from "../helpers/createRandomPost";

function Archive() {
  // ! access the context

  // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 100 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive ( {posts.length} )</h2>

      <button onClick={() => setShowArchive((show) => !show)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => usePosts.onAddPost(post)}>
                Add as new post
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Archive;
