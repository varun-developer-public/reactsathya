import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RegistrationForms from "./Forms/forms";

createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Home />
    </Router> 
  </>
);

