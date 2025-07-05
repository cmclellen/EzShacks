import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

type PageProps = {
  //children: React.ReactNode;
};

async function Page(_props: PageProps) {
  const session = await auth();
  console.log("session", session);
  const firstName = session!.user!.name!.split(" ").at(0);

  return <h2>Welcome, {firstName}</h2>;
}

export default Page;
