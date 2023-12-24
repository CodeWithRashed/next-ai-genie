import Image from "next/image";
import contactBanner from "../../../assets/contact-image.png";

const Contact = () => {
  return (
    <div>
      {/* Contact Container */}
      <div className="grid lg:grid-cols-2 gap-10 p-12 rounded-main">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium text-color-primary">
              Get In Touch
            </h1>
            <p>We are here for you! How can we help?</p>
          </div>

          <div className="space-y-6">
            <input
              placeholder="Enter Your Name.."
              type="text"
              className="h-10 w-full bg-grey-bg text-color-subtitle focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
            />
            <input
              placeholder="Enter Your Email.."
              type="email"
              className="h-10 w-full bg-grey-bg text-color-subtitle focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
            />
            <textarea
              placeholder="Your Message.."
              className="h-20 w-full bg-grey-bg text-color-subtitle focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
            />
          </div>
          <button className="bg-color-primary text-white px-4 py-2 rounded-main">
            Send Message
          </button>
        </div>

        {/* Image Container */}
        <div className="image-container">
          <Image
            src={contactBanner}
            width={500}
            height={500}
            alt="contact banner image"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
