import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
