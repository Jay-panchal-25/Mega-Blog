import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "../src/appwrite/auth";
import { login, logout } from "./store/authSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="flex flex-col  bg-gray-800 text-gray-100" id="main">
      <Header />
      <main className="flex-grow container mx-auto px-3 py-4 h-max">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
