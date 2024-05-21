import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Analytics />
    </>
  );
}

export default App;
