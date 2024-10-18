import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Componant/Layout/Layout"
import Home from "./Pages/LandingPage/Home"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Login from "./Pages/auth/login/login"


function App() {
  
  return (
    <>
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
