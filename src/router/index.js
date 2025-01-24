import { createRouter, createWebHistory } from "vue-router";
import AdminAcessos from "@/views/admin/AdminAcessos.vue";
import AdminEstoque from "@/views/admin/AdminEstoque.vue";
import AdminChamado from "@/views/admin/AdminChamado.vue";
import AdminManutencao from "@/views/admin/AdminManutencao.vue";
import AdminRelatorios from "@/views/admin/AdminRelatorios.vue";
import AdminReserva from "@/views/admin/AdminReserva.vue";
import AdminComunicacao from "@/views/admin/AdminComunicacao.vue";
import UserChamados from "@/views/user/UserChamados.vue";
import UserNotificacoes from "@/views/user/UserNotificacoes.vue";
import UserReserva from "@/views/user/UserReserva.vue";
import UserReservaEV from "@/views/user/UserReservaEV.vue";
import UserVotacao from "@/views/user/UserVotacao.vue";
import GeralAdmin from "@/views/geral/GeralAdmin.vue";
import GeralGerencia from "@/views/geral/GeralGerencia.vue";
import GeralLanding from "@/views/geral/GeralLanding.vue";
import GeralMenu from "@/views/geral/GeralMenu.vue";
import GeralPortaria from "@/views/geral/GeralPortaria.vue";
import GeralUser from "@/views/geral/GeralUser.vue";
import GeralZelador from "@/views/geral/GeralZelador.vue";

const routes = [
  {
    path: "/admin/AdminAcessos", // URL ajustada para ser mais consistente
    name: "AdminAcessos",
    component: AdminAcessos,
  },
  {
    path: "/admin/AdminEstoque",
    name: "AdminEstoque",
    component: AdminEstoque,
  },
  {
    path: "/admin/chamado",
    name: "AdminChamado",
    component: AdminChamado,
  },
  {
    path: "/admin/AdminComunicacao",
    name: "AdminComunicacao",
    component: AdminComunicacao,
  },
  {
    path: "/admin/manutencao",
    name: "AdminManutencao",
    component: AdminManutencao,
  },
  {
    path: "/admin/AdminRelatorios",
    name: "AdminRelatorios",
    component: AdminRelatorios,
  },
  {
    path: "/admin/AdminReserva",
    name: "AdminReserva",
    component: AdminReserva,
  },
  {
    path: "/user/UserChamados",
    name: "UserChamados",
    component: UserChamados,
  },
  {
    path: "/user/UserNotificacoes",
    name: "UserNotificacoes",
    component: UserNotificacoes,
  },
  {
    path: "/user/UserReserva",
    name: "UserReserva",
    component: UserReserva,
  },
  {
    path: "/user/UserReservaEV",
    name: "UserReservaEV",
    component: UserReservaEV,
  },
  {
    path: "/user/UserVotacao",
    name: "UserVotacao",
    component: UserVotacao,
  },
  
  {
    path: "/geral/GeralAdmin",
    name: "GeralAdmin",
    component: GeralAdmin,
  },
  {
    path: "/geral/Geralgerencia",
    name: "GeralGerencia",
    component: GeralGerencia,
  },
  {
    path: "/geral/GeralLanding",
    name: "GeralLanding",
    component: GeralLanding,
  },
  {
    path: "/geral/GeralMenu",
    name: "GeralMenu",
    component: GeralMenu,
  },
  {
    path: "/geral/GeralPortaria",
    name: "GeralPortaria",
    component: GeralPortaria,
  },
  {
    path: "/geral/GeralUser",
    name: "GeralUser",
    component: GeralUser,
  },
  {
    path: "/geral/GeralZelador",
    name: "GeralZelador",
    component: GeralZelador,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
