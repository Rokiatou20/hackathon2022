import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";
import axios from 'axios';
import { Navigate } from "react-router-dom";

const videoConstraints = {
  width: 540,
  facingMode: "environment"
};

const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [ goto, setNext ] = useState(null)

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);

    axios
    .post('http://localhost:8888/api/v1/login/faceid',  { name: imageSrc })
    .then(() => setNext(true) )
    .catch(err => {
      
    });

  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  if (goto) return <Navigate to="/charger-document" />

  return (
    <>
      <Webcam
        ref={webcamRef}
        audio={true}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
      />
      <button onClick={capturePhoto}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button>
      
    </>
  );
};

export default Camera;
