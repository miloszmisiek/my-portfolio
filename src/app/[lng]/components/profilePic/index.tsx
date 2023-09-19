import Image from "next/image";
import profilePic from "../../../../../public/milosz.png";
export default function ProfilePic() {
  return (
    <Image
      className="absolute top-10 left-10"
      alt="Profile picture"
      width={300}
      height={300}
      src={profilePic}
      style={{
        borderRadius: "50%",
      }}
    />
  );
}
