import Image from "next/image";
import { Shack } from "../_lib/types";
import { HiUsers } from "react-icons/hi";

type ShackDefaultProps = {
  shack: Shack;
};

function ShackDefault({ shack }: ShackDefaultProps) {
  const { name, image, maxCapacity } = shack;
  return (
    <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
      <div className="relative scale-[1.15] -translate-x-3">
        <Image src={image} fill alt={name} className="object-cover" />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
          Shack {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          {/* <TextExpander>{description}</TextExpander> */}
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <HiUsers />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShackDefault;
