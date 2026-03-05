import Image from "next/image";

export const ImgContainer = ({ classes, src, alt }) => {
  return (
    <div
      className={`relative my-4 w-[80dvw] max-w-full aspect-video overflow-hidden rounded-main-radius ${classes}`}
    >
      <Image src={src} alt={alt} fill objectFit="cover" />
    </div>
  );
};
