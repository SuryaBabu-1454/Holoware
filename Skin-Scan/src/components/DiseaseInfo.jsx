import React from "react";

const DiseaseInfo = ({ diseaseData, handleOpenChatbox }) => {
  if (!diseaseData) return null;

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-cyan-900 mb-8">
        Disease Information
      </h1>
      <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6">
        <div className="w-full md:w-1/3 mx-auto flex items-center justify-center">
          {diseaseData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Disease sample ${index + 1}`}
              className="rounded-lg shadow-md max-w-full max-h-60 object-contain mb-4"
            />
          ))}
        </div>
        <div className="w-full md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-bold text-cyan-800 bg-cyan-100 p-2 ps-8 rounded-lg mb-2">
            <i className="fa-solid fa-face-frown pe-2 bg-red-700 p-2 rounded-full text-gray-100"></i>{" "}
            {diseaseData.name}
          </h2>
          <p className="text-gray-700 text-lg bg-gray-100 p-3 text-center rounded-lg">
            {diseaseData.description}
          </p>
          <div className="text-center py-1 px-4 border-y mt-2 hover:bg-gray-700 rounded-lg hover:text-white transition">
            <button
              onClick={handleOpenChatbox}
              className="w-full text-center text-sm font-semibold"
            >
              View more... <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseInfo;
