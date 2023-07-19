import React from "react";
import { useContext } from "react";
import { PostContext } from "../context";
const PostContentComments = ({ email, body }) => {
  return (
    <div className="content-post-comments">
      <div className="comment-name">
        <p>
          {" "}
          <b>Name:</b> {email}{" "}
        </p>
        <p>
          <b>Body:</b> {body}
        </p>
      </div>
    </div>
  );
};

export default PostContentComments;
