import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { InView } from "./pages";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InView />} />
      </Routes>
    </Router>
  );
}

export default App;
