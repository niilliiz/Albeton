// const base = "";
const NavLinks = [
  { title: "Live", path: "/live", disable: true },
  { title: "Push", path: "/push", disable: true },
  { title: "Notes", path: "/note", disable: true },
  { title: "Link", path: "/link", disable: true },
  {
    title: "Shop",
    path: "/shop",
    disable: false,
    links: [
      { title: "Overview", path: "/shop", disable: true },
      { title: "Live", path: "/shop/live", disable: true },
      { title: "Push", path: "/shop/push", disable: true },
      {
        title: "Educational offers",
        path: "/shop/educational-offers",
        disable: true,
      },
      { title: "Max for live", path: "/shop/Max-for-live", disable: true },
      { title: "Making music", path: "/shop/making-music", disable: true },
      { title: "Merchandise", path: "/shop/merchandise", disable: true },
    ],
  },
  { title: "Packs", path: "/packs", disable: false },
  { title: "Help", path: "/help", disable: true },
  { title: "More+", path: "/more", disable: true },
];

export default NavLinks;
