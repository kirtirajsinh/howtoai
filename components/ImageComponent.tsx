import Image from "next/image";
import { urlFor } from "@/lib/sanity";

export const ImageComponent = ({ value }: { value: any }) => {
  return (
    <div className="relative w-full h-96 my-8">
      <Image
        className="object-contain"
        src={urlFor(value).url()}
        alt={value.alt || " "}
        fill
      />
      {value.caption && (
        <div className="text-center text-gray-600 mt-2">{value.caption}</div>
      )}
    </div>
  );
};
