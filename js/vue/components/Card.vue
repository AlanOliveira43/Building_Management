<template>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{ title }}</h3>
      </div>
      <div class="card-body">
        <p>{{ description }}</p>
        <slot></slot> <!-- Permite adicionar conteúdo dinâmico dentro do card -->
      </div>
      <div class="card-footer text-end">
        <button v-if="buttonText" @click="onButtonClick" class="btn btn-primary">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        default: "",
      },
      buttonText: {
        type: String,
        default: null,
      },
    },
    methods: {
      onButtonClick() {
        this.$emit("button-click");
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    background-color: white;
  }
  .card-header {
    font-weight: bold;
    margin-bottom: 8px;
  }
  </style>
  