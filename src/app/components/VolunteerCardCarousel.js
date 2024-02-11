"use client";
import { useEffect, useState } from "react";
import CardCertificate from "./CardCertificate";

const experience = [
  {
    name: "TVRI 1000 Tree Planting",
    description:
      "Being selected to contribute for the 1000 tree planting event by TVRI, the national television of Indonesia.",
    imageName: "tvri",
  },
  {
    name: "AIESEC Leadership Development Program",
    description:
      "Participated in AIESEC Leadership program during internship in Vietnam..",
    imageName: "aiesec",
  },
  {
    name: "Community Service PT. Angkasa",
    description:
      "Being selected to contribute for the community service at PT Angkasa.",
    imageName: "angkasa",
  },
  {
    name: "Community Service LMS Online Learning",
    description:
      "Being selected to contribute for the community service at LMS Online Learning.",
    imageName: "savoy",
  },
  {
    name : "Gerakan Sekolah Menulis Buku",
    description:"Wrote a nationalism poem for the Sekolah Menulis Buku movement.",
    imageName:"menulis"
  }

];
const VolunteerCertificateCarousel = () => {
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

export default VolunteerCertificateCarousel;
