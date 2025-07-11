"use client";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "../_contexts/ReservationContext";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { Shack } from "../_lib/types";

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
  shack: Shack;
};

function DateSelector({ bookedDates, shack }: DateSelectorProps) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange: any = isAlreadyBooked(range, bookedDates) ? {} : range;

  const minBookingLength = 3,
    maxBookingLength = 90;

  const { regularPrice, discount } = shack;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const shackPrice = numNights * (regularPrice - discount);

  function handleSetRange(d: any) {
    setRange(d);
  }

  const currDate = new Date();

  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        classNames={{
          today: `border-amber-500`, // Add a border to today's date
          selected: `bg-amber-500 border-amber-500 text-white`, // Highlight the selected day
          root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
          chevron: `${defaultClassNames.chevron} fill-amber-500`, // Change the color of the chevron
        }}
        mode="range"
        onSelect={handleSetRange}
        selected={displayRange}
        min={minBookingLength + 1}
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
      <div className="flex items-center px-8 bg-accent text-on-accent h-[72px] justify-between">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span>/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-on-accent text-accent px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${shackPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
