
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './pages/Login';
import Signup from './Pages/Signup'
import Create from './Components/Create/Create';
import { AuthContextProvider } from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <AuthContextProvider>
<Routes>
<Route  path='/' element={<Home/>} />
<Route  path='/login' element={<Login/>} />
<Route  path='/signup' element={<Signup/>} />
<Route  path='/add-post' element={<Create/>} />
</Routes>

<ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
</AuthContextProvider>
</>
  )
}

export default App
