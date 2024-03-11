import { useState } from "react";
import Swal from 'sweetalert2';


function LanguageDetector() {
  const [text, setText] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  const handleDetectLanguage = async () => {
  // Check if input text meets minimum length requirement
  if (text.trim().length < 5) {
  Swal.fire({
    icon: 'warning',
    title: 'Minimum 5 characters required',
    showCancelButton: false, // Hide the cancel button
    confirmButtonText: 'OK',
    buttonsStyling: false,
    customClass: {
      confirmButton: 'bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg',
    },
  });
  return;
}
    
  setIsLoading(true);
  setDetectedLanguage(""); // Clear previous detected language
    try {
    const API_URL = import.meta.env.VITE_LANGUAGE_API_URL;
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setDetectedLanguage(data.language);
  } catch (error) {
    console.error("Error detecting language:", error);
    setDetectedLanguage("Error detecting language");
  } finally {
    setIsLoading(false);
  }
};

  const handleClear = () => {
    setText("");
    setDetectedLanguage("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <textarea
        className="w-full h-36 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none placeholder-gray-400 text-gray-700 resize-none"
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="text-xs text-gray-400 mb-4 mx-auto text-center">
        Tip: Input more text for greater accuracy
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className={`mt-4 bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${isLoading ? 'opacity-50' : ''}`}
          onClick={handleDetectLanguage}
          disabled={isLoading}
        >
          {isLoading ? 'Detecting...' : 'Detect Language'}
        </button>
        <button
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          onClick={handleClear}
          disabled={isLoading} // Disable the button when loading
        >
          Clear
        </button>
      </div>
      {detectedLanguage && (
        <div className="mt-4 p-4 bg-blue-100 rounded-lg">
          <p className="text-center font-semibold">Detected Language:</p>
          <p className="text-center text-lg">{detectedLanguage}</p>
        </div>
      )}
    </div>
  );
}
export default LanguageDetector;
