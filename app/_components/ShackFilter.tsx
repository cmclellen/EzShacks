"use client";

import clsx from "clsx";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FilterType } from "../_lib/types";

type FilterButtonProps = {
  children: React.ReactNode;
  filterType: FilterType;
};

function FilterButton({ filterType, children }: FilterButtonProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";
  const isActive = filterType === activeFilter;

  function handleApplyFilter() {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filterType);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <button
      onClick={handleApplyFilter}
      className={clsx(
        "cursor-pointer px-3 py-2 hover:bg-primary hover:text-on-primary",
        {
          "bg-accent": isActive,
        }
      )}
    >
      {children}
    </button>
  );
}

type ShackFilterProps = {
  //children: React.ReactNode;
};

function ShackFilter(_props: ShackFilterProps) {
  return (
    <div className="outline flex">
      <FilterButton filterType="all">All cabins</FilterButton>
      <FilterButton filterType="small">3 guests</FilterButton>
      <FilterButton filterType="medium">4&mdash;7 guests</FilterButton>
      <FilterButton filterType="large">8&mdash;12 guests</FilterButton>
    </div>
  );
}

export default ShackFilter;
