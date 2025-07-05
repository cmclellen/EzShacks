import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

type PageProps = {
  //children: React.ReactNode;
};

async function Page(_props: PageProps) {
  const session = await auth();

  const firstName = session!.user!.name!.split(" ").at(0);

  return <h2>Welcome, {firstName}</h2>;
}

export default Page;
