//NOT IN USE
import React, { useState } from 'react';

const RequestAccess = ({ onSuccess }) => {
  const [accessGranted, setAccessGranted] = useState(false);

  const handlePermissionRequest = async () => {
    try {
      const permission = await navigator.permissions.query({
        name: 'camera',
      });

      if (permission.state === 'granted') {
        setAccessGranted(true);
      } else if (permission.state === 'prompt') {
        const result = await navigator.permissions.request({
          name: 'camera',
        });
        if (result.state === 'granted') {
          setAccessGranted(true);
          onSuccess();
        } else {
          setAccessGranted(false);
        }
      } else {
        setAccessGranted(false);
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
      setAccessGranted(false);
    }
  };

  return (
    <div>
      {!accessGranted && (
        <button onClick={handlePermissionRequest}>Request Access</button>
      )}
    </div>
  );
};

export default RequestAccess;
