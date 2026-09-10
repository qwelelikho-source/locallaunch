const rooms = ["Kitchen", "Living Room", "Bathroom", "Office", "Bedroom", "Windows"];

export default function CcGallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-lg text-3xl font-bold text-slate-900 md:text-4xl">
          Before &amp; after, every time.
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Illustrative examples for this concept project — real client photos
          would go here.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <div
              key={room}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="grid grid-cols-2">
                <div className="flex aspect-square items-center justify-center bg-slate-200 text-xs font-medium text-slate-500">
                  Before
                </div>
                <div
                  className="flex aspect-square items-center justify-center text-xs font-medium text-white"
                  style={{
                    background: `linear-gradient(135deg, #0f766e, #2dd4bf)`,
                  }}
                >
                  After
                </div>
              </div>
              <div className="px-4 py-3 text-sm font-medium text-slate-700">
                {room}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
