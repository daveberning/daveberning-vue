<template>
  <Modal>
    <h1>Contact</h1>
    <div class="grid">
      <form action="">
        <section>
          <label for="firstName">First Name</label>
          <input type="text" id="firstName">
        </section>
        <section>
          <label for="firstName">Last Name</label>
          <input type="text" id="firstName">
        </section>
        <section>
          <label for="firstName">Email</label>
          <input type="text" id="firstName">
        </section>
        <section>
          <label for="firstName">Phone</label>
          <input type="text" id="firstName">
        </section>
        <section>
          <label for="firstName">Message</label>
          <textarea rows="5"></textarea>
        </section>
        <button>Send</button>
      </form>
      <ul>
        <li v-for="media in socialMedia" :key="media.icon">
          <a :href="media.href">
            <i :class="`fab fa-${media.icon}`"></i>
          </a>
        </li>
      </ul>
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
        socialMedia: [
          {icon: 'twitter', href: ''},
          {icon: 'github', href: ''},
          {icon: 'linkedin-in', href: ''},
          {icon: 'instagram', href: ''},
          {icon: 'codepen', href: ''},
          {icon: 'medium-m', href: ''}
        ]
      };
    }
  });
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    li {
      grid-column: span 1;
      background: darken(#3e9e91, 7%);
      border-radius: 4px;

      i {
        font-size: 4.5rem;
        margin-top: .5rem;
      }
    }

    li a {
      background: none;
      color: #ffffff;
      position: absolute;
      z-index: 9999;
      text-decoration: none;
      height: 100%;
      width: 100%;
      padding: 0;
      justify-content: center;
      align-items: center;
      top: 0 !important;
      left: 0 !important;
      display: flex;
    }
  }

  form {
    grid-column: span 2;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;

    section {
      grid-column: span 2;
    }

    section:nth-child(5) {
      grid-column: span 4;
    }

    button {
      grid-column: span 1;
      grid-row-start: 4;
      display: inline-block;
      border: none;
      background: darken(#3e9e91, 7%);
      font-size: 2rem;
      padding: 2rem;
      text-align: center !important;
      color: #ffffff !important;
      border-radius: 4px;
    }
  }

  input,
  label {
    display: block;
  }

  input,
  textarea {
    background: lighten(#3e9e91, 6%);
    padding: 1rem;
    border-radius: 4px;
    border: 0;
    margin-top: .5rem;
    font-size: 2rem;
    font-weight: 300;
    width: 100%;
  }
</style>
