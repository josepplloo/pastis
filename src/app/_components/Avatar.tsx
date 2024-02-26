import Image from "next/image";

export const Avatar = ({ id, alt, styles }: { id: string; alt: string, styles: Record<string, string> }) => {
  return (
    <Image
      src={`/_images/${id}`}
      alt={alt}
      width="46"
      height="48"
      style={styles}
      className="hover:animate-bounce transform-gpu"
    />
  );
};