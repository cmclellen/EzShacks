type PageProps = {
  //children: React.ReactNode;
};

function Page(_props: PageProps) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-medium">Our shacks</h1>
      <p className="text-lg">
        Charming yet luxurious shacks tucked away in a tranquil setting. Wake up
        to stunning mountain views, spend your days wandering through lush,
        shadowy forests, or simply soak in your private hot tub beneath a
        blanket of stars. Experience the beauty of nature in your own cozy
        escape. A peaceful, quiet retreat—your perfect getaway. Welcome!
      </p>
    </div>
  );
}

export default Page;
