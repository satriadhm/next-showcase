import Image from "next/image";

const CardCertificate = ({ name, description, imageName }) => {
  return (
    <div className="max-w-2xl w-full flex flex-col lg:flex-row items-start justify-between bg-white rounded-lg shadow-lg border">
      <div className="flex flex-col mr-4 mt-8">
        <div className="text-center lg:text-left mt-5 ml-5">
          <div className="text-xl font-bold text-[#6F452C] mb-4">
            {name}
          </div>
          <div className="text-xs mb-4">
            {description.split(" ").reduce((acc, word, index) => {
              if (index % 4 === 0 && index !== 0) acc.push(<br key={index} />);
              acc.push(word);
              acc.push(" ");
              return acc;
            }, [])}
          </div>
          <button className="px-4 lg:px-6 py-2 lg:py-3 text-base lg:text-xs  text-[#6F452C] bg-white border border-[#6F452C] rounded-full hover:border-[#D99C7A]">
            View Experience
          </button>
        </div>
      </div>
      <div className="">
        <Image
          src={`/${imageName}.png`}
          alt="profile"
          objectFit="fill"
          width={1600} // Sesuaikan lebar dengan kebutuhan
          height={1600} // Sesuaikan tinggi dengan kebutuhan
          className="object-fill"
        />
      </div>
    </div>
  );
};

export default CardCertificate;
