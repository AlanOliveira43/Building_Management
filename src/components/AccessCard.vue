<template>
    <div class="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
      <i :class="item.icone + ' text-4xl mb-3 '"></i>
      <h3 class="text-lg font-semibold mb-2">{{ item.titulo }}</h3>
      <router-link :to="item.link" class="block bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
        {{ item.textoBotao }}
      </router-link>
      <p class="mt-2 text-gray-300">{{ item.descricao }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "AccessCard",
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .router-link {
    @apply block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition;
  }
  </style>
  