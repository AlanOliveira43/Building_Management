<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal-container">
        <div class="modal-header">
          <h2>{{ title }}</h2>
          <button @click="closeModal" class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <slot></slot> <!-- Permite conteúdo dinâmico -->
        </div>
        <div class="modal-footer">
          <button @click="confirmAction" class="btn btn-primary">{{ confirmText }}</button>
          <button @click="closeModal" class="btn btn-secondary">{{ cancelText }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Modal",
    props: {
      title: {
        type: String,
        required: true,
      },
      confirmText: {
        type: String,
        default: "Confirmar",
      },
      cancelText: {
        type: String,
        default: "Cancelar",
      },
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit("close");
      },
      confirmAction() {
        this.$emit("confirm");
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal-container {
    background: white;
    padding: 16px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
  </style>
  