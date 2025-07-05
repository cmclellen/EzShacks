import Spinner from "./_components/Spinner";

export const revalidate = 0;

type LoadingProps = {
  //children: React.ReactNode;
};

function Loading(_props: LoadingProps) {
  return (
    <div className="flex gap-1 items-center justify-center">
      <Spinner />
      <span className="text-xl align-text-bottom leading-none">Loading...</span>
    </div>
  );
}

export default Loading;
