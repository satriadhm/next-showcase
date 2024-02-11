import Image from "next/image";
import ScrollShadowHeader from "./components/header/ScrollShadowHeader";
import ExperienceCertificateCarousel from "./components/ExperienceCardCarousel";
import AchievementCardCarousel from "./components/AchievementCardCarousel";
import VolunteerCertificateCarousel from "./components/VolunteerCardCarousel";

export default function Home() {
  return (
    <>
      <ScrollShadowHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/Glorious1.svg"
              alt="Glorious Satria"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center lg:ml-40">
            <div className="text-4xl lg:text-6xl mb-8 lg:mb-16">
              <span className="font-semibold">Hi! My name is</span> <br />
              <span className="font-bold text-[#D99C7A]">Glorious</span>{" "}
              <span className="font-bold text-[#6F452C]">Satria</span>
            </div>
            <div className="text-lg lg:text-2xl mb-8">
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
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
              <div className="mb-4 lg:mb-0">
                <button className="px-8 lg:px-8 py-4 text-lg font-bold text-white bg-[#6F452C] rounded hover:bg-[#D99C7A]">
                  See More
                </button>
              </div>
              <div>
                <a href="https://wa.me/6282241389340" target="_blank">
                  <button className="px-8 lg:px-8 py-4 text-lg font-bold text-[#6F452C] bg-white border border-[#6F452C] rounded hover:border-[#D99C7A]">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-6xl mb-16 mt-20 text-center">
            <span className="font-bold text-[#D99C7A]">Show</span>{" "}
            <span className="font-bold text-[#6F452C]">cases</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl mt-20 mb-20 font-bold text-center text-[#6F452C]">
              Experience
            </h2>
            <div className="flex flex-nowrap">
              <ExperienceCertificateCarousel />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl mt-20 mb-20 font-bold text-center text-[#6F452C]">
              Achievements
            </h2>
            <div className="flex flex-nowrap">
              <AchievementCardCarousel />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl mt-20 mb-20 font-bold text-center text-[#6F452C]">
              Volunteer
            </h2>
            <div className="flex flex-nowrap">
              <VolunteerCertificateCarousel />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
