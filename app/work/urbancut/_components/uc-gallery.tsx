import Image from "next/image";

const styles = [
  { name: "Skin Fade", file: "skin-fade.jpg", ratio: "481 / 585" },
  { name: "Textured Crop", file: "textured-crop.jpg", ratio: "310 / 496" },
  { name: "Slick Back", file: "slick-back.jpg", ratio: "278 / 496" },
  { name: "Beard Line-Up", file: "beard-lineup.jpg", ratio: "272 / 496" },
  { name: "Buzz Cut", file: "buzz-cut.jpg", ratio: "277 / 496" },
  { name: "Pompadour", file: "pompadour.jpg", ratio: "292 / 496" },
];

export default function UcGallery() {
  return (
    <section id="gallery" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-lg text-3xl font-bold text-white md:text-4xl">
          Styles we&rsquo;re known for.
        </h2>
        <p className="mt-3 text-sm text-zinc-500">
          Illustrative examples for this concept project.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {styles.map((s) => (
            <div
              key={s.name}
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: s.ratio }}
            >
              <Image
                src={`/urbancut/${s.file}`}
                alt={`${s.name} haircut example`}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
