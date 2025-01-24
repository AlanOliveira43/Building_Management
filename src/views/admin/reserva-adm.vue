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
    <main class="container my-4">
      <section id="reservas">
        <h2 class="mb-4">Reservas Feitas</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data</th>
              <th>Hora Início</th>
              <th>Hora Final</th>
              <th>Local</th>
              <th>Adicionais</th>
              <th>Reserva dividida com</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(reserva, index) in reservas" :key="index">
              <td>{{ reserva.id }}</td>
              <td>{{ reserva.nome }}</td>
              <td>{{ reserva.data }}</td>
              <td>{{ reserva.horaInicio }}</td>
              <td>{{ reserva.horaFinal }}</td>
              <td>{{ reserva.local }}</td>
              <td>{{ reserva.adicionais }}</td>
              <td>{{ reserva.divididaCom }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>

    <!-- Footer -->
    <footer class="text-white text-center py-3">
      <p>© 2024 Building Management. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservas: [
        {
          id: 1,
          nome: "João Silva",
          data: "2024-01-25",
          horaInicio: "10:00",
          horaFinal: "12:00",
          local: "Salão de Festas",
          adicionais: "Mesas e cadeiras",
          divididaCom: "Maria Oliveira",
        },
        {
          id: 2,
          nome: "Ana Souza",
          data: "2024-01-26",
          horaInicio: "14:00",
          horaFinal: "16:00",
          local: "Churrasqueira",
          adicionais: "Decoração",
          divididaCom: "Carlos Pereira",
        },
      ],
    };
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark-theme");
    },
    logout() {
      window.location.href = "../../index.html";
    },
  },
};
</script>

<style scoped>
/* Adicione estilos específicos para este componente */
</style>
