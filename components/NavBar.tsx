import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        <span className="text-primary  font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          AI{" "}
        </span>
        Simplified
      </Link>

      <ModeToggle />
    </nav>
  );
}
