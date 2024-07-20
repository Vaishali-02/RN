import React, { useState } from 'react';
import styled from 'styled-components';

const PdfPopup = () => {
  const [pdfUrl, setPdfUrl] = useState('');
  
  const fetchPdf = () => {
    fetch('http://127.0.0.1:5000/download')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      })
      .catch(error => {
        console.error('Error fetching PDF:', error);
      });
  };

  const openPopup = () => {
    const newWindow = window.open('', 'pdfPopup', 'width=600,height=500');
    newWindow.document.body.innerHTML = `
      <div style="text-align:center;">
        <embed src="${pdfUrl}" type="application/pdf" width="100%" height="100%"/>
        <button onclick="submitForm()" class="submitButton">Submit</button>
      </div>
      <script>
        function submitForm() {
          // Add your submission logic here
          alert('Form submitted!');
        }
      </script>
    `;
  };

  return (
    <Wrapper>
    <div>
      <button onClick={fetchPdf} 
      style={{ marginRight: '10px', padding: '10px 20px',  border: 'none', borderRadius: '5px', cursor: 'pointer' }} className="fetchPDF">Fetch PDF</button>
      <button onClick={openPopup} disabled={!pdfUrl} 
      style={{ marginRight: '10px', padding: '10px 20px',  border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Open PDF</button>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .fetchPDF {
    margin-left: 20px
  }
  .submitButton {
    margin-right: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default PdfPopup;
