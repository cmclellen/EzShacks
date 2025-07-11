import Link from "next/link";

type LoginMessageProps = {
  //children: React.ReactNode;
};

function LoginMessage(_props: LoginMessageProps) {
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve this
        <br /> shack right now
      </p>
    </div>
  );
}

export default LoginMessage;
