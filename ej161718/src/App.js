import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Notfound from "./pages/404/Notfound";
import Header from "./component/Header";
import { useState } from "react";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
    return <Navigate to={"/"} />;
  };
  return (
    <BrowserRouter>
      <Header />
      {login ? (
        <button onClick={() => setLogin(false)}>Logout</button>
      ) : (
        <button onClick={() => handleLogin()}>Login</button>
      )}
      <Routes>
        <Route
          index
          path="/"
          element={
            <ProtectedRoute user={login}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login user={login} />} />
        <Route element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
