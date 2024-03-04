import { Avatar } from "../_components/Avatar";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="bg-inherit m-0 overflow-hidden">
<section
      id="#loading_screen"
      style={{ top: "-50%", left: "-50%",right: "-50%", bottom: "-50%", width: "200%", height: "200vh" }}
      className="opacity-80 transform-gpu fixed animate-[noise_2s_infinite] bg-transparent bg-[url('/_images/noise.svg')] bg-repeat"
    ></section>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Avatar id="me.svg" alt="Loading frame" styles={{ with: "100%" }} />
        <p>Loading</p>
      </div>
    </div>
    
      
  );
}
