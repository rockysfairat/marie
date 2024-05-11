"use client";

import { useState, useContext } from "react";

// Email JS:
import { send } from "@emailjs/browser";

// Language context:
import { AppContext } from "../app/layout";

import Image from "next/image";

export function ContactMe() {
  // Language switch:
  const { englishVersion } = useContext(AppContext);

  // Notification that msg is sent:
  const [isSent, setIsSent] = useState(false);
  const showSentNotification = (e) => {
    setIsSent(true);
  };

  // Email JS functionality:
  const sendEmail = (e) => {
    e.preventDefault();

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      { senderName, senderEmail, msg },
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ).then(
      (result) => {
        showSentNotification(result);
      },
      (error) => {
        alert(error.text);
      }
    );
  };

  // Handling the user msg:
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Grabbing user's input:
  const handleSenderName = (e) => {
    setSenderName(e.target.value);
  };
  const handleSenderEmail = (e) => {
    setSenderEmail(e.target.value);
  };
  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div
      className="bg-biege w-full px-2 lg:px-24 mt-10 sm:mt-0 md:mt-0 lg:py-16"
      id="ContactMe"
    >
      <h2>{englishVersion ? "Contact Me" : "kontakt"} </h2>
      <div className="w-full flex flex-col lg:flex-row lg:items-start mr-10 mt-20">
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
          className="w-full lg:w-[40%] [&>h2]:text-brown [&>h2]:mb-2 [&>h2]:pt-0 [&>p]:mb-5 [&>p]:text-xl [&>h2]:border-b-[0px] [&>p]:border-b-[0px] [&>button]:mb-5"
        >
          <h2>{englishVersion ? "PHONE" : "telefon"} </h2>
          <p>+420 702 911 501</p>
          <h2>EMAIL</h2>
          <p>
            <a
              href="mailto:marie@mariedoesdesign.com"
              className="mb-10 text-xl"
            >
              marie@mariedoesdesign.com
            </a>
          </p>

          <h2>{englishVersion ? "Address" : "adresa"} </h2>
          <p>Drahobejlova 52, Praha 9</p>
          <div className={"h-10" + (isSent ? " block" : " hidden")}>
            <p>
              {englishVersion
                ? "✅ Thanks for contacting us. We'll get back to you as soon as possible."
                : "✅ Děkujeme, že jste nás kontaktovali. Ozveme se vám co nejdříve."}
            </p>
          </div>

          <input
            type="text"
            name="senderName"
            value={senderName}
            placeholder={englishVersion ? "Name" : "Jméno"}
            onChange={handleSenderName}
            required
            className="bg-backgroundColor/25 rounded-md p-2 font-secondary w-full h-10 mt-4"
          ></input>

          <input
            type="email"
            name="senderEmail"
            placeholder="E-mail"
            required
            value={senderEmail}
            onChange={handleSenderEmail}
            className="bg-backgroundColor/25 rounded-md p-2 font-secondary w-full h-10 mt-4"
          ></input>

          <textarea
            name="msg"
            value={msg}
            onChange={handleMsg}
            placeholder={englishVersion ? "Send a message" : "Napište mi"}
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
            {englishVersion ? "Send message" : "napište mi"}
          </button>
          <h2>{englishVersion ? "SOCIALS" : "sociální sítě"} </h2>
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
