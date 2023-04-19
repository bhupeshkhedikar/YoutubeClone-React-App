import './App.css';
import Header from './Components/Header';
import Video from "./Components/Video";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawerr from './Components/Drawerr';
function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Header />} />
        <Route path="/video" element={<Video/>} />
      </Routes>
      <Drawerr/>
    </>
  );
}

export default App;
