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
            <button class="btn btn-outline-primary" @click="logout">Log out</button>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container my-5">
      <div class="row">
        <!-- Left Section -->
        <div class="col-md-6">
          <h1 class="fw-bold mb-4">Registro de Chamado</h1>
          <div id="chamados-abertos" class="list-group mb-4">
            <h3 class="mb-3">Seus Chamados Abertos</h3>
            <div v-for="chamado in chamados" :key="chamado.id" class="list-group-item">
              <h5>{{ chamado.categoria }}</h5>
              <p><strong>Local:</strong> {{ chamado.local }}</p>
              <p><strong>Descrição:</strong> {{ chamado.descricao }}</p>
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div class="col-md-6">
          <h2 class="fw-bold mb-3">Novo Chamado</h2>
          <form @submit.prevent="enviarChamado">
            <div class="mb-3">
              <label for="name" class="form-label">Nome</label>
              <input type="text" class="form-control" v-model="novoChamado.nome" placeholder="Digite seu nome" required />
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">Categoria do chamado</label>
              <select class="form-select" v-model="novoChamado.categoria" required>
                <option disabled value="">Selecione uma categoria</option>
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
            <div class="mb-3">
              <label for="location" class="form-label">Local do chamado</label>
              <input type="text" class="form-control" v-model="novoChamado.local" placeholder="Digite o local" required />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Descrição</label>
              <textarea class="form-control" v-model="novoChamado.descricao" rows="3" placeholder="Descreva o problema" required></textarea>
            </div>
            <button type="submit" class="btn btn-secondary">Enviar</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name : "AdminChamados",
  data() {
    return {
      chamados: [], // Lista de chamados abertos
      novoChamado: {
        nome: "",
        categoria: "",
        local: "",
        descricao: "",
      },
    };
  },
  methods: {
    toggleTheme() {
      // Alternar tema (exemplo para integrar com uma funcão global de tema)
      document.body.classList.toggle("dark-theme");
    },
    logout() {
      // Redirecionar para a página inicial ou realizar logout
      window.location.href = "geral/GeralLanding";
    },
    enviarChamado() {
      if (
        this.novoChamado.nome &&
        this.novoChamado.categoria &&
        this.novoChamado.local &&
        this.novoChamado.descricao
      ) {
        // Adiciona o novo chamado na lista
        this.chamados.push({ ...this.novoChamado, id: Date.now() });

        // Limpa os campos do formulário
        this.novoChamado = {
          nome: "",
          categoria: "",
          local: "",
          descricao: "",
        };
      } else {
        alert("Por favor, preencha todos os campos antes de enviar o chamado.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
