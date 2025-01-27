<template>
  <div id="app" :data-bs-theme="theme">
    <header class="bg-dark text-white p-3">
      <div class="container">
        <h1>Painel Administrativo</h1>
        <p>Gerencie as atividades e o funcionamento do condomínio.</p>
      </div>
    </header>

    <main class="container mt-4">
      <div class="row">
        <!-- Gerenciamento de Chamados -->
        <div class="col-md-4">
          <router-link to="/admin/AdminChamado" class="btn btn-info w-100 mb-3">Gerenciar Chamados</router-link>
        </div>
        <!-- Manutenção -->
        <div class="col-md-4">
          <router-link to="/admin/AdminManutencao" class="btn btn-info w-100 mb-3">Manutenções</router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/admin/AdminEstoque" class="btn btn-info w-100 mb-3">Verificar estoque</router-link>
        </div>
      </div>
    </main>

    <footer class="text-center p-3 mt-3">
      <p>&copy; 2024 Building Management. Todos os direitos reservados.</p>
      <button id="toggle-theme" class="btn btn-secondary" @click="toggleTheme">
        {{ theme === 'dark' ? 'Modo Claro' : 'Modo Escuro' }}
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "PortalAdmin",
  data() {
    return {
      theme: "dark",
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
