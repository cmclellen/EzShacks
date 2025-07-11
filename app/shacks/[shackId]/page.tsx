import DateSelector from "@/app/_components/DateSelector";
import LoginMessage from "@/app/_components/LoginMessage";
import ReservationForm from "@/app/_components/ReservationForm";
import ShackDefault from "@/app/_components/ShackDefault";
import { getBookedDatesByShackId, getShack } from "@/app/_lib/apiShacks";
import { auth } from "@/app/_lib/auth";
import { Params } from "next/dist/server/request/params";

type PageProps = {
  params: Promise<Params>;
};

async function Page({ params }: PageProps) {
  const { shackId } = await params;
  const [bookedDates] = await Promise.all([
    getBookedDatesByShackId(Number(shackId)),
  ]);
  const session: any = await auth();

  const shack = await getShack(Number(shackId));

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <ShackDefault shack={shack} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {shack.name} today. Pay on arrival.
        </h2>

        <div className="grid grid-cols-2 border min-h-[400px]">
          <DateSelector bookedDates={bookedDates} shack={shack} />
          {session?.user ? (
            <ReservationForm shack={shack} user={session!.user} />
          ) : (
            <LoginMessage />
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
