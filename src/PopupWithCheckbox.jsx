import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';

function PopupWithCheckbox({ onClose }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleConfirm = () => {
    if (isChecked) {
      // Redirect to Flask web app
      window.location.href = 'http://127.0.0.1:5000';
    } else {
      alert('Please check the checkbox to grant access.');
    }
  };

  return (
    <Wrapper>
    <section className="pop">
    <section className="popup">
      <div className="popup-inner">
        <h3>Grant Access to :</h3>
        <h3>
            <ul>
                <li>Camera/Gallery</li>
                <li>Location</li>
            </ul>
        </h3>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          I agree to grant access
        </label>
        <li><Button onClick={handleConfirm}>Confirm</Button></li>
      </div>
    </section>
    </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
.pop{
  margin: 60px;
  top : 250px;
}
.popup {
  
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 200px;
    width: 90%;
    max-height: 90vh;
    padding: 2rem;
    background-color: #ffffff; /* You can adjust the background color */
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* You can adjust the shadow */
    overflow-y: auto; /* Enable scrolling if content exceeds height */
}
`;

export default PopupWithCheckbox;
