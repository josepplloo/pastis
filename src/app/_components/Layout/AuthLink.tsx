import { unstable_noStore as noStore } from "next/cache";

import Link from "next/link";
import { getServerAuthSession } from "@/server/auth";

export default async function AuthLink() {
  noStore();
  const session = await getServerAuthSession();

  return (
    <div className="lg:flex lg:flex-1 lg:justify-end">
      <p className="text-center text-2xl text-white sm:hidden">
        {session && <span>Logged in as {session.user?.name}</span>}
      </p>
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="text-sm font-bold leading-6 text-gray-900 hover:bg-white/20"
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
}
