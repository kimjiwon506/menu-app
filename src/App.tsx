import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from "./routes";
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNavigation from './components/BottomNavigation';
import axios from 'axios';

axios.defaults.baseURL = "";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>
      <BottomNavigation />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
