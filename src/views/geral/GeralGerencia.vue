<template>
  <div>
    <!-- Header -->
    <header class="bg-dark text-white p-3">
      <div class="container">
        <h1>Painel Administrativo</h1>
        <p>Gerencie as atividades e o funcionamento do condomínio.</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mt-4">
      <div class="row">
        <div
          class="col-md-4"
          v-for="option in options"
          :key="option.label"
        >
          <router-link
            :to="option.link"
            class="btn btn-primary w-100 mb-3"
          >
            {{ option.label }}
          </router-link>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="text-center p-3 mt-3">
      <p>© 2024 Building Management. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AdminPanel",
  data() {
    return {
      options: [
        { label: "Gerenciar Chamados", link: "/admin/AdminChamado" },
        { label: "Relatórios e Finanças", link: "/admin/AdminRelatorios" },
        { label: "Gerenciar Reservas", link: "/admin/AdminReserva" },
        { label: "Enviar Comunicados", link: "/admin/AdminComunicacao" },
      ],
    };
  },
};
</script>

<style scoped>
/* Custom styles */
</style>
