import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="text-red-500 text-center pt-48 text-5xl">
        Other components coming soon
      </h2>
      <Link
        href="/blogs/"
        className="py-3 px-6 border border-custom-skyblue rounded-lg text-white flex justify-center items-center max-w-60 mx-auto mt-10 hover:text-custom-skyblue hover:bg-white font-bold duration-300 ease-linear"
      >
        Go to blogs
      </Link>
    </>
  );
}
