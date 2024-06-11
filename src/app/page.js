import Counter from "@/Components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  // throw new Error();
  return (
    <div className="flex flex-col items-center my-10">
      <h1>This is Home Page</h1>
      <Counter></Counter>
      <div className="flex justify-center gap-5 mt-5">
        <Link href='/about'><button className="py-2 px-5 bg-pink-500 rounded-lg">About</button></Link>
        <Link href='/news'><button className="py-2 px-5 bg-teal-500 rounded-lg">News</button></Link>
      </div>
    </div>
  );
};

export default HomePage;