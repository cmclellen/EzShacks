"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "../_contexts/ReservationContext";
import { createBooking } from "../_lib/actions";
import { Shack } from "../_lib/types";
import SubmitButton from "./SubmitButton";

type ReservationFormProps = {
  shack: Shack;
};

function ReservationForm({ shack }: ReservationFormProps) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = shack;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate!, startDate!);
  const shackPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice: shackPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  async function handleSubmitForm(formData: FormData) {
    await createBookingWithData(formData);
    resetRange();
  }

  return (
    <div className="outline">
      <div className="bg-primary text-on-primary px-16 py-2 font-semibold">
        <p>Logged in as</p>
      </div>

      <form
        className="py-10 px-16 flex flex-col gap-5"
        action={handleSubmitForm}
      >
        <div className="">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            id="numGuests"
            name="numGuests"
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
            placeholder="Any pets, allergies, special requirements. etc.?"
            className="px-5 py-3 w-full shadow-sm bg-primary text-on-primary placeholder:text-on-primary rounded-sm"
          ></textarea>
        </div>

        <div>
          <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
