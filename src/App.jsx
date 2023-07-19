import axios from "axios";
import React from "react";
// import "./styles/postStyle";
import "./index.css";
import "./styles/postStyle.css";
import { useEffect, useState } from "react";
import PostServer from "./API/PostServer";
import Post from "./Components/Post";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { useFetching } from "./hooks/useFetching";
import { PostContext } from "./context";
import SetPost from "./Components/SetPost";
import PostPage from "./pages/PostPage";
import HomePages from "./pages/HomePages";
function App() {
  const [posts, SetPosts] = useState([]);
  const [idLoadingCom, setIdLoadingCom] = useState(true);
  useEffect(() => {
    fetchPost();
  }, []);
  const [post, setPost] = useState({});
  const [postComments, setPostComments] = useState([]);

  const [fetchPost, isPostLoading, errorPost] = useFetching(async () => {
    const rok = await PostServer.getAll();
    let serverApi = rok.filter((post) => {
      return post.id <= 4;
    });
    SetPosts(serverApi);
  });

  return (
    <PostContext.Provider
      value={{
        idLoadingCom,
        setIdLoadingCom,
        posts,
        isPostLoading,
        post,
        setPost,
        postComments,
        setPostComments,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/:id" element={<PostPage />} />
          <Route exact path="/" element={<HomePages />} />
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}

export default App;
