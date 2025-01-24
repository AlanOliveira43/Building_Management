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
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h2 class="text-center mb-4">Vote na Proposta</h2>
            <form @submit.prevent="votar" class="p-4 border rounded shadow">
              <!-- Nome -->
              <div class="mb-3">
                <label for="name" class="form-label fw-bold">Nome</label>
                <input type="text" class="form-control" v-model="voto.nome" placeholder="Digite seu nome" required />
              </div>
  
              <!-- Proposta -->
              <div class="mb-3">
                <label for="proposal" class="form-label fw-bold">Proposta</label>
                <select v-model="voto.proposta" class="form-select" required>
                  <option value="proposta1">Proposta 1</option>
                  <option value="proposta2">Proposta 2</option>
                  <option value="proposta3">Proposta 3</option>
                </select>
              </div>
  
              <!-- Botão de Enviar -->
              <div class="text-center">
                <button type="submit" class="btn btn-secondary w-100">Votar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <!-- Resultados -->
      <div class="container mt-5">
        <h3 class="text-center">Votos Registrados</h3>
        <ul class="list-group mt-3">
          <li class="list-group-item" v-for="(voto, index) in votos" :key="index">
            {{ voto.nome }} votou na {{ voto.proposta }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        voto: {
          nome: "",
          proposta: "",
        },
        votos: [],
      };
    },
    methods: {
      toggleTheme() {
        document.body.classList.toggle("dark-theme");
      },
      logout() {
        window.location.href = "../../index.html";
      },
      votar() {
        if (this.voto.nome && this.voto.proposta) {
          this.votos.push({ ...this.voto });
          this.voto.nome = "";
          this.voto.proposta = "";
          alert("Voto registrado com sucesso!");
        } else {
          alert("Por favor, preencha todos os campos antes de votar.");
        }
      },
    },
  };
  </script>
  
  
  