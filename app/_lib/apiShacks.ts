import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { Booking } from "./types";

export async function getShacks() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded.");
  }
  // await new Promise((resolve) => setTimeout(resolve, 15000));
  return cabins;
}

export async function getShack(id: number): Promise<any> {
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
