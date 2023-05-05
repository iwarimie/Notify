import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import MainInterface from "./components/MainInterface";
import CreatePage from "./components/welcomPage/CreatePage";
import LoginPage from "./components/welcomPage/LoginPage";
// import LoginPage from "./components/welcomPage/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  if (isLoggedIn) {
    return (
      <div className="">
        <MainInterface />
      </div>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/CreatePage"
              element={<CreatePage Clickhandler={handleLogin} />}
            />
    
            <Route
              path="/"
              element={<LoginPage Clickhandler={handleLogin} />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
