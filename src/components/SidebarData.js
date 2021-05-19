import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "ProductListing",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About us",
    path: "/about",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Reviews",
    path: "/review",
    icon: <FaIcons.FaThumbsUp />,
    cName: "nav-text",
  },

  {
    title: "Contact Us",
    path: "/contact",
    icon: <IoIcons.IoMdContact />,
    cName: "nav-text",
  },
];
