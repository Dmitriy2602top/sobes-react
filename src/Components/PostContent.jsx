import React, { useContext } from "react";
import { PostContext } from "../context";
import PostContentComments from "./PostContentComments";

const PostContent = () => {
  const { postComments, setPostComments } = useContext(PostContext);

  const { post } = useContext(PostContext);
  const { idLoadingCom, setIdLoadingCom } = useContext(PostContext);

  return (
    <div className="content-post">
      <div className="content-post-title">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>

      <div className="comments-container">
        <h3>Comments</h3>
        {idLoadingCom == true && (postComments.length = 0) ? (
          <h5>LOADING...</h5>
        ) : (
          postComments.map((comment) => (
            <PostContentComments
              key={comment.id}
              body={comment.body}
              email={comment.email}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PostContent;
