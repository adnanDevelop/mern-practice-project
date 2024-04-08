import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import { ServicePage } from "./ServicePage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import ContactPage from "./page/ContactPage";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import ErrorPage from "./page/ErrorPage";
import { LogoutPage } from "./page/LogoutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
