import React from "react";
import Dashboard from "./components/General/Dashboard";
import ProfilePage from "./components/General/profile";
import ProductCard from "./components/productCard/productCard";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Dashboard />
        <hr />
        <ProfilePage />
      </UserProvider>
    </>
  );
}

export default App;
