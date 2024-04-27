import Link from "next/link";
import { Avatar } from "./_components/Avatar";

export default function NotFound() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="m-0 overflow-hidden bg-inherit">
      <section
        id="#loading_screen"
        style={{
          top: "-50%",
          left: "-50%",
          right: "-50%",
          bottom: "-50%",
          width: "200%",
          height: "200vh",
        }}
        className="fixed transform-gpu animate-[noise_2s_infinite] bg-transparent bg-[url('/_images/noise.svg')] bg-repeat opacity-80"
      ></section>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Avatar id="me.svg" alt="Loading frame" styles={{ with: "100%" }} />
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/?">Return Home</Link>
      </div>
    </div>
  );
}
