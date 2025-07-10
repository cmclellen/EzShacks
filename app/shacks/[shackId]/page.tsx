import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import ShackDefault from "@/app/_components/ShackDefault";
import { getBookedDatesByShackId, getShack } from "@/app/_lib/apiShacks";
import { Params } from "next/dist/server/request/params";

type PageProps = {
  params: Promise<Params>;
};

async function Page({ params }: PageProps) {
  const { shackId } = await params;
  const [bookedDates] = await Promise.all([
    getBookedDatesByShackId(Number(shackId)),
  ]);

  const shack = await getShack(Number(shackId));

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ShackDefault shack={shack} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {shack.name} today. Pay on arrival.
        </h2>

        <div className="grid grid-cols-2 border min-h-[400px]">
          <DateSelector bookedDates={bookedDates} />
          <ReservationForm shack={shack} />
        </div>
      </div>
    </div>
  );
}

export default Page;
