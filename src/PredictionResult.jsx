//NOT IN USE
import React, { useState } from 'react';
import axios from 'axios';

function PredictionResult() {
  const [prediction, setPrediction] = useState(null);

  const fetchPrediction = async () => {
    try {
      const formData = new FormData();
      formData.append('image', imageFile); // Assuming imageFile is your image file

      const response = await axios.post('/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div>
      <h1>Prediction Result</h1>
      <button onClick={fetchPrediction}>Get Prediction</button>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default PredictionResult;
