import Image from "next/image";
import { getShacks } from "../_lib/apiShacks";

type PageProps = {
  //children: React.ReactNode;
};

async function Page(_props: PageProps) {
  const shacks = await getShacks();

  return (
    <div className="grid grid-cols-5 gap-x-24 items-center">
      <div className="col-span-3 space-y-10">
        <h1 className="text-4xl text-primary font-medium">
          Welcome to {process.env.APP_NAME}
        </h1>

        <div className="space-y-8">
          <p>
            Experience the perfect harmony of natural beauty and modern comfort.
            Tucked within the stunning Italian Dolomites, this is your sanctuary
            away from home. More than just luxurious cabins, it&apos;s an
            invitation to reconnect with nature and savor life&apos;s simple
            joys with your loved ones.
          </p>
          <p>
            Our {shacks.length} luxury shacks offer a comfortable retreat, but
            true tranquility awaits in the mountains beyond. Explore vibrant
            forests, enjoy the crisp mountain air, and gaze at the stars from
            beside a campfire or while relaxing in your private hot tub.
          </p>
          <p>
            Here, you&apos;ll create lasting memories embraced by the beauty of
            nature. It&apos;s a space to unwind, reconnect, and enjoy meaningful
            time together in a truly stunning environment.
          </p>
        </div>
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-1.jpg"
          alt="Family sitting around a fire pit in front of cabin"
          fill
        />
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-2.jpg"
          alt="Family that manages The Wild Oasis"
          fill
          className="object-cover"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <a
              href="/shacks"
              className="inline-block mt-4 bg-accent px-8 py-5 text-primary text-lg font-semibold hover:bg-primary hover:text-on-primary transition-all"
            >
              Explore our luxury shacks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
