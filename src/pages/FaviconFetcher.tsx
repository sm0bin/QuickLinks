import { useState } from "react";

function FaviconFetcher() {
  const [url, setUrl] = useState(""); // User input URL
  const [favicon, setFavicon] = useState(""); // Favicon URL

  // Function to extract the base URL and construct a favicon URL
  const getFaviconUrl = (siteUrl) => {
    try {
      const urlObj = new URL(siteUrl);
      return `${urlObj.origin}/favicon.ico`; // Default location for most websites
    } catch (error) {
      console.error("Invalid URL", error);
      return "";
    }
  };

  // Handle input change and set the favicon
  const handleInputChange = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);
    const faviconUrl = getFaviconUrl(inputUrl);
    setFavicon(faviconUrl); // Update favicon URL
  };

  return (
    <div>
      <h3>Enter a URL to get its Favicon</h3>
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={handleInputChange}
        style={{ width: "300px" }}
      />
      {/* {favicon && ( */}
      <div>
        <p>Favicon:</p>
        <img
          src="https://www.google.com/favicon.ico"
          alt="Favicon"
          width="32"
          height="32"
        />
      </div>
      {/* )} */}
    </div>
  );
}

export default FaviconFetcher;
