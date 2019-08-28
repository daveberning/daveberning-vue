<template>
  <div class="modal" :class="{ active: isActive }">
    <div class="content">
      <router-link to="/" class="close"><img src="images/cancel.svg" alt=""></router-link>
      <slot />
    </div>
    <p class="right">Copyright &copy 2012 - {{ new Date().getFullYear() }}. All Rights Reserved.</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {VueInstance} from '@/types';

  export default Vue.extend({
    name: 'Modal' as string,
    data() {
      return {
        isActive: true as boolean
      };
    },
    destroyed(): void {
      this.isActive = false;
    },
    mounted(): void {
      this.isActive = true;
      const self: VueInstance = this;
      window.addEventListener('keyup', function(e: KeyboardEvent) {
        if (e.keyCode === 27) {
          self.$router.push('/');
        } // Esc
      });
    }
  });
</script>

<style lang="scss">
  .modal {
    background: #3e9e91;
    height: 100vh;
    width: 100vw;
    color: #ffffff !important;
    padding: 1rem;
    overflow: auto;
    z-index: 10000;

    h1 {
      font-size: 4rem;

      @media screen and (min-width: 767px) {
        font-size: 7rem;
      }
    }

    @media screen and (min-width: 767px) {
      padding: 2rem 4rem;
    }

    .content {
      transition-delay: .35s;
    }

    * {
      color: #ffffff;
      text-align: left;
      position: relative;
    }

    .close {
      background: none;
      color: #ffffff;
      position: absolute;
      top: 0;
      right: -15px;
      padding: .5rem 1rem;
      z-index: 9999;

      @media screen and (min-width: 767px) {
        top: 15px;
        right: 10px;
      }

      img {
        width: 25px;
        height: 25px;

        @media screen and (min-width: 767px) {
          width: 50px;
          height: 50px;
        }
      }
    }

    p {
      font-size: 1.25rem;
      line-height: 2.25rem;
      font-weight: 300;
      margin-bottom: 2rem;

      @media screen and (min-width: 767px) {
        font-size: 1.5rem;
        line-height: 3rem;
      }

      em {
        font-style: italic;
        font-weight: 600;
        letter-spacing: .25px;
      }

      &.right {
        position: relative;
        bottom: 0;
        margin: 1rem 0 0 0;
        text-align: center;
        right: 0;
        font-size: .75rem;
        color: lighten(#3e9e91, 20%);
        line-height: 1rem;

        @media screen and (min-width: 767px) {
          position: absolute;
          line-height: 3rem;
          right: 4rem;
          margin-top: 0;
          text-align: unset;
        }
      }
    }
  }
</style>
