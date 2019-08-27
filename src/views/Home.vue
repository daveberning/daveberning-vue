<template>
  <div class="component">
    <div class="wrapper">
      <div class="content">
        <img src="images/dave-md-g.png" alt="">
        <h1>{{ about.firstName }} {{ about.lastName }}</h1>
        <h2>{{ about.role }} from {{ about.city }}, {{ about.state }}</h2>
        <Navigation :navigation="navigation" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Navigation from '@/components/Navigation.vue';
  import {About, NavigationItem, VueInstance} from '@/types';
  import {about} from '@/data/about';
  import {navigation} from '@/data/navigation';

  export default Vue.extend({
    name: 'Home' as string,
    components: {
      Navigation
    },
    data() {
      return {
        navigation: navigation as NavigationItem[],
        about: about as About
      };
    },
    mounted(): void {
      const self: VueInstance = this;
      window.addEventListener('keyup', function(e: KeyboardEvent) {
        if (e.keyCode === 65 && e.ctrlKey) {
          self.$router.push('/about');
        } // Shift + A
        if (e.keyCode === 87 && e.ctrlKey) {
          self.$router.push('/work');
        } // Shift + W
        if (e.keyCode === 66 && e.ctrlKey) {
          self.$router.push('/writing');
        } // Shift + B
        if (e.keyCode === 67 && e.ctrlKey) {
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

      @media screen and (min-width: 1760px) {
        margin-right: 0
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
</style>
