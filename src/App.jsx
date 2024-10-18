import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./Componant/Layout/Layout";
import Home from "./Pages/LandingPage/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/auth/login/login";
import 'react-toastify/dist/ReactToastify.css';
import QuestionPage from "./Pages/Dashboard/QustionPage/index";

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

          {/* Dashboard Layout with nested routes */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<QuestionPage />} /> {/* Default child route for dashboard */}
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
