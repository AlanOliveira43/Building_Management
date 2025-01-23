<template>
    <header class="bg-dark text-white py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
          <button @click="toggleTheme" class="btn btn-outline-primary">Alternar Tema</button>
        </div>
        <button class="btn btn-outline-primary" @click="logout">Log out</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      toggleTheme() {
        const htmlElement = document.documentElement;
        const theme =
          htmlElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-bs-theme', theme);
      },
      logout() {
        window.location.href = '../../index-landing.html';
      },
    },
  };
  </script>
  
  <style scoped>
  header {
    margin-bottom: 1rem;
  }
  </style>
  