import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Splash from "./components/SplashScreen";
import Login from "./components/Login";
import LandingPage from "./container/LandingPage";
import Shopping from "./components/Shopping";
import Spinner from "./components/Spinner";
function App() {
  return (
    <div className="h-100" style={{ height: "100%" }}>
      <div
        style={{ backgroundColor: "#242424" }}
        className="row mx-0 position-relative h-100"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Splash />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/shopping" exact element={<Shopping />} />
            <Route path="reward" element={<Spinner />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
