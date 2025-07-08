"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function createBooking(bookingData: any, formData: FormData) {
  const session: any = await auth();
  if (!session) throw new Error("You must be logged in");

  console.log("bookingData", bookingData);
  console.log("formData", formData);

  const newBooking = {
    ...bookingData,
    guestId: Number(session.user.guestId),
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations")!.slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  console.log(newBooking);

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  revalidatePath(`/shacks/${bookingData.shackId}`);

  redirect("/shacks/thankyou");
}
