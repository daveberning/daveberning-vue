<template>
  <Modal>
    <h1>Writing</h1>
    <div class="grid">
      <section v-for="(writing, i) in writings" :key="i">
        <h2>{{ writing.title }}</h2>
        <p>{{ writing.date }}</p>
      </section>
    </div>
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Modal from '@/components/Modal.vue';

  export default Vue.extend({
    name: 'About',
    components: {
      Modal
    },
    data() {
      return {
        writings: [
          {title: `Vue.js: Understanding It's Tools and Ecosystem`, date: `October 2018`, featured: true},
          {title: `Creating Interfaces With Bulma`, date: `February 2018`, featured: true},
          {title: `Getting Started with Server-Side Rendering Using Nuxt.js`, date: `April 2018`},
          {title: `Implementing an Infinite Scroll with Vue.js`, date: `April 2018`},
          {title: `Integrating and Using CSS Frameworks with Vue.js`, date: `April 2018`},
          {title: `Using Chart.js with Vue.js`, date: `April 2018`},
          {title: `Using Chart.js with Vue.js`, date: `April 2018`},
          {title: `Using Chart.js with Vue.js`, date: `April 2018`},
          {title: `Using Chart.js with Vue.js`, date: `April 2018`},
          {title: `Using Chart.js with Vue.js`, date: `April 2018`},
          {title: `Using Chart.js with Vue.js`, date: `April 2018`},
          {title: `Using Chart.js with Vue.js`, date: `April 2018`}
        ]
      };
    }
  });
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;

    section {
      grid-column: span 1;
      background: darken(#3e9e91, 7%);
      padding: 2.5rem 2rem;
      border-radius: 4px;

      h2 {
        line-height: 2.5rem;
      }

      p {
        margin: 2rem 0 0 0;
        font-style: italic;
        color: lighten(#3e9e91, 20%);
      }
    }
  }
</style>
