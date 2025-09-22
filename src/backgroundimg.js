import React from "react";

function Backgroundimg() {
  const backgroundStyle = {
    backgroundImage: "url('https://example.com/your-image.jpg')",  // Replace with your image URL
    backgroundSize: "cover", // Ensures the image covers the whole container
    backgroundPosition: "center", // Centers the image
    height: "100vh"  // Ensures the container takes full height of the viewport
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{ textAlign: "center", color: "white" }}>Welcome to My React App</h1>
    </div>
  );
}

export default Backgroundimg;
