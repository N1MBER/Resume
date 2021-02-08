import logo from './logo.svg';
import './App.css';
import MainPage from "./Components/Main/MainPage";
import React from "react";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="App">
        <Header/>
        <MainPage/>
    </div>
  );
}

export default App;
