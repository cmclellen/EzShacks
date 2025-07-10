import ReservationList from "@/app/_components/ReservationList";
import { getBookings } from "@/app/_lib/apiShacks";
import { auth } from "@/app/_lib/auth";

type PageProps = {
  //children: React.ReactNode;
};

async function Page(_props: PageProps) {
  const session: any = await auth();
  const bookings = await getBookings(session?.user?.guestId);

  return (
    <div className="space-y-7">
      <h2 className="font-semibold text-2xl">Your reservations</h2>

      {bookings.length === 0 ? (
        <p>You have no reservations yet. Check out our luxury shacks &rarr;</p>
      ) : (
        <ReservationList bookings={bookings} />
      )}

      {/* <Link href={`/account/reservations/edit/1`}>click here</Link> */}
    </div>
  );
}

export default Page;
