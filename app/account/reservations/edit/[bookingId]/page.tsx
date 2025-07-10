import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getShack } from "@/app/_lib/apiShacks";

type PageProps = {
  params: Promise<{ bookingId: number }>;
};

async function Page({ params }: PageProps) {
  const { bookingId } = await params;
  const { numGuests, observations, cabinId } = await getBooking(
    Number(bookingId)
  );
  const { maxCapacity } = await getShack(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent">
        Edit Reservation #{bookingId}
      </h2>
      <form
        action={updateBooking}
        className="py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <input type="hidden" value={bookingId} name="bookingId" />

        <div className="">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            id="numGuests"
            name="numGuests"
            defaultValue={numGuests}
            required
            className="px-5 py-3 w-full bg-primary text-on-primary placeholder:text-on-primary rounded-sm"
          >
            <option key="" value="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option key={x} value={x}>
                {x} {x == 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Antything we should know about your stay?
          </label>
          <textarea
            id="observations"
            name="observations"
            defaultValue={observations}
            placeholder="Any pets, allergies, special requirements. etc.?"
            className="px-5 py-3 w-full shadow-sm bg-primary text-on-primary placeholder:text-on-primary rounded-sm"
          ></textarea>
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">Update now</SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default Page;
