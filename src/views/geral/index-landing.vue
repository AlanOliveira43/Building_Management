<template>
  <div>
    <!-- Header Superior -->
    <header class="bg-dark text-white py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <button class="btn btn-outline-primary" @click="toggleTheme">Alternar Tema</button>
        <router-link to="/login" class="btn btn-outline-primary">Log in</router-link>
      </div>
    </header>

    <!-- Hero Section -->
    <header class="hero text-center">
      <div>
        <h1 class="text-white">Bem-vindo ao Condomínio Vista Bela</h1>
        <p class="text-white">Viva com conforto, segurança e diversas opções de lazer.</p>
        <router-link to="#about" class="btn btn-primary btn-lg mt-3">Saiba Mais</router-link>
      </div>
    </header>

    <!-- Sobre o Condomínio -->
    <section id="about" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Sobre o Condomínio</h2>
        <p class="text-center">O Condomínio Vista Bela oferece uma experiência única de morar, com segurança, lazer e conveniência para toda a família. Nossa estrutura foi planejada para atender às necessidades dos moradores, proporcionando momentos inesquecíveis e o máximo de conforto.</p>
      </div>
    </section>

    <!-- Facilidades e Serviços -->
    <section id="facilities" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Facilidades e Serviços</h2>
        <div class="row text-center" v-for="(row, index) in facilities" :key="index">
          <div class="col-md-4" v-for="facility in row" :key="facility.title">
            <i :class="facility.icon" class="feature-icon"></i>
            <h4>{{ facility.title }}</h4>
            <p>{{ facility.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section id="testimonials" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">O que os moradores dizem</h2>
        <div class="row">
          <div class="col-md-6" v-for="testimonial in testimonials" :key="testimonial.name">
            <blockquote class="blockquote">
              <p>"{{ testimonial.quote }}"</p>
              <footer class="blockquote-footer">{{ testimonial.name }}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- Contato -->
    <section id="contact" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Entre em Contato</h2>
        <form @submit.prevent="handleSubmit">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="name" class="form-label">Nome</label>
              <input type="text" id="name" v-model="contact.name" class="form-control" placeholder="Seu Nome" required />
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" v-model="contact.email" class="form-control" placeholder="Seu Email" required />
            </div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Mensagem</label>
            <textarea id="message" v-model="contact.message" class="form-control" rows="5" placeholder="Digite sua mensagem aqui..." required></textarea>
          </div>
          <button type="submit" class="btn btn-outline-secondary w-100">Enviar</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2024 Condomínio Vista Bela. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "VistaBela",
  data() {
    return {
      facilities: [
        [
          {
            icon: "bi bi-house-door",
            title: "Segurança 24h",
            description: "Portaria e monitoramento por câmeras para sua tranquilidade.",
          },
          {
            icon: "bi bi-tree",
            title: "Área Verde",
            description: "Jardins e espaços ao ar livre para relaxar e curtir a natureza.",
          },
          {
            icon: "bi bi-people",
            title: "Salão de Festas",
            description: "Espaço ideal para celebrar momentos especiais com amigos e família.",
          },
        ],
        [
          {
            icon: "bi bi-basket",
            title: "Quadra Poliesportiva",
            description: "Esportes para todas as idades: futebol, vôlei, basquete e mais.",
          },
          {
            icon: "bi bi-droplet",
            title: "Piscina",
            description: "Piscina adulto e infantil para lazer e esportes aquáticos.",
          },
          {
            icon: "bi bi-lightning-charge",
            title: "Carregadores para Veículos Elétricos",
            description: "Infraestrutura moderna para facilitar sua rotina.",
          },
        ],
      ],
      testimonials: [
        { quote: "Morar aqui é maravilhoso. A segurança e a área de lazer são excelentes!", name: "Carlos Silva" },
        { quote: "Os espaços são perfeitos para a minha família. Recomendo a todos.", name: "Ana Oliveira" },
      ],
      contact: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark-theme");
    },
    handleSubmit() {
      alert(`Obrigado, ${this.contact.name}! Sua mensagem foi enviada.`);
      this.contact = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
.hero {
  background-color: #343a40;
  color: white;
  padding: 50px 0;
  text-align: center;
}
.feature-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}
</style>
