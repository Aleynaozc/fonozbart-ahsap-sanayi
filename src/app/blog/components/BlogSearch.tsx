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
    <div className="flex items-center bg-[#2a2a2b] border border-[#FF6B35]/40 rounded-lg px-3 py-2.5 sm:py-3">
  <Search className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 mr-2" />
  <input
    type="text"
    value={value}
    onChange={handleChange}
    placeholder="Bloglarda ara..."
    className="w-full bg-transparent outline-none text-sm sm:text-base text-white placeholder-gray-400"
  />
</div>
  )
}
