import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import MainHeader from "./components/MainHeader";
import SignupPage from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";
import MyPost from "./Sections/MyPost"
import AddPost from "./Sections/AddPost";
import SinglePage from "./Pages/SinglePage";

axios.defaults.baseURL = "https://scribblesphere-api.onrender.com";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mypost" element={<MyPost />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/addpost/:id" element={<AddPost />} />
        <Route path="/singlepage/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default App;
