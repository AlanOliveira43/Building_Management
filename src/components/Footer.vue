<template>
    <footer class="py-4 bg-gray-800 text-gray-400">
      <div class="container mx-auto flex justify-between items-center px-4">
        <div class="flex space-x-4">
          <a href="#" class="hover:text-white transition">
            <i class="bx bxl-instagram text-2xl"></i>
          </a>
          <a href="#" class="hover:text-white transition">
            <i class="bx bxl-facebook text-2xl"></i>
          </a>
        </div>
        <p class="text-sm">© 2024 Building Management. Todos os direitos reservados.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  footer a {
    @apply text-gray-400 hover:text-white transition;
  }
  </style>
  