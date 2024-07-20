//NOT IN USE
import React, { useRef } from 'react';

const FileUploader = ({ onFileChange }) => {
  const fileInput = useRef(null);

  const handleFileUpload = () => {
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    onFileChange(fileList);
  };

  return (
    <div>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={handleFileChange}
      />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default FileUploader;
