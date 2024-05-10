"use client";
import { useRouter } from "next/navigation";

export default function UseRouter() {
  const router = useRouter();
  console.log(router);

  return (
    <div className="my-text" onClick={() => router.push("/about")}>
      UseRouter page go to about page
    </div>
  );
}
