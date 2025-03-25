import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const RatingStars = ({ rating }) => {
    const stars = [];
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} className="star-filled" />);
        } else if (i - 0.5 <= rating) {
            stars.push(<FaStarHalfAlt key={i} className="star-half" />);
        } else {
            stars.push(<AiOutlineStar key={i} className="star-empty" />);
        }
    }

    return <div className="stars-container">{stars}</div>;
};
export default RatingStars;