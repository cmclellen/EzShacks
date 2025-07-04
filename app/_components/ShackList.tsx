import ShackCard from "./ShackCard";

type ShackListProps = {
  shacks: Shack[];
};

function ShackList({ shacks }: ShackListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {shacks.map((shack, i) => (
        <ShackCard key={i} shack={shack} />
      ))}
    </div>
  );
}

export default ShackList;
