import Image from "next/image";
import myImages from "../component/myimage.png";

export default function LearnImage() {
  return (
    <>
      <Image src={myImages} width={500} height={500} alt="hello images"/>
    </>
  );
}
