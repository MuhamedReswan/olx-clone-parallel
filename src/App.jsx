import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./pages/Login";
import Signup from "./Pages/Signup";
import Create from "./Components/Create/Create";
import { AuthContextProvider } from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./Components/ProtectRoute/ProtectedRoute";
import SingleProduct from "./Pages/SingleProduct";
import PostContextProvider from "./context/PostContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <PostContextProvider>
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
