"use client";

import { updateGuest } from "../_lib/actions";
import { Guest } from "../_lib/types";
import SubmitButton from "./SubmitButton";

type UpdateProfileFormProps = {
  guest: Guest;
  children: React.ReactNode;
};

function UpdateProfileForm({ children, guest }: UpdateProfileFormProps) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div>
        <label htmlFor="fullName">Full name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          disabled
          defaultValue={fullName}
          className="px-5 py-3 bg-primary text-on-primary w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="text"
          disabled
          defaultValue={email}
          className="px-5 py-3 bg-primary text-on-primary w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>
        {children}
      </div>

      <div>
        <label htmlFor="nationalID">National ID number</label>
        <input
          id="nationalID"
          name="nationalID"
          type="text"
          defaultValue={nationalID}
          className="px-5 py-3 bg-primary text-on-primary w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
