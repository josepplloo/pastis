"use client"; // Error components must be Client Components
import { useEffect } from "react";
import { Avatar } from "./_components/Avatar";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
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
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
