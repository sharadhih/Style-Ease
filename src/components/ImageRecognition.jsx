
import React, { useState } from "react";
import axios from "axios";

const ImageRecognition = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      setError("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
        const response = await axios.post('https://fashion4.p.rapidapi.com/v1/results', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'X-RapidAPI-Key': '5321039181msh039a416f8ef2404p116722jsncc14b8e64dce',
            'X-RapidAPI-Host': 'fashion4.p.rapidapi.com',
          },
        }
      );

      console.log("API Response:", response.data); // Debugging step

      if (
        response.data.results &&
        response.data.results[0].entities &&
        response.data.results[0].entities[0].classes
      ) {
        const allCategories = response.data.results[0].entities[0].classes;

        // Filter categories with confidence > 50% (0.5 in decimal)
        const filteredCategories = Object.entries(allCategories).filter(
          ([, confidence]) => confidence > 0.5
        );

        setResult(filteredCategories);
      } else {
        setResult(null);
      }

      setError("");
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error uploading image. Please try again.");
    }
  };

  return (
    <div>
      <h2>Upload an Image for Fashion Recognition</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Upload</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && result.length > 0 ? (
        <div>
          <h3>Detected Fashion Items :</h3>
          <ul>
            {result.map(([item, confidence], index) => (
              <li key={index}>
                {item} - {(confidence * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No high-confidence categories detected.</p>
      )}
    </div>
  );
};

export default ImageRecognition;