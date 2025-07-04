import { getShacks } from "@/app/_lib/apiShacks";
import ShackList from "../_components/ShackList";
import ShackFilter from "../_components/ShackFilter";

export const revalidate = 0;

type PageProps = {
  //children: React.ReactNode;
};

async function Page(_props: PageProps) {
  const shacks = await getShacks();
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
      <ShackList shacks={shacks}></ShackList>
    </div>
  );
}

export default Page;
