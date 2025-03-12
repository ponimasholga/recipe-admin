<template>
  <div class="toast">
    <div class="toast__wrap">
      <div class="toast__title">
        {{ title }}
      </div>
      <div class="toast__message">
        {{ message }}
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
  })
</script>
    
<style lang="less">
  @import '../assets/styles/main';
  
  .toast {
    position: fixed;
    top: 25px;
    right: 25px;
    width: 250px;
    z-index: 5;

    &__wrap {
      padding: 10px;
      border: 1px solid rgba(220, 223, 230, 0.8);
      background-color: rgba(193, 40, 45, 0.05)
    }

    &__title {
      font-size: 16px;
      font-weight: 700;
    }

    &__message {
      font-size: 14px;
      margin-top: 10px;
    }
  }
</style>
    