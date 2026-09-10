import Link from "next/link";

export default function UrbanCutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0F0D0B] text-white">
      <div className="flex items-center justify-center gap-2 bg-black px-4 py-2 text-center text-xs text-slate-400">
        <span>Concept project by LocalLaunch — not a real business</span>
        <Link href="/work" className="font-medium text-white underline underline-offset-2">
          Back to portfolio
        </Link>
      </div>
      {children}
    </div>
  );
}
