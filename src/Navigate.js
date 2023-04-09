import React from "react";
import { useGlobalContext } from "./context";

const Navigate = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();
  return (
    <div className="flex justify-center items-center mb-1 w-11/12 max-w-screen-lg">
      <button
        disabled={isLoading}
        onClick={() => handlePage("dec")}
        className="border-r-2 font-bold text-base capitalize border-gray-300 border-solid border-2 rounded bg-blue-400 text-white px-5 mx-4 py-1"
      >
        prev
      </button>
      <p className="font-bold text-lg">
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading}
        onClick={() => handlePage("inc")}
        className="border-r-2 font-bold text-base capitalize border-gray-300 border-solid border-2 rounded bg-blue-400 text-white px-5 mx-4 py-1"
      >
        next
      </button>
    </div>
  );
};

export default Navigate;
