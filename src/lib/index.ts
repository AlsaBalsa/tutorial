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
    title: "Main",
    links: [
      {
        title: "About Me",
        href: "/about-me",
      },
      {
        title: "Theatre",
        href: "/theatre",
      },
    ],
  },
  {
    title: "Memes",
    links: [
      {
        title: "About Me",
        href: "/about-me",
      },
      {
        title: "Theatre",
        href: "/theatre",
      },
    ],
  },
  {
    title: "Memes",
    links: [
      {
        title: "About Me",
        href: "/about-me",
      },
      {
        title: "Theatre",
        href: "/theatre",
      },
    ],
  },
];

export const title = "Allistar Barrett";
