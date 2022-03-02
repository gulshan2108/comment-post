import logo from './logo.svg';
import './App.css';
import Posts from './component/Posts';
import { Routes, Route } from "react-router-dom";
import Profile from './component/Profile';
import Comments from './component/Comments';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/comments/:postId" element={<Comments />} />
      </Routes>
    </>
  );
}

export default App;
