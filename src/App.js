import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { InView, Parallax } from "./pages";
import "./App.css";
import Lesson1 from "./pages/WrongAkram/Lesson1";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Lesson1 />} />
      </Routes>
    </Router>
  );
}

export default App;
