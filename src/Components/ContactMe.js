"use client";

import { useState, useContext } from "react";

// Email JS:
import { send } from "@emailjs/browser";

import Image from "next/image";

export function ContactMe() {
  // Email JS functionality:

  const sendEmail = (e) => {
    e.preventDefault();

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      { msg },
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ).then(
      (result) => {
        alert(result.text);
      },
      (error) => {
        alert(error.text);
      }
    );
  };

  // Handling the user msg:

  const [msg, setMsg] = useState("");

  // Grabbing user's input:
  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div
      className="bg-biege w-full px-2 lg:px-24 mt-10 sm:mt-0 md:mt-0 lg:py-16"
      id="ContactMe"
    >
      <h2>Contact Me</h2>
      <div className="w-full flex flex-col lg:flex-row mr-10 mt-20">
        <Image
          src="/ContactMe/06_Post.jpg"
          alt="Something"
          width={800}
          height={750}
          style={{ objectFit: "contain" }}
          className="w-full lg:w-[60%]  mr-16"
        />
        <form
          onSubmit={sendEmail}
          className="w-full lg:w-[40%] [&>h2]:text-brown [&>h2]:mb-2 [&>h2]:pt-0 [&>p]:mb-2 [&>p]:text-xl [&>h2]:border-b-[0px] [&>p]:border-b-[0px] [&>button]:mb-5"
        >
          <h2 className="first:pt-5">PHONE</h2>
          <p>+420 702 911 501</p>
          <h2>Address</h2>
          <p>Drahobejlova 52, Praha 9</p>
          <h2>EMAIL</h2>
          <a href="mailto:marie@mariedoesdesign.com" className="mb-10 text-xl">
            marie@mariedoesdesign.com
          </a>
          <textarea
            name="msg"
            value={msg}
            onChange={handleMsg}
            placeholder="Send a message"
            className="bg-backgroundColor/25 rounded-md p-2 font-secondary w-full h-36 mt-4"
            rows="17"
            cols="10"
            required
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="relative border-[1px] border-dark py-2 px-4 uppercase text-nowrap flex justify-center items-center mt-10 text-lg"
            href="#"
          >
            Send message
          </button>
          <h2>SOCIALS</h2>
          <div className="social-icons flex flex-row gap-2 pb-5">
            {" "}
            <a href="https://api.whatsapp.com/send?phone=420702911501">
              <Image
                src="/ContactMe/square-whatsapp.svg"
                width={30}
                height={30}
                alt="Placeholder"
                style={{ objectFit: "cover", fill: "#544541" }}
                className="fill-brown"
              />
            </a>
            <a href="https://www.linkedin.com/in/mariiafiedosieieva/">
              <Image
                src="/ContactMe/linkedin.svg"
                width={30}
                height={30}
                alt="Placeholder"
                style={{ objectFit: "cover" }}
                className=" max-h-[550px] max-w-[5600px]"
              />
            </a>
            <a href="https://www.instagram.com/marie.does.design">
              <Image
                src="/ContactMe/square-instagram.svg"
                width={30}
                height={30}
                alt="Placeholder"
                style={{ objectFit: "cover" }}
                className=" max-h-[550px] max-w-[5600px]"
              />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
