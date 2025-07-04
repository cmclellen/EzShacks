import { notFound } from "next/navigation";
import { supabase, supabaseKey, supabaseUrl } from "./supabase";

export async function getShacks() {
  console.log(supabaseKey, supabaseUrl);
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded.");
  }
  //await new Promise((resolve) => setTimeout(resolve, 6500));
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
