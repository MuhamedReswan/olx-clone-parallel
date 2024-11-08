import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./Components/ProtectRoute/ProtectedRoute";
import PostContextProvider from "./context/PostContext";
import Loading from "./Components/Loading/Loading";

// Lazy load components
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./Pages/Signup"));
const Create = lazy(() => import("./pages/Create"));
const SingleProduct = lazy(() => import("./Pages/SingleProduct"));

function App() {
  return (
    <>
      <AuthContextProvider>
        <PostContextProvider>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/single-product" element={<SingleProduct />} />
              <Route
                path="/add-post"
                element={
                  <ProtectedRoute>
                    <Create />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
          />
        </PostContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
