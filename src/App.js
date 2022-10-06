// import logo from './logo.svg';
// import './App.css';
import React from "react";
import "./App.css";
import HeaderBox from "./Components/HeaderBox";
import TempDetail from "./Components/TempDetail";


function App() {
  return (
    <>
    <div className="App">
        <HeaderBox />
        <TempDetail />
    </div>
    </>
  );
}

export default App;
