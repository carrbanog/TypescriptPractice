import React from "react";

interface CitySearchProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CitySearch = ({ input, setInput, handleSubmit }: CitySearchProps) => {
  return (
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className="search-button" type="button" onClick={handleSubmit}>
        검색
      </button>
    </form>
  );
};

export default CitySearch;
