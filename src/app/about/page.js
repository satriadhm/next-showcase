'use client';
import Image from "next/image";
import ScrollShadowHeader from "../components/header/ScrollShadowHeader";

export default function About() {
  return (
    <>
      <ScrollShadowHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col lg:flex-row justify-between w-588 h-359 ">
          <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/Glorious2.svg"
              alt="Glorious Satria"
              width={800}
              height={800}
            />
          </div>
          <div className="flex flex-col justify-center lg:ml-20">
            <div className="text-2xl lg:text-6xl mb-8 lg:mb-8 ">
              <span className="font-semibold">About Me</span> <br />
            </div>
            <div className="text-lg lg:text-ms mb-8">
              <p className="text-justify">
                A dedicated software engineer with proven expertise in 
                delivering high quality software. Ex-Software Engineer intern at
                FPT Software Ltd. Vietnam. Ex-Software Quality Assurance
                Engineer at Dinotis.com Indonesia.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
              <div className="mb-4 lg:mb-0">
                <button
                  className="px-8 lg:px-8 py-4 text-lg font-bold text-white bg-[#6F452C] rounded hover:bg-[#D99C7A]"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf"; // Replace with the actual path to your resume file
                    link.download = "resume.pdf"; // Replace with the desired filename for the downloaded file
                    link.click();
                  }}
                >
                  Download Resume
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
