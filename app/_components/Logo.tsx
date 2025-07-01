import Link from "next/link";
import { FaHouseChimneyWindow } from "react-icons/fa6";

function Logo() {
  return (
    <Link href="/">
      <h1 className="py-3 flex items-center text-2xl gap-1">
        <div className="bg-primary rounded-full aspect-square h-10 p-2 z-10 ">
          <FaHouseChimneyWindow className="text-accent" />
        </div>
        <span className="font-bold tracking-widest z-10">
          {process.env.APP_NAME}
        </span>
      </h1>
    </Link>
  );
}

export default Logo;
