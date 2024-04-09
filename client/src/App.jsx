import React, {lazy} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy loading pages
const Home = lazy(()=> import("./pages/Home"));
const Chat = lazy(()=> import("./pages/Chat"));
const Groups = lazy(()=> import("./pages/Groups"));
const Login = lazy(()=> import("./pages/Login"));

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    < Route path="/" element={<Home/>} />
    < Route path="/chat" element={<Chat/>} />
    < Route path="/groups" element={<Groups/>} />
    < Route path="/login" element={<Login/>} />
  </Routes>
  </BrowserRouter>
  )
};

export default App;
