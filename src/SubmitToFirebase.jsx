import React, { useState } from "react";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
//import firebaseConfig from "./firebase"; // assuming your firebase.js exports the firebaseConfig
import firebaseConfig from "./config/firebase"; // Importing firebaseConfig

import styled from "styled-components";

// Suppressing TypeScript warning for unused variable
// @ts-ignore
const _unused = firebaseConfig;
function SubmitToFirebase() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, `pdfs/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle progress
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        // Handle errors
        console.error("Error uploading file:", error);
      },
      () => {
        // Handle successful upload
        console.log("File uploaded successfully!");
      }
    );
  };

  return (
    <Wrapper>
    <div>
      <ul>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} 
      style={{ margin: '10px', padding: '10px 20px',  border: 'none', borderRadius: '5px'}}>Upload</button>
      {uploadProgress > 0 && (
        <div>Progress: {Math.round(uploadProgress)}%</div>
      )}
      </ul>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 20px;
`;

export default SubmitToFirebase;
