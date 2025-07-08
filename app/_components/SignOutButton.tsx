import { GoSignOut } from "react-icons/go";
import { signOutAction } from "../_lib/actions";

type SignOutButtonProps = {
  //children: React.ReactNode;
};

function SignOutButton(_props: SignOutButtonProps) {
  return (
    <form action={signOutAction}>
      <button className="flex items-center gap-1 text-lg hover:text-accent font-semibold transition-colors">
        <GoSignOut />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
