import {FormMovies, InputMovies, ButtonMovies } from './movies.styled'
export const MoviesInput = () => {
    return (
        <div>
            <FormMovies>
                <InputMovies/>

                <ButtonMovies type='submit'>search</ButtonMovies>
            </FormMovies>
        </div>
    )
}