import DateSelector from "@/app/_components/DateSelector";
import Reservation from "@/app/_components/Reservation";
import ReservationForm from "@/app/_components/ReservationForm";
import ShackDefault from "@/app/_components/ShackDefault";
import Spinner from "@/app/_components/Spinner";
import { getShack } from "@/app/_lib/apiShacks";
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

        <div className="flex items-center">
          <div className="flex-1">
            <DateSelector />
          </div>
          <div className="flex-1">
            <ReservationForm maxCapacity={shack.maxCapacity} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
