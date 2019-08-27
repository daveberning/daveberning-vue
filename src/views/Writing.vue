<template>
  <Modal>
    <h1>Writing</h1>
    <div class="grid">
      <section v-for="(writing, i) in writings" :key="i">
        <h2>{{ writing.title }}</h2>
        <ul>
          <li>{{ writing.date }}</li>
          <li>{{ writing.type }}</li>
        </ul>
      </section>
    </div>
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Modal from '@/components/Modal.vue';
  import {Writing} from '@/types';
  import {writing} from '@/data/writing';

  export default Vue.extend({
    name: 'Writing' as string,
    components: {
      Modal
    },
    data() {
      return {
        writings: writing as Writing[]
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
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      grid-column: span 1;
      background: darken(#3e9e91, 7%);
      padding: 2.5rem 2rem;
      border-radius: 4px;

      h2 {
        line-height: 2.5rem;
        grid-column: span 2;
        padding-bottom: 1rem;
      }

      ul {
        padding: .5rem 2rem;
        position: absolute;
        bottom: 1rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
      }

      ul li {
        margin: 2rem 0 0 0;
        font-style: italic;
        color: lighten(#3e9e91, 20%);
        grid-column: span 1;

        &:last-child {
          text-align: right;
        }
      }
    }
  }
</style>
