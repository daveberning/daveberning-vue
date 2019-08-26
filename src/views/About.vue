<template>
  <Modal>
    <h1>About Dave</h1>
    <div class="grid">
      <div class="modal-content">
        <p>Dave Berning has been a front-end web developer for more than {{ years }} years. He graduated from the
          University of Cincinnati where he learned to create interactive websites with HTML, CSS, and JavaScript. Dave
          currently builds rich progressive web applications with Vue.js. He is also a writer for Alligator.io and
          organizer of the CodePen Cincinnati meetups where he lectures and leads workshops about the latest
          technologies in the
          field. You can find him almost anywhere on the World Wide Web as @daveberning.</p>

        <p>I have worked with several companies over the years, each one giving me valuable experience and new skills.
          Some of these companies include KalioCommerce, Hobsons Educational Solutions, Upright Communications, and
          Drees Homes. My philosophy is that every great website should have a simple UI and be written with clean
          code.</p>
      </div>
      <div>
        <p>Currently at</p>
        <img src="/oodle-logo.svg" alt="">
        <hr>
        <p>B.F.A in Electronic Media from</p>
        <img src="/university-of-cincinnati-vector-logo.svg" alt="">
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue';
  // @ts-ignore
  import numberToWords from 'number-to-words';
  import Modal from '@/components/Modal.vue';

  export default Vue.extend({
    name: 'About',
    components: {
      Modal
    },
    computed: {
      years(): string {
        const years: number = new Date().getFullYear() - 2012;
        return numberToWords.toWords(years);
      }
    }
  });
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3rem;

    & > div:first-child {
      grid-column: span 2;

      p {
        text-align: justify;
      }
    }

    & > div:last-child {
      grid-column: span 1;
      background: darken(#3e9e91, 7%);
      padding: 4rem 2rem;
      border-radius: 4px;

      hr {
        margin: 4rem 0 3rem 0;
        border: 1px solid #3e9e91;
      }

      img {
        display: block;
        width: 100%;
        margin: 0 auto;
        max-width: 325px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      p {
        text-align: center;
        grid-column: span 2;
      }

      section {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
