import { Suspense } from "react";
import ShackFilter from "../_components/ShackFilter";
import ShackList from "../_components/ShackList";
import Spinner from "../_components/Spinner";
import { FilterType } from "../_lib/types";

export const revalidate = 0;

export const metadata = {
  title: "Shacks",
};

type PageProps = {
  searchParams: any;
};

async function Page({ searchParams }: PageProps) {
  const { capacity } = await searchParams;
  const filter: FilterType = (capacity ?? "all") as FilterType;

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-medium">Our shacks</h1>
      <p className="text-lg">
        Charming yet luxurious shacks tucked away in a tranquil setting. Wake up
        to stunning mountain views, spend your days wandering through lush,
        shadowy forests, or simply soak in your private hot tub beneath a
        blanket of stars. Experience the beauty of nature in your own cozy
        escape. A peaceful, quiet retreat—your perfect getaway. Welcome!
      </p>

      <div className="flex justify-end">
        <ShackFilter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <ShackList filter={filter}></ShackList>
      </Suspense>
    </div>
  );
}

export default Page;
