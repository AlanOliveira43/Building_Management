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
      <h1 class="text-center">Reserva de Carregador</h1>
      <form @submit.prevent="reservar">
        <div class="form-group">
          <label for="conector">Conector</label>
          <select class="form-control" v-model="reserva.conector" required>
            <option value="carga_lenta">Carga lenta</option>
            <option value="carga_rapida">Carga rápida</option>
          </select>
        </div>
        <div class="form-group">
          <label for="data">Data</label>
          <input type="date" class="form-control" v-model="reserva.data" required />
        </div>
        <div class="form-group">
          <label for="horario-inicio">Horário de Início</label>
          <input type="time" class="form-control" v-model="reserva.horarioInicio" required />
        </div>
        <div class="form-group mt-3">
          <label for="horario-fim">Horário de Término</label>
          <input type="time" class="form-control" v-model="reserva.horarioFim" required />
        </div>
        <button type="submit" class="btn btn-secondary mt-3">Reservar</button>
      </form>

      <div id="mensagem" class="mt-3" v-if="mensagem">
        <p>{{ mensagem }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reserva: {
        conector: "",
        data: "",
        horarioInicio: "",
        horarioFim: "",
      },
      mensagem: "",
    };
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark-theme");
    },
    logout() {
      window.location.href = "geral/GeralLanding";
    },
    reservar() {
      const { conector, data, horarioInicio, horarioFim } = this.reserva;

      if (conector && data && horarioInicio && horarioFim) {
        this.mensagem = `Reserva realizada com sucesso para o conector ${conector} no dia ${data}, das ${horarioInicio} às ${horarioFim}.`;
        this.reserva = {
          conector: "",
          data: "",
          horarioInicio: "",
          horarioFim: "",
        };
      } else {
        alert("Por favor, preencha todos os campos antes de reservar.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
