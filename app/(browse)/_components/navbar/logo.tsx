import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden lg:flex items-center gap-x-2 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1">
          <Image src="/logo.svg" alt="logo" height="40" width="60" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl">YouStream</h1>
          <p className="text-sm text-muted-foreground">Play your way</p>
        </div>
      </div>
    </Link>
  );
};