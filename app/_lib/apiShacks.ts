import { notFound } from "next/navigation";
import { supabase } from "./supabase";

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
