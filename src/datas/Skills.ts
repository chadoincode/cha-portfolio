export type Skill = {
  name: string
  icon: string
  category: string
}

export const skills:Skill[] = [
  {
    name: "HTML",
    icon: "catppuccin-html",
    category: "Front-End"
  },
  {
    name: "CSS",
    icon: "catppuccin-css3",
    category: "Front-End"
  },
  {
    name: "TailwindCSS",
    icon: "catppuccin-tailwind",
    category: "Front-End"
  },
  {
    name: "ReactJS",
    icon: "catppuccin-typescript-react",
    category: "Web Development"
  },
  {
    name: "Astro",
    icon: "catppuccin-astro",
    category: "Web Development"
  },
  {
    name: "JavaScript",
    icon: "catppuccin-javascript",
    category: "Web Development"
  },
  {
    name: "TypeScript",
    icon: "catppuccin-typescript",
    category: "Web Development"
  },
  // {
  //   name: "Adobe Premiere Pro",
  //   icon: "",
  //   category: "Video Editing"
  // },
  {
    name: "After Effects",
    icon: "catppuccin-adobe-ae",
    category: "Video Editing"
  },
  {
    name: "Figma",
    icon: "catppuccin-figma",
    category: "Graphic Design"
  }
]