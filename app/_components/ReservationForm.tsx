type ReservationFormProps = {
  maxCapacity: number;
};

function ReservationForm({ maxCapacity }: ReservationFormProps) {
  return (
    <div className="outline">
      <div className="bg-primary text-on-primary px-16 py-2 font-semibold">
        <p>Logged in as</p>
      </div>

      <form className="py-10 px-16 flex flex-col gap-5">
        <div className="">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            id="numGuests"
            name="numGuests"
            required
            className="px-5 py-3 w-full bg-primary text-on-primary placeholder:text-on-primary rounded-sm"
          >
            <option key="" value="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option key={x} value={x}>
                {x} {x == 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Antything we should know about your stay?
          </label>
          <textarea
            id="observations"
            name="observations"
            placeholder="Any pets, allergies, special requirements. etc.?"
            className="px-5 py-3 w-full shadow-sm bg-primary text-on-primary placeholder:text-on-primary rounded-sm"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
