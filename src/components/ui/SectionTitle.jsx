export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#8f0d0d]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#171311]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-neutral-600">{description}</p>
      )}
    </div>
  );
}
