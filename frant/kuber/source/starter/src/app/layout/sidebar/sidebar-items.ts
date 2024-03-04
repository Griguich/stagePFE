import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "MENUITEMS.MAIN.TEXT",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["All"],
    submenu: [],
  },

  // Admin Modules
  {
    path: "",
    title: "MENUITEMS.DASHBOARD.TEXT",
    iconType: "feather",
    icon: "monitor",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/dashboard/main",
        title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD1",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/dashboard/dashboard2",
        title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD2",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  // Employee Modules
  {
    path: "/employee/dashboard",
    title: "MENUITEMS.EMPLOYEE.DASHBOARD",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Employee"],
    submenu: [],
  },

  // Client Modules
  {
    path: "/client/dashboard",
    title: "MENUITEMS.CLIENT.DASHBOARD",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Client"],
    submenu: [],
  },

  // Common Modules
  {
    path: "",
    title: "Authentication",
    iconType: "feather",
    icon: "user-check",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/authentication/signin",
        title: "Sign In",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/signup",
        title: "Sign Up",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/forgot-password",
        title: "Forgot Password",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/locked",
        title: "Locked",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/page404",
        title: "404 - Not Found",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/authentication/page500",
        title: "500 - Server Error",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Extra Pages",
    iconType: "feather",
    icon: "anchor",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/extra-pages/blank",
        title: "Blank Page",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "Multi level Menu",
    iconType: "feather",
    icon: "chevrons-down",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/multilevel/first1",
        title: "First",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/",
        title: "Second",
        iconType: "",
        icon: "",
        class: "ml-sub-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [
          {
            path: "/multilevel/secondlevel/second1",
            title: "Second 1",
            iconType: "",
            icon: "",
            class: "ml-menu2",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
          {
            path: "/",
            title: "Second 2",
            iconType: "",
            icon: "",
            class: "ml-sub-menu2",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [
              {
                path: "/multilevel/thirdlevel/third1",
                title: "third 1",
                iconType: "",
                icon: "",
                class: "ml-menu3",
                groupTitle: false,
                badge: "",
                badgeClass: "",
                role: [""],
                submenu: [],
              },
            ],
          },
        ],
      },
      {
        path: "/multilevel/first3",
        title: "Third",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
];
