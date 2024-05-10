import Image from "next/image";
import LearnLink from "./component/LearnLink";
import LearnImage from "./component/LearnImage";
import DataFetching from "./component/DataFetching";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1>Lorem, ipsum dolor.</h1>
      <LearnLink />
      <LearnImage /> */}

      <DataFetching />
    </main>
  );
}
