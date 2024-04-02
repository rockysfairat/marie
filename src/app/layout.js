import "./globals.css";
import { Header } from "@/Components/Header";
import { Nav } from "@/Components/Nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full pt-[60px] flex flex-col items-center ">
        <h1 className=" w-full px-24 uppercase font-semibold text-3xl">
          marie.does.design
        </h1>
        <hr
          style={{ color: "black", height: "1px", width: "90%" }}
          className="my-[6px]"
        />
        <Nav />

        {children}
      </body>
    </html>
  );
}
