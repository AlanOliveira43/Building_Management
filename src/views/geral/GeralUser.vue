<template>
  <div :data-theme="theme" class="min-h-screen" :class="themeClass">
    <!-- Header -->
    <header class="bg-gray-800 py-3">
      <div class="container mx-auto flex justify-between items-center px-4">
        <div class="logo">
          <!-- Logo aqui -->
        </div>
        <nav aria-label="Navegação Principal">
          <!-- Links de navegação -->
        </nav>
        <div class="flex space-x-3">
          <button @click="toggleTheme" class="btn-primary">
            {{ themeLabel }}
          </button>
          <button @click="logout" class="btn-danger">
            Log out
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto text-center my-12">
      <h1 class="text-4xl font-bold mb-6">Duck Building Management</h1>

      <!-- Acesso -->
      <section class="mt-5">
        <h2 class="text-2xl text-white font-semibold mb-6">Área de Acessos</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AccessCard v-for="item in acessos" :key="item.titulo" :item="item" />
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import AccessCard from "@/components/AccessCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DuckBuildingManagement",
  components: { AccessCard, Footer },
  setup() {
    const theme = ref("dark");
    const router = useRouter();

    const acessos = ref([
      { titulo: "Abrir chamado", icone: "bx bx-wrench", link: "/user/UserChamados", textoBotao: "Acessar Chamados", descricao: "Aqui você pode abrir chamados de manutenção." },
      { titulo: "Ver notificações", icone: "bx bx-bell", link: "/user/UserNotificacoes", textoBotao: "Acessar Notificações", descricao: "Veja se há notificações de entrega ou visita." },
      { titulo: "Reservar área comum", icone: "bi bi-brightness-high-fill", link: "/user/UserReserva", textoBotao: "Acessar Reserva", descricao: "Reserve aqui o uso da área comum." },
      { titulo: "Reservar carregamento", icone: "bi bi-ev-station", link: "/user/UserReservaEV", textoBotao: "Acessar Reserva", descricao: "Reserve aqui a estação de carregamento do seu carro elétrico." }
    ]);

    const themeClass = computed(() => theme.value === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black");
    const themeLabel = computed(() => theme.value === "dark" ? "Modo Claro" : "Modo Escuro");

    const toggleTheme = () => theme.value = theme.value === "dark" ? "light" : "dark";
    const logout = () => router.push("/geral/GeralLanding");

    return { theme, themeClass, themeLabel, toggleTheme, logout, acessos };
  }
};
</script>

<style scoped>
.btn-primary {
  @apply border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition;
}

.btn-danger {
  @apply border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition;
}
</style>
