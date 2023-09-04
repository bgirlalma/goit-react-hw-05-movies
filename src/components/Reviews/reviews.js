import { InfoReviews } from "components/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container, Wrapper, ReviewsTitle,  ReviewsDesc} from "./reviews.styled";

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState(null);

    
useEffect(() => {
async function InformationReviews() {
    try{
        const movieInfoReviews = await InfoReviews(movieId);
    if (movieInfoReviews && movieInfoReviews.results && movieInfoReviews.results.length > 0) {
        setReviews(movieInfoReviews.results);
    } else {
        Notify.failure("No reviews!");
    }
    }catch(error){
        console.error(error)
    }
    }
          
    InformationReviews()
    }, [movieId])

    if (!reviews) {
        return (
        <div className="container">
          <p>No reviews...</p>
        </div>
        );
    }
    return (
        <Container>
        {reviews.map(({ id, author, content, maxLength }) => (
            <Wrapper key={id}>
                <ReviewsTitle>{author}</ReviewsTitle>
                <ReviewsDesc>{content}</ReviewsDesc> 
            </Wrapper>
        ))}
    </Container>
    )}
export default Reviews;