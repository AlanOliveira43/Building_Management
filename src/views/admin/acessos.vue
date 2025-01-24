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

    <!-- Main Content -->
    <div class="container mt-5">
      <div class="card-header bg-secondary text-center">
        <h2 class="fw-bold">Notificação de Visita/Entrega</h2>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1607975218354-4b0350f4c2dd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagem da Visita/Produto"
              class="img-fluid rounded"
              style="max-width: 300px; max-height: 800px; height: auto;"
            />
          </div>
          <div class="col-md-6">
            <p class="mt-3">Notifique o morador sobre a entrega:</p>
            <form @submit.prevent="notificar">
              <div class="mb-3">
                <label for="data" class="form-label">Data da Visita/Entrega:</label>
                <input type="date" v-model="notificacao.data" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="endereco" class="form-label">Endereço do Morador:</label>
                <input
                  type="text"
                  v-model="notificacao.endereco"
                  class="form-control"
                  placeholder="Digite o endereço completo"
                  required
                />
              </div>
              <button type="submit" class="btn btn-outline-secondary w-100">Confirmar</button>
            </form>

            <!-- Mensagem de Confirmação -->
            <div v-if="mensagem" class="alert alert-success mt-4">
              <p>Data Confirmada: {{ notificacao.data }}</p>
              <p>Endereço Confirmado: {{ notificacao.endereco }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notificacao: {
        data: "",
        endereco: "",
      },
      mensagem: false,
    };
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark-theme");
    },
    logout() {
      window.location.href = "../../index.html";
    },
    notificar() {
      if (this.notificacao.data && this.notificacao.endereco) {
        this.mensagem = true;
        setTimeout(() => {
          this.mensagem = false;
        }, 5000);
        this.notificacao.data = "";
        this.notificacao.endereco = "";
      } else {
        alert("Por favor, preencha todos os campos antes de confirmar.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
