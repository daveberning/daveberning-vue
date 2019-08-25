<template>
  <Modal>
    <h1>Contact</h1>
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
