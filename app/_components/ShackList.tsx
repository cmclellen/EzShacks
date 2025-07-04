import { getShacks } from "../_lib/apiShacks";
import { FilterType } from "../_lib/types";
import ShackCard from "./ShackCard";

type ShackListProps = {
  filter: FilterType;
};

async function ShackList({ filter }: ShackListProps) {
  const shacks = await getShacks();

  if (!shacks.length) return null;

  let displayShacks;

  if (filter == "small")
    displayShacks = shacks.filter((shack) => shack.maxCapacity <= 3);
  else if (filter == "medium")
    displayShacks = shacks.filter(
      (shack) => shack.maxCapacity > 3 && shack.maxCapacity <= 7
    );
  else if (filter == "large")
    displayShacks = shacks.filter((shack) => shack.maxCapacity > 7);
  else displayShacks = shacks;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayShacks.map((shack, i) => (
        <ShackCard key={i} shack={shack} />
      ))}
    </div>
  );
}

export default ShackList;
