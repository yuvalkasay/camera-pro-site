import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">הדף שחיפשת לא נמצא</p>
      <Link to="/" className="text-blue-500 underline">
        חזרה לדף הבית
      </Link>
    </div>
  );
};

export default NotFound;
