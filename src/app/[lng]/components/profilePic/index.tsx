import Image from "next/image";
import profilePic from "../../../../../public/milosz.png";
import profileAvatar from "../../../../../public/avatar.png";
export default function ProfilePic() {
  return (
    <Image
      alt="Profile picture"
      width={300}
      height={300}
      src={profileAvatar}
      // style={{
      //   borderRadius: "50%",
      // }}
    />
  );
}
