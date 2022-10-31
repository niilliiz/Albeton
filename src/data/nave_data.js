// const base = "";
const NavLinks = [
  { title: "Live", path: "/live", isActive: false },
  { title: "Push", path: "/push", isActive: false },
  { title: "Notes", path: "/note", isActive: false },
  { title: "Link", path: "/link", isActive: false },
  {
    title: "Shop",
    path: "/shop",
    isActive: true,
    links: [
      { title: "Overview", path: "/shop/", isActive: true },
      { title: "Live", path: "/shop/live", isActive: false },
      { title: "Push", path: "/shop/push", isActive: false },
      {
        title: "Educational offers",
        path: "/shop/educational-offers",
        isActive: false,
      },
      { title: "Max for live", path: "/shop/Max-for-live", isActive: false },
      { title: "Making music", path: "/shop/making-music", isActive: false },
      { title: "Merchandise", path: "/shop/merchandise", isActive: false },
    ],
  },
  { title: "Packs", path: "/packs", isActive: true },
  { title: "Help", path: "/help", isActive: false },
  { title: "More+", path: "/more", isActive: false },
];

export default NavLinks;
