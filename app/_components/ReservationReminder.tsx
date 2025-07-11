"use client";

import { format } from "date-fns";
import { useReservation } from "../_contexts/ReservationContext";
import { FaXmark } from "react-icons/fa6";

type ReservationReminderProps = {
  //children: React.ReactNode;
};

function ReservationReminder(_props: ReservationReminderProps) {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-full bg-accent text-on-accent text font-semibold shadow-xl shadow-slate-900 flex gap-8 items-center">
      <p>
        <span>👋</span> Don&apos;t forget to reserve your dates <br /> from{" "}
        {format(new Date(range.from!), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to!), "MMM dd yyyy")}
      </p>
      <button
        className="rounded-full p-1 hover:bg-accent-600 transition-all"
        onClick={resetRange}
      >
        <FaXmark className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
