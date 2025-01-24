import { createRouter, createWebHistory } from "vue-router";
import AdminAcessos from "@/views/admin/AdminAcessos.vue";
import AdminEstoque from "@/views/admin/AdminEstoque.vue";
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
import AdminComunicacao from "@/views/admin/AdminComunicacao.vue";

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
    path: "/admin/chamado",
    name: "AdminChamado",
    component: AdminChamado,
  },
  {
    path: "/admin/comunicacao",
    name: "AdminComunicacao",
    component: AdminComunicacao,
  },
  {
    path: "/admin/manutencao",
    name: "AdminManutencao",
    component: AdminManutencao,
  },
  {
    path: "/admin/relatorio",
    name: "AdminRelatorio",
    component: AdminRelatorio,
  },
  {
    path: "/admin/reserva",
    name: "AdminReserva",
    component: AdminReserva,
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
  {
    path: "/user/reserva",
    name: "UserReserva",
    component: UserReserva,
  },
  {
    path: "/user/reservaev",
    name: "UserReservaEv",
    component: UserReservaEV,
  },
  {
    path: "/user/votacao",
    name: "UserVotacao",
    component: UserVotacao,
  },
  {
    path: "/geral/admin",
    name: "GeralAdmin",
    component: GeralAdmin,
  },
  {
    path: "/geral/gerencia",
    name: "GeralGerencia",
    component: GeralGerencia,
  },
  {
    path: "/geral/landing",
    name: "GeralLanding",
    component: GeralLanding,
  },
  {
    path: "/geral/menu",
    name: "GeralMenu",
    component: GeralMenu,
  },
  {
    path: "/geral/Portaria",
    name: "GeralPortaria",
    component: GeralPortaria,
  },
  {
    path: "/geral/user",
    name: "GeralUser",
    component: GeralUser,
  },
  {
    path: "/geral/zelador",
    name: "GeralZelador",
    component: GeralZelador,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
