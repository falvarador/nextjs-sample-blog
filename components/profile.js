import Image from "next/image";

export default function Profile() {
  return (
    <Image 
        alt="Picture of the author"
        height={144}
        src="images/profile.jpeg"
        width={144}
    />
  );
}