"use client";

import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  pendingLabel: string;
  children: React.ReactNode;
};

function SubmitButton({ children, pendingLabel }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
