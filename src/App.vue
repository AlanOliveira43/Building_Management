<template>
  <div id="app">
    <header class="bg-dark text-white py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="m-0">Building Management</h1>
        <nav>
          <router-link to="/geral/GeralAdmin" class="btn btn-outline-light me-2">Geral Admin</router-link>
          <router-link to="/admin/estoque" class="btn btn-outline-light me-2">Admin Estoque</router-link>
          <router-link to="/user/chamados" class="btn btn-outline-light me-2">User Chamados</router-link>
          <router-link to="/user/notificacoes" class="btn btn-outline-light">User Notificações</router-link>
        </nav>
      </div>
    </header>
    <main class="mt-4">
      <router-view></router-view>
    </main>
    <footer class="text-center py-3 bg-dark text-white mt-4">
      <p>© 2024 Building Management. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Estilos globais */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
header {
  background-color: #343a40;
}
footer {
  background-color: #343a40;
}
a {
  text-decoration: none;
}
</style>
