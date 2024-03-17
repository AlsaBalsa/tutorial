// place files you want to import through the `$lib` alias in this folder.
export interface Link {
  href: string;
  title: string;
}

export interface LinkSection {
  title: string;
  links: Link[];
}

export const pages: LinkSection[] = [
  {
    title: "Art",
    links: [
      {
        title: "Digital",
        href: "/about-me",
      },
      {
        title: "Painting",
        href: "/theatre",
      },
      {
        title: "Sketch",
        href: "/",
      },
      {
        title: "Sculpture",
        href: "/",
      },
    ],
  },
  {
    title: "Theatre",
    links: [
      {
        title: "Props",
        href: "/about-me",
      },
      {
        title: "Scenic",
        href: "/theatre",
      },
      {
        title: "Costumes",
        href: "/",
      },
    ],
  },
  {
    title: "Design",
    links: [
      {
        title: "Draftwork",
        href: "/about-me",
      },
      {
        title: "Rendering",
        href: "/",
      },
      {
        title: "Modeling",
        href: "/theatre",
      },
    ],
  },
  {
    title: "About Me",
    links: [
      {
        title: "Bio",
        href: "/about-me",
      },
      {
        title: "Resumes",
        href: "/theatre",
      },
    ],
  },
];

export const title = "Allistar Barrett";
