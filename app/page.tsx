import bg from "@/public/bg.png";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default function Home() {
  return (
    <div className="mt-24">
      <Image
        src={bg}
        alt="A cozy cabin nestled among tall trees, with a majestic mountain rising in the background under a tranquil sky."
        fill
        placeholder="blur"
        className="object-cover object-top"
      />
      <div className="relative flex flex-col gap-5 items-center z-10 ">
        <h1 className="text-3xl md:text-6xl text-center">
          A getaway to be remembered
        </h1>
        <div>
          <Link
            href="/shacks"
            className="bg-accent text-on-accent px-8 py-6 text-lg font-semibold rounded-lg hover:bg-primary"
          >
            Explore shacks
          </Link>
        </div>
      </div>
    </div>
  );
}
