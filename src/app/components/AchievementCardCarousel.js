"use client";
import { useEffect, useState } from "react";
import CardCertificate from "./CardCertificate";

const experience = [
  {
    name: "Codefest Indonesia",
    description:
      "Being the team leader for Blockchain competition and adress solution for Land Sector in Indonesia",
    imageName: "codefest",
  },
  {
    name: "Motionhack 2.0",
    description:
      "Being the team leader for Mobile Application Development competition in Telkom University",
    imageName: "motionhack",
  },

];
const AchievementCertificateCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const certificates = experience;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [certificates.length]);

  return (
    <div>
      {certificates.map((certificate, index) => (
        <div
          key={index}
          style={{ display: index === activeIndex ? "block" : "none" }}
        >
          <CardCertificate {...certificate} />
        </div>
      ))}
    </div>
  );
};

export default AchievementCertificateCarousel;
