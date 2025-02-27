<template>
  <AppLayout>
    <template #title>
      Кухни стран мира
    </template>
    <template #controls>
    </template>
    <template #inner>
      <AppKitchen />
    </template>
  </AppLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppLayout from '../layout/AppLayout.vue';
import AppButton from '../components/AppButton.vue';
import AppKitchen from '../components/AppKitchen.vue';
import { useRootStore }  from '../stores/root';
import { storeToRefs } from 'pinia'

</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

  .text {
    font-size: 16px;
    color: #000;
    width: 516px;
    margin-top: 50px;
  }
    
  .select-wrapper {
    margin-top: 50px;
  }

  .img {
    margin: 60px auto 0;
  }

  .cocktails {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -30px 0;
    padding-top: 60px;
    overflow-x: auto;
    max-height: 650px;
  }

</style>
