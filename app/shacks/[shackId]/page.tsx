import Reservation from "@/app/_components/Reservation";
import ShackDefault from "@/app/_components/ShackDefault";
import Spinner from "@/app/_components/Spinner";
import { getShack, getShacks } from "@/app/_lib/apiShacks";
import { Params } from "next/dist/server/request/params";
import { Suspense } from "react";

type PageProps = {
  params: Promise<Params>;
};

async function Page({ params }: PageProps) {
  const { shackId } = await params;

  const shack = await getShack(Number(shackId));

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ShackDefault shack={shack} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {shack.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation shack={shack} />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
