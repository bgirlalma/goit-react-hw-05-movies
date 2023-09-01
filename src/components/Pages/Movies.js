import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react';
import {FormMovies, InputMovies, ButtonMovies } from '../StyledPages/movies.styled'
const MoviesPage = ({KeywordSearch}) => {

    // const [query, setQuery] = useState();
    const notify = () => toast.error("This didn't work.");
    notify()
    // const searchMovies = () => {

    // }
    return(
        <div>
            <FormMovies onSubmit={(e) => {
                e.preventDefault();
                KeywordSearch(e.target.elements.value);
                e.target.reset();
            }}>
                <InputMovies className="input" type="text" name="searchbar" placeholder="Search film"/>

                <ButtonMovies className="button" type='submit' onClick={() => KeywordSearch}>search</ButtonMovies>
            </FormMovies>
            <ToastContainer />
        </div>
    )
}

export default MoviesPage;