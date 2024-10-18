import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Layout from "./Componant/Layout/Layout"
import Home from "./Pages/LandingPage/Home"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Login from "./Pages/auth/login/login"


function App() {
  
  return (
    <>
    <ToastContainer autoClose={2000} position="top-center" style={{fontSize: "0.8rem"}} />
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
        {/* {Auth} */}
            <Route path="/auth/login" element={<Login />} />
            
            <Route path="dashboard" element={<Dashboard />}>
              
            
            
            </Route>

      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
