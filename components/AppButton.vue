<template>
  <button v-if="!circle"
    type="primary" 
    class="btn"
  >
    {{text}}
  </button>
  <button v-else
    circle
    type="primary" 
    class="btn-circle" 
    :icon="icon"
  />
</template>

  
<script setup>
  
  const props = defineProps({
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    circle: {
      type: Boolean,
      default: false,
    }

  })
</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main';

  .btn {
    --button-bg-color: @violet;
    padding: 25px 24px;
    font-size: 18px;
    border-radius: 22px;

    &:hover {
      --button-hover-bg-color: fade(@violet, 70);
    }
  }

</style>