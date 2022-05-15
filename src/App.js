import { Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
