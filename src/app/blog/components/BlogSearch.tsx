"use client"

import { Search } from "lucide-react"
import { useState } from "react"

export function BlogSearch({ onSearch }: { onSearch: (query: string) => void }) {
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="relative mb-8 max-w-lg">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Bloglarda ara..."
        className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#2a2a2b] border border-[#FF6B35]/40 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition"
      />
    </div>
  )
}
