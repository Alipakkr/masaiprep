import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h4>Tags:</h4>
      <ul>
        {post.tags.map((tag, idx) => (
          <li key={idx}>#{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
