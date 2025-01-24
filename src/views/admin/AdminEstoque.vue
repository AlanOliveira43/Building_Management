
<template>
  <div>
    <!-- Header -->
    <header class="bg-dark py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <button class="btn btn-outline-primary" @click="toggleTheme">Alternar Tema</button>
        <div class="logo"></div>
        <button class="btn btn-outline-primary" @click="logout">Log out</button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container my-4">
      <h1 class="fw-bold mb-4">Gerenciamento de Estoque</h1>
      <div class="row">
        <!-- Product Grid -->
        <section class="col-md-9">
          <div class="d-flex justify-content-between mb-3">
            <button class="btn btn-outline-primary" @click="abrirModal">Adicionar Produto</button>
          </div>
          <div class="row g-3" id="product-grid">
            <div v-for="(produto, index) in produtos" :key="index" class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ produto.nome }}</h5>
                  <p class="card-text">{{ produto.descricao }}</p>
                  <p class="card-text"><strong>Quantidade:</strong> {{ produto.quantidade }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Modal for Adding Product -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Adicionar Produto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="adicionarProduto">
              <div class="mb-3">
                <label for="product-name" class="form-label">Nome do Produto</label>
                <input type="text" v-model="novoProduto.nome" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="product-description" class="form-label">Descrição</label>
                <textarea v-model="novoProduto.descricao" class="form-control" rows="3" required></textarea>
              </div>
              <div class="mb-3">
                <label for="product-quantity" class="form-label">Quantidade</label>
                <input type="number" v-model.number="novoProduto.quantidade" class="form-control" min="1" required>
              </div>
              <button type="submit" class="btn btn-primary w-100">Adicionar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
          <p>© 2024 Building Management. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AdminEstoque",
  data() {
    return {
      produtos: [],
      novoProduto: {
        nome: "",
        descricao: "",
        quantidade: null,
      },
    };
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark-theme");
    },
    
    adicionarProduto() {
      if (this.novoProduto.nome && this.novoProduto.descricao && this.novoProduto.quantidade > 0) {
        this.produtos.push({ ...this.novoProduto });
        this.novoProduto = { nome: "", descricao: "", quantidade: null };
        alert("Produto adicionado com sucesso!");
      } else {
        alert("Por favor, preencha todos os campos corretamente antes de adicionar o produto.");
      }
    },
  },
};
</script>

<style scoped>

</style>
