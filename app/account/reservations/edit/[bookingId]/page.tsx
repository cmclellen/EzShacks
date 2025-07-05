import { Params } from "next/dist/server/request/params";

type PageProps = {
  params: Params;
};

async function Page({ params }: PageProps) {
  const { bookingId } = await params;
  return (
    <div>
      <h2>Edit Reservation {bookingId}</h2>
    </div>
  );
}

export default Page;
