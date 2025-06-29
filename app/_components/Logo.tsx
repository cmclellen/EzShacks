import Link from "next/link";
import { FaHouseChimneyWindow } from "react-icons/fa6";

function Logo() {
  return (
    <Link href="/">
      <h1 className="py-3 flex items-stretch text-2xl gap-1">
        <FaHouseChimneyWindow className="text-accent" />
        <span className="font-bold tracking-widest ">
          {process.env.APP_NAME}
        </span>
      </h1>
    </Link>
  );
}

export default Logo;
