import Image from "next/image";
import { formatCurrency } from "../_utils/helpers";
import { HiUsers } from "react-icons/hi";

export const revalidate = 0;

type ShackCardProps = {
  shack: Shack;
};

function ShackCard({ shack }: ShackCardProps) {
  const { discount } = shack;
  return (
    <div className="outline outline-primary flex gap-2">
      <div className="flex-1 relative">
        <Image
          src={shack.image}
          alt={shack.name}
          fill
          className="object-cover aspect-square"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="px-7 py-5">
          <h3 className="font-bold text-lg">Shack {shack.name}</h3>

          <div className="flex gap-1 items-center">
            <HiUsers />
            <p className="font-semibold">
              For up to <span className="font-bold">{shack.maxCapacity}</span>{" "}
              guests
            </p>
          </div>
          <p className="flex justify-end items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-semibold">
                  {formatCurrency(shack.regularPrice - shack.discount)}
                </span>
                <span className="line-through font-semibold">
                  {formatCurrency(shack.regularPrice)}
                </span>
              </>
            ) : (
              <span className="text-3xl font-semibold">
                {formatCurrency(shack.regularPrice)}
              </span>
            )}
            <span>/ night</span>
          </p>
        </div>

        <div className="flex items-center justify-end">
          <button className="outline px-5 py-3 hover:bg-accent hover:text-on-accent hover:outline-none hover: border:none">
            Details & reservation &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShackCard;
