<template>
    <header class="bg-dark text-white p-3">
      <div class="container d-flex justify-content-between align-items-center">
        <h1>{{ title }}</h1>
        <button class="btn btn-outline-light" @click="toggleTheme">
          {{ themeLabel }}
        </button>
      </div>
    </header>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  
  export default {
    name: "HeaderComponent",
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    setup() {
      const theme = ref("light");
      
      const toggleTheme = () => {
        theme.value = theme.value === "dark" ? "light" : "dark";
        document.body.classList.toggle("dark-theme", theme.value === "dark");
      };
      
      const themeLabel = computed(() => (theme.value === "dark" ? "Modo Claro" : "Modo Escuro"));
      
      return { toggleTheme, themeLabel };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 960px;
  }
  </style>
  