<template>
  <Modal>
    <h1>Work</h1>
    <div class="grid">
      <section>
        <img src="images/drees-logo.svg" alt="">
      </section>
      <section>
        <img src="images/university-of-cincinnati-vector-logo.svg" alt="">
      </section>
      <section>
        <img src="images/oodle-logo.svg" alt="">
      </section>
      <section>
        <img src="images/drees-logo.svg" alt="">
      </section>
      <section>
        <img src="images/drees-logo.svg" alt="">
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
        isActive: false as boolean
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
      display: flex;

      & > div {
        width: 100%;
      }

      p {
        margin: 1rem 0 0 0;
        text-align: center;
      }

      img {
        width: 60%;
        height: auto;
        display: block;
        margin: 0 auto;
      }
    }
  }
</style>
