<template>
  <div class="component">
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    text-align: center;
  }

  .component {
    width: 100vw;
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-weight: 900;
    font-size: 7rem;
    line-height: 11rem;

    @media screen and (min-width: 1410px) {
      font-size: 8rem;
    }

    @media screen and (min-width: 2000px) {
      font-size: 6vw;
      line-height: 15rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;

    @media screen and (min-width: 2000px) {
      font-size: 2vw;
    }
  }

  h1, h2 {
    color: #334241;
    text-align: center;
  }

  .slide-enter-to,
  .slide-leave-to,
  .slide-enter,
  .slide-leave,
  .slide-leave-active,
  .slide-enter-active {
    position: fixed;
    left: 0;
    transition: all .3s ease-in-out;
    -webkit-backface-visibility: hidden;
  }

  .slide-enter-to,
  .slide-leave,
  .slide-enter-active {
    top: 0;

    .content {
      opacity: 1;
      transition: all .25s ease;
    }
  }

  .slide-enter,
  .slide-leave-to {
    top: 100vh;

    .content {
      opacity: 0;
      transition: all .25s ease;
      transition-delay: 0s !important;
    }
  }
</style>
