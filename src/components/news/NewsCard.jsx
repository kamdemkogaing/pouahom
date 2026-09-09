import { ArrowUpRight, CalendarDays } from "lucide-react";

export default function NewsCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-neutral-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-16/10 overflow-hidden bg-[#899789]">
        <img
          src={item.image}
          alt={item.title}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/images/logo/pouahom-logo.jpg";
          }}
          className="h-full w-full object-contain px-8 py-3 transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-[#8f0d0d]/10 px-3 py-1 text-xs font-bold uppercase text-[#8f0d0d]">
            {item.category}
          </span>

          <span className="flex items-center gap-1 text-xs text-neutral-500">
            <CalendarDays size={14} />
            {item.date}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-black">{item.title}</h3>

        <p className="mt-3 leading-7 text-neutral-600">{item.excerpt}</p>

        <button className="mt-6 flex items-center gap-2 font-bold text-[#8f0d0d]">
          Lire
          <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  );
}
