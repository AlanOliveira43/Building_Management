<template>
  <div>
    <!-- Header -->
    <header class="bg-dark py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
          <button class="btn btn-outline-primary" @click="toggleTheme">Alternar Tema</button>
        </div>
        <nav>
          <ul class="nav">
            <!-- Links de navegação podem ser adicionados aqui -->
          </ul>
        </nav>
        <button class="btn btn-outline-primary" @click="logout">Log out</button>
      </div>
    </header>

    <div class="container mt-5">
      <div class="card-header text-center bg-secondary">
        <h1 class="fw-bold">Comunicados para Moradores</h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="adicionarComunicado">
          <div class="mb-3">
            <label for="comunicado" class="form-label">Escreva seu comunicado:</label>
            <textarea v-model="novoComunicado.texto" class="form-control" placeholder="Digite o comunicado aqui..." rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="data-comunicado" class="form-label">Data do comunicado:</label>
            <input type="date" v-model="novoComunicado.data" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-outline-secondary">Adicionar Comunicado</button>
        </form>

        <hr />

        <h4 class="mt-4">Comunicados Recentes:</h4>
        <div class="comunicados mt-3">
          <div v-for="(comunicado, index) in comunicados" :key="index" class="alert alert-info">
            <p><strong>Data:</strong> {{ comunicado.data }}</p>
            <p><strong>Comunicado:</strong> {{ comunicado.texto }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminComunicacao",
  data() {
    return {
      comunicados: [],
      novoComunicado: {
        texto: "",
        data: "",
      },
    };
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark-theme");
    },
    logout() {
      window.location.href = "../../index.html";
    },
    adicionarComunicado() {
      if (this.novoComunicado.texto && this.novoComunicado.data) {
        this.comunicados.push({ ...this.novoComunicado });
        this.novoComunicado.texto = "";
        this.novoComunicado.data = "";
        alert("Comunicado adicionado com sucesso!");
      } else {
        alert("Por favor, preencha todos os campos antes de adicionar o comunicado.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
