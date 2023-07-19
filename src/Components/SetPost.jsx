import React, { useContext } from "react";
import { PostContext } from "../context";
import Post from "./Post";
import { Link, NavLink } from "react-router-dom";
const SetPost = () => {
  const { posts, isPostLoading } = useContext(PostContext);
  return (
    <div className="nav-post-watch">
      {isPostLoading === false ? (
        posts.map((post) => (
          <NavLink key={post.id} to={`/${post.id}`}>
            {" "}
            <Post title={post.title} />{" "}
          </NavLink>
        ))
      ) : (
        <h1>LOADING...</h1>
      )}
    </div>
  );
};

export default SetPost;
