"use client";

import { MouseEventHandler } from "react";

type ErrorProps = {
  error: Error;
  reset: MouseEventHandler;
};

function Error({ error, reset }: ErrorProps) {
  return (
    <main className="w-full text-center space-y-5">
      <h1 className="font-bold text-3xl">Something went wrong!</h1>
      <p className="">{error.message}</p>
      <button className="outline px-5 py-3" onClick={reset}>
        Try again
      </button>
    </main>
  );
}

export default Error;
