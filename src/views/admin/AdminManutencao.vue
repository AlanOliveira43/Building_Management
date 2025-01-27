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

    <!-- Main Content -->
    <main class="container col-md-10">
      <h1 class="mt-4">Painel de Visualização do Status</h1>
      <div class="row">
        <div class="col-md-6">
          <h2>Áreas Comuns</h2>
          <ul class="list-group">
            <li v-for="(area, index) in areasComuns" :key="index" class="list-group-item">
              <h5>{{ area.nome }}</h5>
              <p>Status: {{ area.status }}</p>
              <p>Última manutenção: {{ area.ultimaManutencao }}</p>
              <p>Próxima inspeção: {{ area.proximaInspecao }}</p>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <h2>Cronograma de Manutenções</h2>
          <form @submit.prevent="cadastrarManutencao">
            <div class="form-group">
              <label for="area">Área</label>
              <select v-model="novaManutencao.area" class="form-control" id="area" required>
                <option v-for="opcao in opcoesAreas" :key="opcao" :value="opcao">{{ opcao }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="data-manutencao">Data da Manutenção</label>
              <input type="date" v-model="novaManutencao.data" class="form-control" id="data-manutencao" required />
            </div>
            <div class="form-group">
              <label for="local-manutencao">Local da Manutenção</label>
              <input
                type="text"
                v-model="novaManutencao.local"
                class="form-control"
                id="local-manutencao"
                placeholder="Digite o local da manutenção"
                required
              />
            </div>
            <button type="submit" class="btn btn btn-outline-secondary mt-3">Cadastrar Manutenção</button>
          </form>
          <div class="mt-4">
            <ul class="list-group">
              <li v-for="(manutencao, index) in cronograma" :key="index" class="list-group-item">
                <strong>Área:</strong> {{ manutencao.area }}<br />
                <strong>Data:</strong> {{ manutencao.data }}<br />
                <strong>Local:</strong> {{ manutencao.local }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name : "AdminManutencao",
  data() {
    return {
      areasComuns: [
        {
          nome: "Churrasqueira",
          status: "Disponível",
          ultimaManutencao: "01/10/2023",
          proximaInspecao: "01/12/2023",
        },
        {
          nome: "Salão de Festas",
          status: "Em Manutenção",
          ultimaManutencao: "15/09/2023",
          proximaInspecao: "15/11/2023",
        },
      ],
      opcoesAreas: [
        "Elevador",
        "Piscina",
        "Equipamentos de Ginástica",
        "Salão de Festas",
        "Churrasqueira",
        "Jardim",
        "Portaria",
        "Garagem",
        "Parque Infantil",
        "Quadra Poliesportiva",
        "Sala de Reunião",
      ],
      novaManutencao: {
        area: "",
        data: "",
        local: "",
      },
      cronograma: [],
    };
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark-theme");
    },
    logout() {
      window.location.href = "geral/GeralLanding";
    },
    cadastrarManutencao() {
      if (this.novaManutencao.area && this.novaManutencao.data && this.novaManutencao.local) {
        this.cronograma.push({ ...this.novaManutencao });
        this.novaManutencao = { area: "", data: "", local: "" };
        alert("Manutenção cadastrada com sucesso!");
      } else {
        alert("Por favor, preencha todos os campos antes de cadastrar a manutenção.");
      }
    },
  },
};
</script>

<style scoped>
/* Adicione estilos específicos para este componente */
</style>
