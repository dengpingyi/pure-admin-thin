import { $t } from "/@/plugins/i18n";
const Layout = () => import("/@/layout/index.vue");

const remainingRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("/@/views/login/index.vue"),
    meta: {
      title: $t("menus.hslogin"),
      showLink: false,
      rank: 101
    }
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      icon: "home-filled",
      title: $t("menus.hshome"),
      showLink: false,
      rank: 104
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "redirect",
        component: () => import("/@/layout/redirect.vue")
      }
    ]
  },
  {
    path: "/system",
    component: Layout,
    meta: {
      icon: "home-filled",
      title: "设置",
      rank: 7
    },
    children: [
      {
        path: "/system/index",
        name: "systemindex",
        component: () => import("/@/views/system/index.vue"),
        meta: {
          title: "设置a"
        }
      },
      {
        path: "/system/test",
        name: "systemtest",
        component: () => import("/@/views/system/test.vue"),
        meta: {
          title: "设置b"
        }
      }
    ]
  },
  {
    path: "/about",
    component: Layout,
    meta: {
      icon: "home-filled",
      title: "关于",
      rank: 8
    },
    redirect: "/about/index",
    children: [
      {
        path: "/about/index",
        name: "aboutindex",
        component: () => import("/@/views/about/index.vue"),
        meta: {
          title: "关于"
        }
      }
    ]
  }
];

export default remainingRouter;
