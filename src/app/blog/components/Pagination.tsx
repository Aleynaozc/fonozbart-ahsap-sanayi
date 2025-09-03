"use client"

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center mt-10 gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 cursor-pointer rounded-md border border-[#FF6B35]/40 text-white bg-[#2a2a2b] hover:bg-[#FF6B35] hover:text-white disabled:opacity-40 transition"
      >
        ← Önceki
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1
        const isActive = currentPage === page
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer px-4 py-2 rounded-md border transition ${
              isActive
                ? "bg-[#FF6B35] border-[#FF6B35] text-white"
                : "bg-[#2a2a2b] border-[#FF6B35]/40 text-white hover:bg-[#FF6B35] hover:text-white"
            }`}
          >
            {page}
          </button>
        )
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="cursor-pointer px-4 py-2 rounded-md border border-[#FF6B35]/40 text-white bg-[#2a2a2b] hover:bg-[#FF6B35] hover:text-white disabled:opacity-40 transition"
      >
        Sonraki →
      </button>
    </div>
  )
}
