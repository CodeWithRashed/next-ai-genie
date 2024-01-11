"use client";
import Image from "next/image";
import contactBanner from "../../../assets/contact-image.png";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { sendEmail } from "@/helpers/sendEmail";
import toast from "react-hot-toast";

const Contact = () => {
  const [isPending, setIsPending] = useState(false);
  const handleContact = async (event: any) => {
    event.preventDefault();
    setIsPending(true);

    try {
      const form = event.target;
      const messageData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };

      const res = await sendEmail(messageData);
      form.reset();
      if (res.status === 200) {
        toast.success("Thanks for your message!");
      }
    } finally {
      setTimeout(() => {
        setIsPending(false);
      }, 2000);
    }
  };
  return (
    <div>
      {/* Contact Container */}
      <div className="grid lg:grid-cols-2 gap-10 rounded-main">
        {/* Text Content */}
        <form onSubmit={handleContact} className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium text-color-primary">
              Get In Touch
            </h1>
            <p>
              We are here for you!
              <span className="hidden lg:inline-block">How can we help?</span>
            </p>
          </div>

          <div className="space-y-6">
            <input
              name="name"
              required={true}
              placeholder="Enter Your Name.."
              type="text"
              className="h-10 w-full bg-grey-bg text-color-subtitle focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
            />
            <input
              name="email"
              required={true}
              placeholder="Enter Your Email.."
              type="email"
              className="h-10 w-full bg-grey-bg text-color-subtitle focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
            />
            <textarea
              name="message"
              required={true}
              placeholder="Your Message.."
              className="h-20 w-full bg-grey-bg text-color-subtitle focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
            />
          </div>
          <button
            type="submit"
            className="bg-color-primary text-white px-4 py-2 rounded-main w-52"
          >
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Image Container */}
        <div className="image-container hidden lg:block">
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
