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
          v-for="option in adminOptions"
          :key="option.name"
        >
          <router-link :to="option.link" class="btn btn-secondary w-100 mb-3">
            {{ option.name }}
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
  name: "AdminPortal",
  data() {
    return {
      adminOptions: [
        {
          name: "Gerenciar Chamados",
          link: "/admin/conclusao-chamado",
        },
        {
          name: "Controle de Acessos",
          link: "/admin/acessos",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
}
</style>
