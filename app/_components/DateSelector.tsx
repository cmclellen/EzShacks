"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

type DateSelectorProps = {
  //children: React.ReactNode;
};

function DateSelector(_props: DateSelectorProps) {
  return (
    <div className="flex flex-col justify-between">
      <DayPicker className="pt-12 place-self-center" mode="range" />
    </div>
  );
}

export default DateSelector;
