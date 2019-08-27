<template>
  <div class="component">
    <div class="wrapper">
      <div class="content">
        <img src="images/dave-md-g.png" alt="">
        <h1>{{ about.firstName }} {{ about.lastName }}</h1>
        <h2>{{ about.role }} from {{ about.city }}, {{ about.state }}</h2>
        <p class="left">Photography by Jason Bayer</p>
        <p class="right">Copyright &copy 2012 - {{ new Date().getFullYear() }}. All Rights Reserved.</p>
        <Navigation :navigation="navigation" />
        <ul>
          <li v-for="media in socialMedia" :key="media.icon">
            <a :href="media.href">
              <i :class="`fab fa-${media.icon}`"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Navigation from '@/components/Navigation.vue';
  import {About, NavigationItem, SocialMedia, VueInstance} from '@/types';
  import {about} from '@/data/about';
  import {socialMedia} from '@/data/social-media';
  import {navigation} from '@/data/navigation';

  export default Vue.extend({
    name: 'Home' as string,
    components: {
      Navigation
    },
    data() {
      return {
        navigation: navigation as NavigationItem[],
        about: about as About,
        socialMedia: socialMedia as SocialMedia[]
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
        if (e.keyCode === 71 && e.ctrlKey) {
          self.$router.push('/writing');
        } // Shift + G
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

  p {
    position: absolute;
    font-size: .75rem;
    color: #cccccc;
    bottom: 1rem;
  }

  p.left {
    left: 1rem;
  }

  p.right {
    right: 1rem;
  }

  ul li {
    display: inline-block;
    margin: 2.5rem 1rem 0 0;

    &:last-child {
      margin-right: 0;
    }

    a {
      color: #334241;
      font-size: 1.5rem;
    }
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
