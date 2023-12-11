import Image from "next/image";

export default function CardExperience({ experience }: any) {
  const { image, title, description, from, to } = experience;
  return (
    <div className="max-w-sm rounded overflow-hidden bg-gray-100 text-center mt-6">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="mx-auto rounded-full mt-3"
      />
      <div className="px-6">
        <div className="font-bold text-xl=">{title}</div>
        <p className="text-gray-700 text-base mt-1 mb-2">{description}</p>
      </div>
      <div className="pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {from} - {to}
        </span>
      </div>
    </div>
  );
}
