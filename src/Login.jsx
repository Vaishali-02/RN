import React from 'react';
import { Button } from './styles/Button';
import { useAuth0 } from '@auth0/auth0-react';
import PopupWithCheckbox from './PopupWithCheckbox';
import { useState } from 'react';
import styled from "styled-components";
import PdfPopup from './PdfPopup';
import SubmitToFirebase from './SubmitToFirebase';
//import PredictionResult from './PredictionResult'; // Import PredictionResult component
//import { useEffect } from 'react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const loginAsAdmin = () => {
    loginWithRedirect({ 
      redirectUri: window.location.origin,
      domain: "dev-ujpvi8cly7n0rpr5.us.auth0.com", // Admin Auth0 domain
      clientId: "8AnXBOOcvAAy7zMC3hbiUOC0IEqDIgNK", // Admin client ID
      scope: 'read:users',
      prompt: 'login',
      connection: 'Username-Password-Authentication' // Replace with your connection name
    });
  };



  return (
    <Wrapper>
    <>
      {/*<div>Login</div>*/}
      {/*{isAuthenticated && <PredictionResult />}*/} {/* Conditionally render PredictionResult component if user is authenticated */}
      
      <li className="user-name">{isAuthenticated && <p>Logged in as... {user.name}</p>}</li>

      {isAuthenticated ? (
            <>
            <li>
              <Button
                onClick={() => logout({ returnTo: window.location.origin })} className="logout-button">
                Log Out
              </Button>
            </li>
            <li>
              <Button onClick={openPopup} className="complaint">
                ADD A COMPLAINT
              </Button>
            </li>
            <PdfPopup />
            <SubmitToFirebase />
            </>
          ) : (
            <>
            <div className="buttons">
              <div>
                <Button onClick={() => loginWithRedirect()} className="login-user"> User Login</Button>
              </div>
              <div>
              <Button onClick={loginAsAdmin} className="login-admin">Admin Login</Button>
              </div>
            </div>
            
            {/*<li></li>*/}
            {/*<div>
              <Button onClick={() => loginWithRedirect()}> User Login</Button>
              <Button>Admin Login</Button>
            </div>*/}

            {/*<li>
              <Button onClick={() => loginWithRedirect()}> User Login</Button>
            </li>*/}
            </>
          )}

          {isPopupOpen && <PopupWithCheckbox onClose={closePopup} />}
      
    </>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  
.add-complaint {
  position: absolute;
  top: 0;
  right: 0;
}

.logout-button {
  /*margin-top: 20px;  Adjust as needed */
  margin: 15px;
  position: absolute;
  top: 140px;
  right: 20px;
}
.user-name {
  position: absolute;
  top: 100px;
  right: 20px;
}
.complaint {
  margin: 20px
}

.buttons {
  top:180px;
  display: flex;
  justify-content: center; /* Aligns items horizontally */
  align-items: center; /* Aligns items vertically */
}
  
.login-user {
  margin: 20px
}

.login-admin {
  margin: 20px
}`;  
export default Login;
