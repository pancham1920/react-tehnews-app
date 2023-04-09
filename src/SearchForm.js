import React from "react";
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <form className="w-11/12 max-w-screen-lg mt-20 mb-12">
      <h2 className='font-bold mb-4 text-4xl'>Search News by Topic</h2>
      <input
        type="text"
        className="w-full border-[2px] border-solid border-black-900 max-w-screen-md uppercase mt-1 ml-2 p-4 text-base tracking-widest"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
