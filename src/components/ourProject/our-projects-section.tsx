'use client'

import Image from "next/image"
import { useMemo, useState , useEffect, useRef,} from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Plus } from 'lucide-react'
type Category =
  | "all"
  | "interior"
  | "renovation"
  | "architecture"
  | "landscaping"
  | "gardening"

type Project = {
  id: string
  title: string
  category: Exclude<Category, "all">
  img: { src: string; width: number; height: number; alt: string }
}

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "ALL PROJECTS" },
  { value: "interior", label: "INTERIOR" },
  { value: "renovation", label: "RENOVATION" },
  { value: "architecture", label: "ARCHITECTURE" },
  { value: "landscaping", label: "LANDSCAPING" },
  { value: "gardening", label: "GARDENING" },
]

const projects: Project[] = [
  {
    id: "p1",
    title: "Conference Room",
    category: "interior",
    img: {
      src: "/assets/images/services-section/mutfak.jpg",
      width: 540,
      height: 700,
      alt: "Modern conference room with brick wall and window",
    },
  },
  {
    id: "p2",
    title: "New Office Room",
    category: "interior",
    img: {
      src: "/assets/images/services-section/pergola.jpg",
      width: 540,
      height: 700,
      alt: "Yellow office room with chandelier and meeting table",
    },
  },
  {
    id: "p3",
    title: "On‑site Work",
    category: "renovation",
    img: {
      src: "/assets/images/services-section/Deck3.jpg",
      width: 540,
      height: 700,
      alt: "Construction worker with yellow helmet using a power tool",
    },
  }, {
    id: "p4",
    title: "On‑site Work",
    category: "renovation",
    img: {
      src: "/assets/images/services-section/kapı.jpg",
      width: 540,
      height: 700,
      alt: "Construction worker with yellow helmet using a power tool",
    },
  }, {
    id: "p5",
    title: "On‑site Work",
    category: "renovation",
    img: {
      src: "/assets/images/services-section/kapı.jpg",
      width: 540,
      height: 700,
      alt: "Construction worker with yellow helmet using a power tool",
    },
  }, {
    id: "p6",
    title: "On‑site Work",
    category: "renovation",
    img: {
      src: "/assets/images/services-section/kapı.jpg",
      width: 540,
      height: 700,
      alt: "Construction worker with yellow helmet using a power tool",
    },
  }, {
    id: "p7",
    title: "On‑site Work",
    category: "renovation",
    img: {
      src: "/assets/images/services-section/mutfak.jpg",
      width: 540,
      height: 700,
      alt: "Construction worker with yellow helmet using a power tool",
    },
  }, {
    id: "p8",
    title: "On‑site Work",
    category: "renovation",
    img: {
      src: "/assets/images/services-section/mutfak.jpg",
      width: 540,
      height: 700,
      alt: "Construction worker with yellow helmet using a power tool",
    },
  }, {
    id: "p9",
    title: "On‑site Work",
    category: "renovation",
    img: {
      src: "/assets/images/services-section/kapı.jpg",
      width: 540,
      height: 700,
      alt: "Construction worker with yellow helmet using a power tool",
    },
  },
]



function SectionTitle() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.5 } // %50 görünür olunca tetikler
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <div ref={ref} className="text-center space-y-3">

</div>

  )
}



function ProjectCard({
  project,
  onEnlarge,
}: {
  project: Project
  onEnlarge: (p: Project) => void
}) {
  return (

    <div className="relative group overflow-hidden max-h-[1200px]">
      <Image
        src={project.img.src || "/placeholder.svg"}
        alt={project.img.alt}
        width={project.img.width}
        height={project.img.height}
        className="w-full object-cover aspect-square rounded-sm"
      />
      {/* Hover overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 bg-neutral-900/60" aria-hidden="true"
      />
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
        {/* Top-left text */}
        <div className="mt-6 md:mt-7 ml-6 md:ml-7 text-white">
          <div className="text-[13px] md:text-sm font-semibold tracking-wider">{project.category.toUpperCase()}</div>
          <div className="mt-1 text-2xl md:text-3xl font-extrabold leading-tight">{project.title}</div>
        </div>
        {/* Bottom-left + button */}
        <div className="mb-6 md:mb-7 ml-6 md:ml-7">
          <button
            type="button"
            onClick={() => onEnlarge(project)}
            className="pointer-events-auto inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/80 text-white bg-transparent
            hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Görseli büyüt"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>


  )
}

export default function OurProjectsSection() {
  const [active, setActive] = useState<string>("all")
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  function handleEnlarge(p: Project) {
    setSelected(p)
    setOpen(true)
  }

  return (
    <section className="w-full bg-[#f5f5f5] ">

    <div className=" w-full mx-auto px-6 md:px-8 py-12 md:py-16 lg:py-20">
      <SectionTitle />

      {/* Tabs */}<h3 className="leading-tight font-semibold" style={{ fontSize: "1.8rem", paddingBottom: "35px" }}></h3>
    <div className="">
          <Tabs value={active} onValueChange={setActive} className="w-full">
            <TabsList className="flex max-w-6xl  justify-center  mx-auto gap-2 md:gap-6 border-b border-muted/50 rounded-none bg-transparent p-0 flex-wrap">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="relative rounded-none bg-transparent leading-tight font-semibold shadow-none px-3 md:px-4 py-3 text-xs md:text-sm font-medium tracking-wide 
                  data-[state=active]:text-foreground data-[state=active]:font-semibold
                  hover:text-foreground
                  data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:-bottom-[1px] data-[state=active]:after:h-0.5 data-[state=active]:after:bg-amber-500"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Kartlar */}
            <TabsContent value={active} className="mt-8 md:mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {filtered.slice(0, 9).map((p) => (
                  <ProjectCard key={p.id} project={p} onEnlarge={handleEnlarge} />
                ))}
              </div>

              {/* More Projects Button */}
              {filtered.length > 9 && ( // Only show if there are more than 9 projects
                <div className="mt-10 flex justify-center">
                  <button className="relative inline-block px-8 py-3 font-semibold text-sm tracking-wide uppercase border border-amber-500 text-amber-500 overflow-hidden group">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Tümünü Gör
                    </span>
                    <span className="absolute inset-0 bg-amber-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

      {/* Lightbox dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {selected ? (
            <Image
              src={selected.img.src || "/placeholder.svg"}
              alt={selected.img.alt}
              width={selected.img.width * 2}
              height={selected.img.height * 2}
              className="w-full h-auto"
              priority
            />
          ) : null}
        </DialogContent>
      </Dialog>
      </div>
    </section>
  )
}