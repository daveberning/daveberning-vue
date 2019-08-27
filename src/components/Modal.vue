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
    padding: 2rem 4rem;
    overflow: auto;
    z-index: 10000;

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
      top: 15px;
      right: 10px;
      padding: .5rem 1rem;
      z-index: 9999;

      img {
        width: 50px;
        height: 50px;
      }
    }

    p {
      font-size: 1.5rem;
      line-height: 3rem;
      font-weight: 300;
      margin-bottom: 2rem;

      em {
        font-style: italic;
        font-weight: 600;
        letter-spacing: .25px;
      }

      &.right {
        position: absolute;
        right: 4rem;
        bottom: 1rem;
        font-size: .75rem;
        margin: 0;
        color: lighten(#3e9e91, 20%);
        line-height: 1rem;
      }
    }
  }
</style>
