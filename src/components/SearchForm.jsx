import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSearchTerm } from "../utils/validation";
import { Toaster } from "react-hot-toast";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (validateSearchTerm(searchTerm)) {
      navigate(`/users?q=${searchTerm}`);
    }
  };

  return (
    
    <div className="flex justify-center items-center">
      <div className="m-20">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Enter a username"
          className="w-80 h-14 rounded bg-slate-200 text-black"
        />
        <button onClick={handleSearch} className="border rounded w-20 h-14 m-2">Search</button>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
}

export default SearchForm;
