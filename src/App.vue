<template>
  <div>
    <!-- Header -->
    <header class="bg-dark text-white text-center py-4">
      <div class="container">
        <h1>Bem-vindo ao Portal do Condomínio</h1>
        <p>Escolha como deseja acessar o sistema</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container my-5 text-center">
      <div class="row justify-content-center">
        <CardComponent
          title="Sou Morador"
          text="Acesse o painel de morador para gerenciar reservas, notificações e votações."
          link="index-usr.html"
          btnClass="btn-primary"
          borderClass="border-primary"
        />
        <CardComponent
          title="Sou da Gerência"
          text="Acesse o painel administrativo para gerenciar chamados, manutenções e comunicados."
          link="index-adm.html"
          btnClass="btn-secondary"
          borderClass="border-secondary"
        />
      </div>
    </main>

    <!-- Footer -->
    <footer class="text-grey text-center py-3">
      <p>© 2024 Building Management. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>



<style scoped>
.text-grey {
  color: grey;
}
</style>
