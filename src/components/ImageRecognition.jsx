import React, { useState } from "react";
import axios from "axios";
import CategoryNav from "./CategoryNav";

const ImageRecognition = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
          'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
        },
      });

      if (
        response.data.results &&
        response.data.results[0].entities &&
        response.data.results[0].entities[0].classes
      ) {
        const allCategories = response.data.results[0].entities[0].classes;
        
        // Get the category with highest confidence
        const highestConfidenceCategory = Object.entries(allCategories)
          .sort(([, a], [, b]) => b - a)[0];

        if (highestConfidenceCategory && highestConfidenceCategory[1] > 0.5) {
          setResult(highestConfidenceCategory);
        } else {
          setResult(null);
        }
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
    <div style={{ backgroundColor: "#FFEDFA", minHeight: "100vh", padding: "2rem" }}>
      <CategoryNav />
      <div className="container" style={{padding: "2rem"}}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg" style={{ borderRadius: "15px", border: "none" }}>
              <div className="card-body p-5">
                <h2 className="text-center mb-4">Fashion Image Recognition</h2>
                
                <div className="text-center mb-4">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="d-none"
                    id="imageInput"
                  />
                  <label
                    htmlFor="imageInput"
                    className="btn btn-primary px-4 py-2"
                    style={{ backgroundColor: "#ff66b2", border: "none" }}
                  >
                    Choose Image
                  </label>
                </div>

                {previewUrl && (
                  <div className="text-center mb-4">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "10px" }}
                    />
                  </div>
                )}

                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary px-4 py-2"
                    style={{ backgroundColor: "#ff66b2", border: "none" }}
                    disabled={!image}
                  >
                    Analyze Image
                  </button>
                </div>

                {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {error}
                  </div>
                )}

                {result && (
                  <div className="mt-4 text-center">
                    <h3>Detected Category:</h3>
                    <div className="alert alert-success" role="alert">
                      <h4 className="mb-0">
                        {result[0].charAt(0).toUpperCase() + result[0].slice(1)}
                      </h4>
                      <p className="mb-0">
                        Confidence: {(result[1] * 100).toFixed(2)}%
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageRecognition;