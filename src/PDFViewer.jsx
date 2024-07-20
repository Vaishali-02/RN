//NOT IN USE
import React, { useState, useEffect } from 'react';

const PDFViewer = () => {
    const [pdfData, setPdfData] = useState('');

    useEffect(() => {
        console.log('Fetching PDF...');
        fetch('http://127.0.0.1:5000/download') // Endpoint from Flask backend
            .then(response => {
                console.log('Response received:', response);
                return response.blob();
            })
            .then(blob => {
                console.log('Blob received:', blob);
                const url = window.URL.createObjectURL(new Blob([blob]));
                setPdfData(url);
            })
            .catch(error => console.error('Error fetching PDF:', error));
    }, []);
    

    return (
        <div>
            <embed src={pdfData} type="application/pdf" width="100%" height="600px" />
        </div>
    );
};

export default PDFViewer;
