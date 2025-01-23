<template>
    <section>
      <h2>{{ title }}</h2>
      <div class="row">
        <slot></slot>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: ['title'],
  };
  </script>
  
  <style scoped>
  section {
    margin: 2rem 0;
  }
  </style>
  