"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { DateRange } from "react-day-picker";

type ReservationContextProviderType = {
  range: DateRange;
  setRange: Dispatch<SetStateAction<DateRange>>;
  resetRange: () => void;
};

const ReservationContext = createContext<
  ReservationContextProviderType | undefined
>(undefined);

const initialState = { from: undefined, to: undefined };

type ReservationProviderProps = {
  children: React.ReactNode;
};

export function ReservationProvider({ children }: ReservationProviderProps) {
  const [range, setRange] = useState<DateRange>(initialState);
  function resetRange() {
    setRange(initialState);
  }

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
