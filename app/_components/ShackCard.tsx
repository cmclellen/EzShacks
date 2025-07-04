import Image from "next/image";
import { formatCurrency } from "../_utils/helpers";

export const revalidate = 0;

type ShackCardProps = {
  shack: Shack;
};

function ShackCard({ shack }: ShackCardProps) {
  const { discount } = shack;
  return (
    <div className="border border-primary flex gap-2">
      <div className="flex-1 relative">
        <Image
          src={shack.image}
          alt={shack.name}
          fill
          className="object-cover aspect-square"
        />
      </div>

      <div className="flex flex-col flex-grow px-7">
        <h3 className="font-bold text-lg">Shack {shack.name}</h3>
        <p className="font-semibold">For up to {shack.maxCapacity} guests</p>
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
    </div>
  );
}

export default ShackCard;
