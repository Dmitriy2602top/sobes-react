import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SetPost from "../Components/SetPost";
import { PostContext } from "../context";
import PostContent from "../Components/PostContent";
const PostPage = () => {
  const params = useParams();
  // const [fetchPostId, isLoading, errorPost] = useFetching(async (id) => {
  //   const response = await PostServer.getItemPost(id);
  //   setPost(response.data);
  // });
  const { post, setPost } = useContext(PostContext);
  const { postComments, setPostComments } = useContext(PostContext);
  const [idLoading, setIdLoading] = useState(false);
  const { idLoadingCom, setIdLoadingCom } = useContext(PostContext);

  const [error, setError] = useState("");
  async function fetchPostId(id) {
    try {
      setIdLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + id
      );
      return setPost(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIdLoading(false);
    }
  }
  async function fetchPostCommentId(id) {
    try {
      setIdLoadingCom(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/` + "comments"
      );
      return setPostComments(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIdLoadingCom(false);
    }
  }
  useEffect(() => {
    fetchPostId(params.id);
  }, [params.id]);

  useEffect(() => {
    fetchPostCommentId(params.id);
  }, [params.id]);

  return (
    <div className="post-page">
      <div className="post-container-page flex">
        <div className="nav-post">
          <SetPost />
        </div>
        <div className="post-aktive">
          {idLoading ? <h3>LOADING...</h3> : <PostContent />}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
