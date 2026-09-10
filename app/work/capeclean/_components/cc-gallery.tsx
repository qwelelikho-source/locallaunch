import Image from "next/image";

const rooms = [
  { room: "Kitchen", file: "kitchen.jpg" },
  { room: "Living Room", file: "living-room.jpg" },
  { room: "Bathroom", file: "bathroom.jpg" },
  { room: "Office", file: "office.jpg" },
  { room: "Bedroom", file: "bedroom.jpg" },
  { room: "Windows", file: "windows.jpg" },
];

export default function CcGallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-lg text-3xl font-bold text-slate-900 md:text-4xl">
          Spaces we&rsquo;ve cleaned.
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Illustrative examples for this concept project.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r) => (
            <div
              key={r.room}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="relative aspect-square">
                <Image
                  src={`/capeclean/${r.file}`}
                  alt={`${r.room} cleaned by CapeClean`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="px-4 py-3 text-sm font-medium text-slate-700">
                {r.room}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
