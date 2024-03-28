import Image from "next/image";

export default function Avatar() {
  return (
    <div className="w-[100px] h-[100px] rounded-full mx-auto">
      <Image
        src="https://avatars.githubusercontent.com/u/68690233"
        alt="Avatar"
        width={100}
        height={100}
      />
    </div>
  );
}