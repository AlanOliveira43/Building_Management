import { createRouter, createWebHistory } from "vue-router";
import AdminAcessos from "@/views/admin/AdminAcessos.vue";
import AdminEstoque from "@/views/admin/AdminEstoque.vue";
import UserChamados from "@/views/user/UserChamados.vue";
import UserNotificacoes from "@/views/user/UserNotificacoes.vue";

const routes = [
  {
    path: "/admin/acessos", // URL ajustada para ser mais consistente
    name: "AdminAcessos",
    component: AdminAcessos,
  },
  {
    path: "/admin/estoque",
    name: "AdminEstoque",
    component: AdminEstoque,
  },
  {
    path: "/user/chamados",
    name: "UserChamados",
    component: UserChamados,
  },
  {
    path: "/user/notificacoes",
    name: "UserNotificacoes",
    component: UserNotificacoes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
