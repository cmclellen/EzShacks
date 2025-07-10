export type Shack = {
  id: number;
  created_at: Date;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
};

export type FilterType = "all" | "small" | "medium" | "large";

export type Booking = {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  observations: string;
  // cabinPrice: number;
  // extrasPrice: number;
  totalPrice: number;
  // status: string;
  // hasBreakfast: boolean;
  // isPaid: boolean;
  guestId: number;
  cabinId: number;

  cabins: { name: string; image: string };
};

export type Guest = {
  id: number;
  created_at: Date;
  fullName: string;
  email: string;
  nationalID: string;
  nationality: string;
  countryFlag: string;
};
