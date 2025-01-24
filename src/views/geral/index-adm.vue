<template>
  <div>
    <!-- Header -->
    <header class="bg-dark text-white text-center py-4">
      <div class="container">
        <h1 class="fw-bold">Bem-vindo ao Portal do Condomínio</h1>
        <p class="text-muted">Escolha como deseja acessar o sistema</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container my-5">
      <div class="row justify-content-center g-4">
        <div 
          class="col-md-4" 
          v-for="role in roles" 
          :key="role.name"
        >
          <div class="card text-center" :class="role.cardClass">
            <div class="card-body">
              <h2 class="card-title" :class="role.textClass">{{ role.name }}</h2>
              <p class="card-text">{{ role.description }}</p>
              <router-link :to="role.link" class="btn btn-custom" :class="role.buttonClass">
                Entrar como {{ role.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="text-center py-3">
      <p>© 2024 Building Management. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      roles: [
        {
          name: "Gerência",
          description: "Acesse o painel de morador para gerenciar reservas, notificações e votações.",
          link: "/gerencia",
          cardClass: "border-primary",
          textClass: "text-primary",
          buttonClass: "btn-primary",
        },
        {
          name: "Portaria",
          description: "Acesse o painel administrativo para gerenciar chamados, manutenções e comunicados.",
          link: "/portaria",
          cardClass: "border-secondary",
          textClass: "text-secondary",
          buttonClass: "btn-secondary",
        },
        {
          name: "Zelador",
          description: "Acesse o painel administrativo para gerenciar chamados, manutenções e comunicados.",
          link: "/zelador",
          cardClass: "border-info",
          textClass: "text-info",
          buttonClass: "btn-info",
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn-custom {
  width: 100%;
}
</style>
