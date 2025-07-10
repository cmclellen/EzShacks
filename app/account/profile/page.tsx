import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { getGuest } from "@/app/_lib/apiShacks";
import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Update profile",
};

type PageProps = {
  //children: React.ReactNode;
};

async function Page(_props: PageProps) {
  const session: any = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-2xl text-accent">
        Update your profile
      </h2>

      <p className="text-lg text-primary">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default Page;
