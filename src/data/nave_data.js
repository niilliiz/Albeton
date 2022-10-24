// const base = "";
const NavLinks = [
  { title: "Live", path: "/" },
  { title: "Push", path: "/push" },
  { title: "Notes", path: "/note" },
  { title: "Link", path: "/link" },
  {
    title: "Shop",
    path: "/shop",
    links: [
      { title: "Overview", path: "/shop/" },
      { title: "Live", path: "/shop/live" },
      { title: "Push", path: "/shop/push" },
      {
        title: "Educational offers",
        path: "/shop/educational-offers",
      },
      { title: "Max for live", path: "/shop/Max-for-live" },
      { title: "Making music", path: "/shop/making-music" },
      { title: "Merchandise", path: "/shop/merchandise" },
    ],
  },
  { title: "Packs", path: "/packs" },
  { title: "Help", path: "/help" },
  { title: "More+", path: "/more" },
];

export default NavLinks;
