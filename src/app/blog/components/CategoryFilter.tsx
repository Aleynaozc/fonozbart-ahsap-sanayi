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
    <div className="flex gap-3 mb-8 flex-wrap">
      <button
        onClick={() => onSelect("all")}
        className={`px-4 py-2 rounded-md border transition ${
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
          className={`px-4 py-2 rounded-md border transition ${
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
