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
            <!-- Navegação pode ser adicionada aqui -->
          </ul>
        </nav>
        <button class="btn btn-outline-primary" @click="logout">Log out</button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container my-5">
      <h1 class="fw-bold mb-4">Notificação de Entregas/Visitas</h1>

      <!-- Lista de Entregas -->
      <div class="card mb-3" v-for="entrega in entregas" :key="entrega.id">
        <div class="card-body">
          <h5 class="card-title">Entrega Pendente</h5>
          <p class="card-text">
            <strong>Item:</strong> {{ entrega.item }}<br />
            <strong>Remetente:</strong> {{ entrega.remetente }}<br />
            <strong>Data de Chegada:</strong> {{ entrega.dataChegada }}<br />
            <strong>Status:</strong> {{ entrega.status }}
          </p>
        </div>
      </div>

      <!-- Communication Panel -->
      <section class="mt-5">
        <h2 class="fw-bold mb-4">Painel de Comunicação</h2>
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h3 class="mb-0">Avisos e Atualizações</h3>
          </div>
          <div class="card-body">
            <!-- Notifications Section -->
            <ul class="list-group mb-4">
              <li class="list-group-item" v-for="aviso in avisos" :key="aviso.id">
                {{ aviso.texto }}
              </li>
            </ul>

            <!-- Add New Notification -->
            <form @submit.prevent="adicionarAviso">
              <div class="mb-3">
                <label for="novoAviso" class="form-label">Novo Aviso</label>
                <textarea id="novoAviso" class="form-control" v-model="novoAviso" rows="3" placeholder="Digite um novo aviso"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Adicionar Aviso</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name : "UserNotificacoes",
  data() {
    return {
      entregas: [
        {
          id: 1,
          item: "Encomenda de Eletrônicos",
          remetente: "Loja Online XYZ",
          dataChegada: "20/01/2025",
          status: "Pendente para retirada",
        },
      ],
      avisos: [],
      novoAviso: "",
    };
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark-theme");
    },
    logout() {
      window.location.href = "../../index.html";
    },
    adicionarAviso() {
      if (this.novoAviso.trim() !== "") {
        this.avisos.push({ id: Date.now(), texto: this.novoAviso });
        this.novoAviso = ""; // Limpa o campo de texto
      } else {
        alert("Por favor, insira um texto para o aviso.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
