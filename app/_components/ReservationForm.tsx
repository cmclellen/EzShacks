"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "../_contexts/ReservationContext";
import { createBooking } from "../_lib/actions";
import { Shack } from "../_lib/types";
import SubmitButton from "./SubmitButton";
import { User } from "next-auth";
import Image from "next/image";

type ReservationFormProps = {
  shack: Shack;
  user: User;
};

function ReservationForm({ shack, user }: ReservationFormProps) {
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
      <div className="bg-primary text-on-primary px-16 py-2 font-semibold flex items-center justify-between">
        <p>Logged in as</p>
        <div className="flex gap-4 items-center">
          <div className="relative w-8 h-8">
            <Image
              // Important to display google profile images
              referrerPolicy="no-referrer"
              className="rounded-full object-cover"
              src={user.image as string}
              alt={user.name as string}
              fill
            />
          </div>
          <p>{user.name}</p>
        </div>
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
