import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { Booking, Shack } from "./types";
import { eachDayOfInterval } from "date-fns";

export async function getShacks() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded.");
  }
  // await new Promise((resolve) => setTimeout(resolve, 15000));
  return cabins;
}

export async function getBookedDatesByShackId(shackId: number) {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const todayText = today.toISOString();

  console.log(shackId, todayText);

  // Getting all bookings
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", shackId)
    .or(`startDate.gte.${todayText},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getShack(id: number): Promise<Shack> {
  const { data: cabin, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return cabin;
}

export async function getBookings(guestId: number): Promise<Booking[]> {
  const { data: bookings, error } = await supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)"
    )
    .eq("guestId", guestId)
    .order("startDate");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return bookings as unknown as Booking[];
}
