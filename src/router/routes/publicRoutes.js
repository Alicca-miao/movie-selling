export default [
    { path: "/", redirect: "/data" },
    /* 正在热映 */
   {
      path: "/film/playing",
      name: "playing",
      meta: { menuIndex: "1-0" },
      component: () => import("@views/film/Playing.vue"),
   },

   /* 即将上映 */
   {
      path: "/film/coming",
      name: "coming",
      meta: { menuIndex: "1-1" },
      component: () => import("@views/film/Coming.vue"),
   },

   /* 用户管理 */
   {
      path: "/user",
      name: "user",
      meta: { menuIndex: "3" },
      component: () => import("@views/UserList.vue"),
   },

   {
      path: "/film/:id([a-z\\d]{24})",
      name: "detail",
      component: () => import("@views/film/Detail.vue"),
   },

   {
      path: "/film/add",
      name: "filmadd",
      component: () => import("@views/film/DetailAdd.vue"),
   },

   {
      path: "/login",
      name: "login",
      meta: { hidePageHeader: true },
      component: () => import("@views/Login.vue"),
   },

   /* 404 */
   {
      path: "/:pm(.*)*",
      name: "notfound",
      component: () => import("@views/NotFound.vue"),
   },
];



]