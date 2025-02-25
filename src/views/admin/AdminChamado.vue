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
    <main class="container my-5">
      <div class="row">
        <!-- Left Section -->
        <div class="col-md-6">
          <h1 class="fw-bold mb-4">Registro de Chamado</h1>
          <div class="list-group mb-4">
            <h3 class="mb-3">Chamados Abertos</h3>
            <div v-for="(chamado, index) in chamados" :key="index" class="list-group-item">
              <p><strong>Descrição:</strong> {{ chamado.descricao }}</p>
              <p><strong>Categoria:</strong> {{ chamado.categoria }}</p>
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div class="col-md-6">
          <h2 class="fw-bold mb-4">Novo Chamado</h2>
          <form @submit.prevent="registrarChamado">
            <div class="mb-3">
              <label for="descricao" class="form-label">Descrição</label>
              <textarea v-model="novoChamado.descricao" class="form-control" rows="3" placeholder="Descreva o problema" required></textarea>
            </div>
            <div class="mb-3">
              <label for="categoria" class="form-label">Categoria</label>
              <select v-model="novoChamado.categoria" class="form-select" required>
                <option value="" selected disabled>Selecione uma categoria</option>
                <option value="Elétrica">Elétrica</option>
                <option value="Hidráulica">Hidráulica</option>
                <option value="Pintura">Pintura</option>
                <option value="Refrigeração">Refrigeração</option>
                <option value="Mobiliário">Mobiliário</option>
                <option value="Limpeza">Limpeza</option>
                <option value="Segurança">Segurança</option>
                <option value="Jardinagem">Jardinagem</option>
                <option value="Informática">Informática</option>
                <option value="Construção">Construção</option>
                <option value="Iluminação">Iluminação</option>
                <option value="Telefonia">Telefonia</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            <button type="submit" class="btn btn-outline-primary">Registrar Chamado</button>
          </form>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-3">
      <div class="container text-center">
        <p>© 2024 Building Management. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AdminChamado", // Nome corrigido
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
