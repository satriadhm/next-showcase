"use client";
import { useEffect, useState } from "react";
import CardCertificate from "./CardCertificate";

const experience = [
  {
    name: "FPT Software Ltd",
    description:
      "Built the server for ‘MyFPT’ mobile application. Improved the security and maintainability",
    imageName: "fpt",
  },
  {
    name: "Kamar Pelajar",
    description:
      "Building KamarPelajar.id, website for international students accommodation across the globe.",
    imageName: "kamarpelajar",
  },
  {
    name: "Dinotis.com indonesia",
    description:
      "Ensuring the product, process, and project quality from Dinotis.com Indonesia.",
    imageName: "dinotis",
  },
];
const ExperienceCertificateCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const certificates = experience;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 5000); 

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

export default ExperienceCertificateCarousel;
