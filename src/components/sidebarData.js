import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Present",
    path: "/present",
    icon: <CgIcons.CgTimer />,
    cName: "nav-text",
  },
  // {
  //   title: "Home",
  //   path: "/",
  //   icon: <AiIcons.AiFillHome />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Home",
  //   path: "/home",
  //   icon: <AiIcons.AiFillHome />,
  //   cName: "nav-text",
  // },
];
