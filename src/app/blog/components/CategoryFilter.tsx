export function CategoryFilter({
  categories,
  onSelect,
  selected,
}: {
  categories: string[]
  onSelect: (c: string) => void
  selected: string
}) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-0 justify-center sm:justify-start">
      <button
        onClick={() => onSelect("all")}
        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border text-sm sm:text-base transition cursor-pointer ${
          selected === "all"
            ? "bg-[#FF6B35] border-[#FF6B35] text-white"
            : "bg-[#2a2a2b] border-[#FF6B35]/40 text-white hover:bg-[#FF6B35] hover:text-white"
        }`}
      >
        Tümü
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border text-sm sm:text-base transition cursor-pointer ${
            selected === cat
              ? "bg-[#FF6B35] border-[#FF6B35] text-white"
              : "bg-[#2a2a2b] border-[#FF6B35]/40 text-white hover:bg-[#FF6B35] hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
