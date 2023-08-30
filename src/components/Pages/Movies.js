
import {FormMovies, InputMovies, ButtonMovies } from './movies.styled'
const MoviesPage = () => {
    return(
        <div>
            <FormMovies>
                <InputMovies className="input" type="text" placeholder="Search film"/>

                <ButtonMovies type='submit'>search</ButtonMovies>
            </FormMovies>
        </div>
    )
}

export default MoviesPage;