
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./Componant/Layout/Layout";
import Home from "./Pages/LandingPage/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/auth/login/login";
import 'react-toastify/dist/ReactToastify.css';
import QuestionPage from "./Pages/Dashboard/QustionPage/index";
import Categories from "./Pages/Dashboard/Categories/Categories";
import Signup from "./Pages/auth/Signup/Signup";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} position="top-right" style={{ fontSize: "0.8rem" }} />
      <BrowserRouter>
        <Routes>
          {/* Main Layout with Home */}
          <Route path="/" element={<Layout><Home /></Layout>} />

          {/* Auth Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />

        
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Categories />} /> 
            <Route path="question" element={<QuestionPage />} />

            {/* <Route path="dashboard" element={<Dashboard />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
