import { FaTrash } from "react-icons/fa6";

type DeleteReservationProps = {
  bookingId: number;
  onDelete: () => void;
};

function DeleteReservation(_props: DeleteReservationProps) {
  return (
    <button className="group flex items-center uppercase gap-2 text-xs font-bold px-3 flex-grow hover:bg-accent transition-colors hover:text-primary">
      <FaTrash className="h-5 w-5 group-hover:text-on-accent"></FaTrash>
      <span className="mt-1 group-hover:text-on-accent">Delete</span>
    </button>
  );
}

export default DeleteReservation;
