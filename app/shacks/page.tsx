import ShackItem from "../_components/ShackCard";
import ShackList from "../_components/ShackList";
import { getShacks } from "../_lib/apiShacks";

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

      <ShackList shacks={shacks}></ShackList>
    </div>
  );
}

export default Page;
