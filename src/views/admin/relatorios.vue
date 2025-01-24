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
              <!-- Navigation Links Placeholder -->
            </ul>
          </nav>
          <button class="btn btn-outline-primary" @click="logout">Log out</button>
        </div>
      </header>
  
      <div class="container mt-5">
        <h1 class="text-center text-primary mb-4">Painel Financeiro do Condomínio</h1>
  
        <!-- Despesas -->
        <div class="section mb-4">
          <h2 class="text-secondary">Despesas</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(despesa, index) in despesas" :key="index">
                <td>{{ despesa.descricao }}</td>
                <td>{{ despesa.valor }}</td>
                <td>{{ despesa.data }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Receitas -->
        <div class="section mb-4">
          <h2 class="text-secondary">Receitas</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(receita, index) in receitas" :key="index">
                <td>{{ receita.descricao }}</td>
                <td>{{ receita.valor }}</td>
                <td>{{ receita.data }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Simulação de Orçamento -->
        <div class="section mb-4">
          <h2 class="text-secondary">Simulação de Orçamento</h2>
          <form @submit.prevent="simularOrcamento">
            <div class="mb-3">
              <label for="descricao" class="text-primary">Descrição do Projeto/Reparo:</label>
              <input type="text" v-model="orcamento.descricao" id="descricao" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="valor" class="text-black">Valor Estimado:</label>
              <input type="number" v-model.number="orcamento.valor" id="valor" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="impacto" class="text-black">Impacto Financeiro:</label>
              <input type="text" v-model="orcamento.impacto" id="impacto" class="form-control" readonly />
            </div>
            <button type="submit" class="btn btn btn-outline-secondary">Simular</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        despesas: [
          { descricao: "Manutenção do Elevador", valor: "R$ 1.200,00", data: "01/10/2023" },
        ],
        receitas: [
          { descricao: "Aluguel do Salão de Festas", valor: "R$ 500,00", data: "05/10/2023" },
        ],
        orcamento: {
          descricao: "",
          valor: null,
          impacto: "",
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
      simularOrcamento() {
        if (this.orcamento.valor) {
          this.orcamento.impacto = `Impacto estimado: R$ ${(this.orcamento.valor * 1.1).toFixed(2)}`;
        } else {
          alert("Por favor, insira o valor estimado do projeto/reparo.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos específicos para este componente */
  </style>
  