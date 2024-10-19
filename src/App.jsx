import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Layout from "./Componant/Layout/Layout"
import QuestionPage from "./Componant/QustionPage/index"
import AnswerPage from "./Componant/AnswerPage"
import Home from "./Pages/LandingPage/Home"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Login from "./Pages/auth/login/login"
import QuestionPage from '../src/Componant/QustionPage/index';
import AnswerPage from '../src/Componant/AnswerPage/index'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <ToastContainer autoClose={2000} position="top-right" style={{ fontSize: "0.8rem" }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          {/* {Auth} */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/answers" element={<AnswerPage />} />
          <Route path="dashboard" element={<Dashboard />}>



          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
