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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    border-radius: 22px;
    padding: 14px 23px;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;

    &--small {
      font-size: 16px;
    }

    &--wide {
      width: 100%;
    }

    &--primary {
      color: var(--color-white);
      background-color: var(--color-primary);
    }

    &--green {
      color: var(--color-white);
      background-color: var(--color-success);
    }

    &--default {
      color: #fff;
      --button-bg-color: @violet;

      &:hover {
        --button-hover-bg-color: fade(@violet, 70);
        background-color: var(--button-hover-bg-color)
      }
    }

    &:disabled {
      opacity: 0.3;
      pointer-events: none;
    }

    &:hover {
      --button-hover-bg-color: fade(@violet, 70);
    }
  }
</style>