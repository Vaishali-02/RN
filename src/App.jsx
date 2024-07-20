import React from 'react'
import Home from './Home'
import Login from './Login'
import About from './About'
import Help from './Help'

import Error from './Error'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import AdminDashboard from './AdminDashboard'

//import RequestAccess from './RequestAccess'
//import { useState } from 'react';



const App = () => {
  // () was important
  const theme ={
    colors:{
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      //btn: "rgb(98 84 243)",
      btn: "rgb(1 171 241)",
      //border: "rgba(98, 84, 243, 0.5)",
      border: "rgba(1, 171, 241, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  }

  // State to track whether access is granted
  //const [accessGranted, setAccessGranted] = useState(false);

  // Function to handle when access is granted
  //const handleAccessGranted = () => {
  //  setAccessGranted(true);
  //}

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

      

    </BrowserRouter>
    </ThemeProvider>
  
  /*<>
  <Home />
  <Login />
  <About />
  <Help />
  </>*/
  )
}

export default App