"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "../_contexts/ReservationContext";
import { isPast, isSameDay, isWithinInterval } from "date-fns";

function isAlreadyBooked(range: any, datesArr: Date[]) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date: Date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

type DateSelectorProps = {
  bookedDates: Date[];
};

function DateSelector({ bookedDates }: DateSelectorProps) {
  const { range, setRange } = useReservation();

  const displayRange: any = isAlreadyBooked(range, bookedDates) ? {} : range;

  const minBookingLength = 1,
    maxBookingLength = 7;

  function handleSetRange(d: any) {
    setRange(d);
  }

  const currDate = new Date();

  return (
    <div className="flex flex-col justify-between">
      <pre>{JSON.stringify(displayRange)}</pre>
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        onSelect={handleSetRange}
        selected={displayRange}
        min={minBookingLength}
        max={maxBookingLength}
        startMonth={currDate}
        hidden={{ before: currDate }}
        endMonth={new Date(currDate.getFullYear() + 5, 0)}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />
    </div>
  );
}

export default DateSelector;
