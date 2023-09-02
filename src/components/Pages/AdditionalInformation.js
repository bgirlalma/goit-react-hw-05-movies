import { Link } from "react-router-dom"

export const AdditionalInformation = ({title}) => {

    return (
        <div>
            <hr/>
            <h2>{title}</h2>
           <ul>
            <li>
                <Link to="cast" >Cast</Link>
            </li>

            <li>
                <Link to="reviews">Reviews</Link>
            </li>
           </ul>
           
            <hr/>
        </div>
    )
}