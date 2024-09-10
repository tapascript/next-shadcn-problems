import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      <Link className="underline text-2xl" href="/dialog-close">Close Dialog on Form Submission</Link>
    </div>
  );
}
