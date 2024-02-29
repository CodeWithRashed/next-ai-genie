import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RatingComponent } from "./Ratting";

const FeedbackSection = () => {
  const userFeedbacks = [
    {
      "feedback": "Great product! Easy to use and provides excellent results.",
      "image": "https://i.ibb.co/9pMy6xh/Become-an-Instructor.png",
      "name": "John",
      "title": "CEO at Gadget360",
      "rating": 4.4
    },
    {
      "feedback": "Impressed with the simplicity and effectiveness. Highly recommended!",
      "image": "https://i.ibb.co/9pMy6xh/Become-an-Instructor.png",
      "name": "Lisa",
      "title": "Product Manager",
      "rating": 4
    },
    {
      "feedback": "Outstanding service! It exceeded my expectations. Will definitely use it again.",
      "image": "https://i.ibb.co/9pMy6xh/Become-an-Instructor.png",
      "name": "Michael",
      "title": "Tech Enthusiast",
      "rating": 5
    }
  ]
  
  return (
    <div className="mt-10">
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Reviews */}
        {
          userFeedbacks.map((feedback, index) => (
<div key={index} className=" rounded-main px-5 py-10 bg-color-primary-light">
          <div className="card-content text-color-title space-y-10">
            {/* text content */}
            <div className="space-y-8">
              <div className="review-star">
              <RatingComponent rating={feedback.rating}/>

              </div>

              <div className="review-text">
                <p className="text-sm text-left">
                 {feedback.feedback}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center gap-3">
              <Image
                src={feedback.image}
                width={48}
                height={48}
                alt={feedback.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="details">
                <h1 className="font-bold">{feedback.name}</h1>
                <p className="text-color-subtitle text-lg">{feedback.title}</p>
              </div>
            </div>
          </div>
        </div>
          ))
        }
        
      </div>
      <Link
        href="/"
        className=" mt-10 flex justify-center items-center text-color-primary gap-2"
      >
        See all testimonials <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default FeedbackSection;
