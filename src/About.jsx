import React from 'react'
import PDFViewer from './PDFViewer'
import { NavLink } from 'react-router-dom'
import { Button } from './styles/Button'
import styled from 'styled-components'
//import { useState,useEffect } from 'react'
import PdfPopup from './PdfPopup'
import SubmitToFirebase from './SubmitToFirebase'

const About = () => {
  {/*const[data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/get_data');
    const jsonData = await response.json();
    setData(jsonData);
  };*/}

  return (
  <>
    {/*
    <div>About Us</div>
    <div>HELLOOO</div>
    <div>
      <p>{data.longitude}</p>
      <p>{data.latitude}</p>
      <p>{data.prediction}</p>
    </div>
    */}

  <Wrapper classname="section">
    <h2 className="common-heading">We Can Solve</h2>
    <div className="container grid grid-two-column">
      <div className="card">
        <figure>
          <img src="./images/Gimg.jpg" alt="Garbage"></img>
        </figure>
        <div className="card-data">
          <h3>Garbage</h3>
          <p></p>
          <NavLink to="/login"><Button>Report Now</Button></NavLink>
        </div>
      </div>

      <div className="card">
        <figure>
          <img src="./images/Poimg.jpg" alt="Pothole"></img>
        </figure>
        <div className="card-data">
          <h3>Pothole</h3>
          <p></p>
          <NavLink to="/login"><Button>Report Now</Button></NavLink>
        </div>
      </div>

      {/*<div className="card">
        <figure>
          <img src="./images/Cimg.jpg" alt="Clean"></img>
        </figure>
        <div className="card-data">
          <h3>Clean</h3>
          <p></p>
          <NavLink to="/login"><Button>Appreciate</Button></NavLink>
        </div>
      </div>*/}

    </div>
  </Wrapper>
  {/*<PDFViewer />*/}
  {/*<PdfPopup />*/}
  {/*<SubmitToFirebase />*/}
  </>
  )
}

const Wrapper = styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};

.container {
  max-width: 120rem;
}

.card {
  border: 0.1rem solid rgb(170 170 170 / 40%);
  .card-data {
    padding: 0 2rem;
  }

  h3 {
    margin: 2rem 0;
    font-weight: 300;
    font-size: 2.4rem;
  }
  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(98 84 243);
    font-size: 1.4rem;

    &:hover {
      background-color: rgb(98 84 243);
      color: #fff;
    }
  }
}

figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
  }
  img {
    max-width: 90%;
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear;
  }
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid-two-column,
  .grid-three-column {
    grid-template-columns: 1fr;
  }
}

`;
export default About