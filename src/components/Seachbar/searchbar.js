import { useCallback, useEffect, useState } from "react";
import { FormMovies, InputMovies, ButtonMovies } from "./searchbar.styled";
import { useSearchParams } from "react-router-dom";
import toast from 'react-hot-toast';
import { KeywordSearch } from "components/Api";
import { MoviesList } from "components/MovieList/movieList";

const Searchbar = () => {
    const [searchQuery, setQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);

    const searchQueryMovies = useCallback(async (query) => {
        if(!query || !query.trim()) {
            toast.error("Введіть будь-ласка назву фільму для пошуку!");
            return
        }
        
    try{
        const moviesQuery = await KeywordSearch(query);
        setSearchResults(moviesQuery);
    }catch(error){
        console.error(error);
    }
    }, [])

   useEffect(() => {
  const queryParams = searchParams.get("query");
  if(queryParams){
    setQuery(queryParams)
  }
   }, [searchParams]);

 const Dispatch = (e) => {
  e.preventDefault();
  setSearchParams({ query: searchQuery });
  searchQueryMovies(searchQuery);
  e.target.reset();
};

return (
    <div>
          <FormMovies  onSubmit={Dispatch}>
        <InputMovies
          type="text"
          name="query"
          placeholder="Search movies..."
          autoComplete="off"
          value={searchQuery || ""}
          onChange={(e) => setQuery(e.target.value)}></InputMovies>
        <ButtonMovies type="submit">Search</ButtonMovies>
      </FormMovies>
      
      {searchResults && searchResults.length > 0 && (
        <div>
      {console.log(searchResults)}
        <MoviesList movies={searchResults}/>
        </div>
        
      )}
    </div>
)
}

export default Searchbar;