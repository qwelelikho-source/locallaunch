import Link from "next/link";

export default function BuildCoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-slate-900">
      <div className="flex items-center justify-center gap-2 bg-slate-900 px-4 py-2 text-center text-xs text-slate-300">
        <span>Concept project by LocalLaunch — not a real business</span>
        <Link href="/work" className="font-medium text-white underline underline-offset-2">
          Back to portfolio
        </Link>
      </div>
      {children}
    </div>
  );
}
