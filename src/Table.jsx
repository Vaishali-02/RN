import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import firebaseConfig from './config/firebase'; // Import firebaseConfig from firebase.js

const Table = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Initialize Firebase with firebaseConfig
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    // Reference to the PDFs folder in Firebase Storage
    const storageRef = storage.ref().child('pdfs');

    // Get the list of files in the PDFs folder
    storageRef.listAll().then(function(result) {
      const promises = result.items.map((item, index) => {
        // Retrieve file metadata
        return item.getMetadata().then(function(metadata) {
          return { serialNumber: index + 1, name: metadata.name, url: item.fullPath };
        }).catch(function(error) {
          console.log("Error getting metadata:", error);
          return null;
        });
      });

      // Wait for all promises to resolve
      Promise.all(promises).then(filesArray => {
        // Filter out any potential null values
        const validFiles = filesArray.filter(file => file !== null);
        // Set the files state with the valid filesArray
        setFiles(validFiles);
      });
    }).catch(function(error) {
      console.log("Error listing files:", error);
    });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <Wrapper>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Visit</th>
            </tr>
          </thead>

          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td>{file.serialNumber}</td>
                <td><a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .table-container {
    width: 80%;
    margin: 0 auto; /* This will center the table horizontally */
  }
  
  table {
    width: 100%; /* Ensure table takes full width of its container */
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd; /* Add borders for cells */
    padding: 8px; /* Add padding for better readability */
    text-align: left; /* Align text left within cells */
  }
`;

export default Table;
