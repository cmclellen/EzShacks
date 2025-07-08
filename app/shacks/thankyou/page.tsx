import Link from "next/link";

type PageProps = {
  //children: React.ReactNode;
};

function Page(_props: PageProps) {
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        Thank you for your reservation!
      </h1>
      <Link
        href="/account/reservations"
        className="underline text-xl text-accent"
      >
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}

export default Page;
