"use client";
import Image from "next/image";

export function ContactMe() {
  return (
    <div className="bg-biege w-full px-2 lg:px-24 py-0 lg:py-16 ">
      <h2>Contact Me</h2>
      <div className="w-full flex flex-col lg:flex-row mr-10 mt-20">
        <Image
          src="/ContactMe/06_Post.jpg"
          alt="Something"
          width={800}
          height={700}
          style={{ objectFit: "contain" }}
          className="w-full lg:w-[60%]  mr-16"
        />
        <form
          onSubmit={() => {
            console.log("test");
          }}
          className="w-full lg:w-[40%] [&>h2]:text-brown [&>h2]:mb-4 [&>h2]:pt-0 [&>p]:mb-10 [&>p]:text-xl [&>h2]:border-b-[0px] [&>p]:border-b-[0px] [&>button]:mb-5"
        >
          <h2>PHONE</h2>
          <p>+420 702 911 501</p>
          <h2>EMAIL</h2>
          <p>marie.does.design@gmail.com</p>
          <textarea
            name="message"
            className="bg-backgroundColor/25 rounded-md p-2 font-secondary w-full h-36"
            rows="17"
            cols="10"
            required
            value={"Send me a message"}
            onChange={() => {}}
          ></textarea>
          <button
            type="submit"
            className="relative border-[1px] border-dark py-2 px-4 uppercase text-nowrap flex justify-center items-center mt-10 text-lg"
            href="#"
            onClick={() => "test"}
          >
            Send message
          </button>
          <h2>SOCIALS</h2>
          <div className="social-icons flex flex-row gap-2 ">
            <Image
              src="/ContactMe/square-whatsapp.svg"
              width={30}
              height={30}
              alt="Placeholder"
              style={{ objectFit: "cover", fill: "#544541" }}
              className="fill-brown"
            />
            <Image
              src="/ContactMe/linkedin.svg"
              width={30}
              height={30}
              alt="Placeholder"
              style={{ objectFit: "cover" }}
              className=" max-h-[550px] max-w-[5600px]"
            />
            <Image
              src="ContactMe/square-instagram.svg"
              width={30}
              height={30}
              alt="Placeholder"
              style={{ objectFit: "cover" }}
              className=" max-h-[550px] max-w-[5600px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
