<template>
  <div class="heading">
    <div class="heading__info">
      <h1 class="heading__title">
        {{ title }}
      </h1>
      <p v-if="description" class="heading__description">
        {{ description }}
      </p>
    </div>
    <div class="heading__action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface HeadlingProps {
    title: string,
    description: string,
  }

  const props = defineProps<HeadlingProps>()
</script>
  
<style lang="less">
  @import '../assets/styles/main';

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    &__title {
      margin-top: 0;
      margin-bottom: 15px;
    }

    &__action {
      display: flex;
      align-items: center;
    }

    &__description {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
  