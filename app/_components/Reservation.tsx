import { Shack } from "../_lib/types";

type ReservationProps = {
  shack: Shack;
};

async function Reservation(_props: ReservationProps) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>here</div>;
}

export default Reservation;
