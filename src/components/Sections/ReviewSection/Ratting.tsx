'use client'
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

export const RatingComponent = ({rating}:any) => {
  return (
    <div className="review-star text-xl">
      <Rating
      readonly
        initialRating={rating}
        emptySymbol={<FaRegStar className="text-color-subtitle"/>}
        fullSymbol={<FaStar className="text-orange-500"/>}
      />
    </div>
  ) as any;
};
