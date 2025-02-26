<template>
  <div :class="{'bg-dark text-white': theme === 'dark', 'bg-light text-dark': theme === 'light'}">
    <!-- Header -->
    <header class="p-3">
      <div class="container">
        <h1>Painel Administrativo</h1>
        <p>{{ greetingMessage }}</p>
        <button class="btn btn-outline-secondary" @click="toggleTheme">
          {{ theme === 'dark' ? 'Tema Claro' : 'Tema Escuro' }}
        </button>
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
          <button
            class="btn btn-secondary w-100 mb-3"
            @click="selectOption(option)"
          >
            {{ option.name }}
          </button>
        </div>
      </div>
      <div v-if="selectedOption" class="alert alert-info mt-3">
        Você selecionou: <strong>{{ selectedOption.name }}</strong>
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
      theme: "dark",
      selectedOption: null, // Opção selecionada
      adminOptions: [
        {
          name: "Gerenciar Chamados",
          link: "/admin/AdminChamado",
        },
        {
          name: "Controle de Acessos",
          link: "/admin/AdminAcessos",
        },
      ],
    };
  },
  computed: {
    greetingMessage() {
      const hour = new Date().getHours();
      if (hour < 12) {
        return "Bom dia! Gerencie as atividades do condomínio.";
      } else if (hour < 18) {
        return "Boa tarde! Gerencie as atividades do condomínio.";
      } else {
        return "Boa noite! Gerencie as atividades do condomínio.";
      }
    },
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    },
    selectOption(option) {
      this.selectedOption = option; // Atualiza a opção selecionada
      setTimeout(() => {
        this.$router.push(option.link); // Navega para a rota após 1 segundo
      }, 1000);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
}

.bg-dark {
  background-color: #343a40;
  color: #ffffff;
}

.bg-light {
  background-color: #f8f9fa;
  color: #000000;
}
</style>