import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const FeedbackSection = () => {
  return (
<div className="mt-10">

      <div className="grid lg:grid-cols-3">
        {/* Review 1 */}
        <div className=" rounded-main px-5 py-10 bg-color-primary-light">
          <div className="card-content text-color-title space-y-10">
            {/* text content */}
            <div className="space-y-8">
              <div 
              className="review-star">
                ⭐⭐⭐⭐⭐
              </div>

              <div className="review-text">
              
              <p className="text-sm text-left">
                Great product! Easy to use and provides excellent results.
              </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center gap-3">
              <Image
                src="https://i.ibb.co/sRJYQrx/profile-pic-2.png"
                width={48}
                height={48}
                alt="Avatar 1"
                className="w-12 h-12 rounded-full object-cover"
                />
              <div className="details">
                <h1 className="font-bold">John</h1>
                <p className="text-color-subtitle">CEO at Gadget360</p>
              </div>
            </div>
          </div>
        </div>
                </div>
        <Link href="/" className=" mt-10 flex justify-center items-center text-color-primary gap-2">See all testimonials <FaLongArrowAltRight /></Link>
      </div>

  );
};

export default FeedbackSection;
