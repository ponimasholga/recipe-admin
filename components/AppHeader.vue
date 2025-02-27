<template>
  <header class="header">
    <div class="header__title" v-html="title"/>
    <div class="header__controls">
      <AppButton/>
    </div>
  </header>
</template>
  
<script setup>
  import AppButton from '../components/AppButton.vue';
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
  })
</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main';

</style>