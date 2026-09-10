const styles = ["Skin Fade", "Textured Crop", "Slick Back", "Beard Line-Up", "Buzz Cut", "Pompadour"];

export default function UcGallery() {
  return (
    <section id="gallery" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-lg text-3xl font-bold text-white md:text-4xl">
          Styles we&rsquo;re known for.
        </h2>
        <p className="mt-3 text-sm text-zinc-500">
          Illustrative examples for this concept project — real work photos
          would go here.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {styles.map((s, i) => (
            <div
              key={s}
              className="group relative aspect-square overflow-hidden rounded-2xl"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(135deg, #27272a, #d97706)"
                    : "linear-gradient(135deg, #d97706, #27272a)",
              }}
            >
              <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
