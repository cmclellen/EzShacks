import { ImSpinner5 } from "react-icons/im";

type SpinnerProps = {
  //children: React.ReactNode;
};

function Spinner(_props: SpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <ImSpinner5 className="animate-spin text-3xl" />
    </div>
  );
}

export default Spinner;
