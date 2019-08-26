<template>
  <div class="component">
    <div class="wrapper">
      <div class="content">
        <img src="/dave-md-g.png" alt="">
        <h1>Dave Berning</h1>
        <h2>Developer &amp; Author from Cincinnati, Ohio</h2>
        <router-link to="/about">About <span>Shift + A</span></router-link>
        <router-link to="/work">Work <span>Shift + W</span></router-link>
        <router-link to="/writing">Writing <span>Shift + B</span></router-link>
        <router-link to="/contact">Contact <span>Shift + C</span></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';

  export default Vue.extend({
    name: 'home',
    components: {
      HelloWorld
    },
    mounted() {
      const self = this;
      window.addEventListener('keyup', function(event) {
        if (event.keyCode === 65 && event.shiftKey) {
          self.$router.push('/about');
        } // Shift + A
        if (event.keyCode === 87 && event.shiftKey) {
          self.$router.push('/work');
        } // Shift + W
        if (event.keyCode === 66 && event.shiftKey) {
          self.$router.push('/writing');
        } // Shift + B
        if (event.keyCode === 67 && event.shiftKey) {
          self.$router.push('/contact');
        } // Shift + C

      });
    }
  });
</script>

<style lang="scss" scoped>
  .component {
    position: fixed;
    top: 0 !important;
  }

  .wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 2000px;
    margin: 0 auto;
    height: 100vh;
    position: relative;
    padding: 2rem;
    z-index: -1;

    @media screen and (min-width: 1760px) {
      padding: 0 16rem;
    }

    @media screen and (min-width: 2000px) {
      max-width: 92%;
    }

    .content {
      margin-right: 0;

      @media screen and (min-width: 1400px) {
        margin-right: 5rem;
      }

      @media screen and (min-width: 2000px) {
        max-width: 59%;
      }
    }

    img {
      position: absolute;
      max-width: 550px;
      width: 100%;
      top: 5px;
      left: 0;
      -webkit-transform-style: preserve-3d;

      @media screen and (min-width: 1410px) {
        font-size: 8rem;
        max-width: 660px;
        left: 7rem;
      }

      @media screen and (min-width: 1760px) {
        left: 10rem;
      }

      @media screen and (min-width: 2000px) {
        max-width: 36%;
      }
    }
  }

  a {
    border: 2px solid #334241;
    color: #334241;
    padding: .75rem 2rem 1.5rem 2rem;
    border-radius: 100px;
    margin: 2.5rem 1rem 0 0;
    display: inline-block;
    text-decoration: none;
    position: relative;

    &::after {
      content: '';
      font-size: .6rem;
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      margin-top: 5px;
      font-style: italic;
    }

    & span {
      font-size: .6rem;
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      margin-top: 5px;
      font-style: italic;
    }

    @media screen and (min-width: 2000px) {
      font-size: 1vw;
    }
  }
</style>
