<template>
  <div id="app" :data-bs-theme="theme">
    <header class="bg-dark text-white text-center py-4">
      <div class="container">
        <h1>Bem-vindo ao Portal do Condomínio</h1>
        <p>Escolha como deseja acessar o sistema</p>
      </div>
    </header>

    <main class="container my-5 text-center">
      <div class="row justify-content-center">
        <div class="col-md-6 mb-4">
          <div class="card border-primary">
            <div class="card-body">
              <h2 class="card-title text-primary">Sou Morador</h2>
              <p class="card-text">Acesse o painel de morador para gerenciar reservas, notificações e votações.</p>
              <router-link to="/index-usr" class="btn btn-primary w-100">Entrar como Morador</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card border-secondary">
            <div class="card-body">
              <h2 class="card-title text-secondary">Sou da Gerência</h2>
              <p class="card-text">Acesse o painel administrativo para gerenciar chamados, manutenções e comunicados.</p>
              <router-link to="/index-adm" class="btn btn-secondary w-100">Entrar como Gerência</router-link>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="text-grey text-center py-3">
      <p>© 2024 Building Management. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CondominiumPortal",
  data() {
    return {
      theme: "dark",
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
