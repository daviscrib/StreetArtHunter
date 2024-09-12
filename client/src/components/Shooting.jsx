import React, { useRef } from "react";
import { Camera } from "react-camera-pro";

function Shooting() {
  const camera = useRef(null);
  const [image, setImage] = React.useState(null);

  const takePhoto = () => {
    if (camera.current) {
      try {
        const photo = camera.current.takePhoto();
        setImage(photo);
      } catch (error) {
        console.error("Failed to take photo:", error);
      }
    } else {
      console.error("Camera is not ready");
    }
  };

  return (
    <div>
      <Camera ref={camera} aspectRatio={16 / 9} />
      <button type="button" onClick={takePhoto}>
        Take Photo
      </button>
      {image && (
        <div>
          <h2>Captured Image:</h2>
          <img src={image} alt="Captured" />
        </div>
      )}
    </div>
  );
}

export default Shooting;
