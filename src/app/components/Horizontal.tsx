import { cn } from "../lib/utils";
import { Marquee } from "./Marquee";

const reviews = [
  { name: "Alice", username: "@alice_dev", body: "DevSpaces has totally changed the way I connect with other devs. The community is incredible!", img: "https://avatar.vercel.sh/alice" },
  { name: "Bob", username: "@bob_codes", body: "I found my mentor and collaborators through DevSpaces. Highly recommend to any developer.", img: "https://avatar.vercel.sh/bob" },
  { name: "Charlie", username: "@charliejs", body: "The community challenges and discussions really help me grow as a dev.", img: "https://avatar.vercel.sh/charlie" },
  { name: "Diana", username: "@diana_dev", body: "I love the hackathons and workshops! DevSpaces makes networking easy and fun.", img: "https://avatar.vercel.sh/diana" },
  { name: "Ethan", username: "@ethan_codes", body: "Great place to share ideas and get feedback from like-minded developers.", img: "https://avatar.vercel.sh/ethan" },
  { name: "Fiona", username: "@fiona_js", body: "The collaborative projects here are amazing. Learned so much in a short time!", img: "https://avatar.vercel.sh/fiona" },
  { name: "George", username: "@george_dev", body: "DevSpaces keeps me motivated. The community support is unreal.", img: "https://avatar.vercel.sh/george" },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string; }) => (
  <figure className={cn(
    "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
  )}>
    <div className="flex items-center gap-2">
      <img className="rounded-full" width={32} height={32} alt={name} src={img} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-black">{name}</figcaption>
        <p className="text-xs font-medium dark:text-black/40">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm">{body}</blockquote>
  </figure>
);

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review) => <ReviewCard key={review.username} {...review} />)}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review) => <ReviewCard key={review.username} {...review} />)}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
}
