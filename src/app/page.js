import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 ">
        <nav className="flex items-center justify-between p-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Glorious Satria</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-lg transition-colors hover:text-[#6F452C] hover:font-bold"
            >
              About
            </a>
            <a
              href="#"
              className="text-lg transition-colors hover:text-[#6F452C] hover:font-bold"
            >
              Experiences
            </a>
            <a
              href="#"
              className="text-lg transition-colors hover:text-[#6F452C] hover:font-bold"
            >
              Achievements
            </a>
            <a
              href="#"
              className="text-lg transition-colors hover:text-[#6F452C] hover:font-bold"
            >
              Volunteer
            </a>
            <a
              href="#"
              className="text-lg transition-colors hover:text-[#6F452C] hover:font-bold"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex justify-between">
          <div className="flex justify-left ">
            <Image
              src="/Glorious1.svg"
              alt="Glorious Satria"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-justify-end ml-40">
            <div className="text-6xl mb-16">
              <span className="font-semibold">Hi! My name is</span> <br />
              <span className="font-bold text-[#D99C7A]">Glorious</span>{" "}
              <span className="font-bold text-[#6F452C]">Satria</span>
            </div>
            <div className="text-2xl mt-4">
              <p className="mb-4">Undergraduate Software Engineering student</p>
              <p className="mb-4">
                <span className="text-[#6F452C] font-bold">1+</span> year of
                experience in software engineering
              </p>
              <p className="mb-4">
                <span className="text-[#6F452C] font-bold">1+</span> year of
                experience in software quality assurance
              </p>
            </div>
            <div className="flex justify-between mt-20 ">
              <div className="space-x-10">
                <button className="px-8 py-4 text-lg font-bold text-white bg-[#6F452C] rounded hover:bg-[#D99C7A]">
                  See More
                </button>
                <button className="px-8 py-4 text-lg font-bold text-[#6F452C] bg-white border border-[#6F452C] rounded hover: hover:border-[#D99C7A]">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
