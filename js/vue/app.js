import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Section from './components/Section.vue';

const app = Vue.createApp({
  components: {
    Header,
    Footer,
    Section,
    Card,
    Modal,
  },
});

app.mount('#app');
