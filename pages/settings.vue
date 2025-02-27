<template>
    <AppLayout>
      <template #title>
        Личный кабинет
      </template>
      <template #controls>
      </template>
      <template #inner>
        <div class="wrap">
          <SettingForm />
        </div>
      </template>
    </AppLayout>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import SettingForm from '../components/AppForm/SettingForm.vue';
  import AppLayout from '../layout/AppLayout.vue'

  </script>
  
  <style lang="less" scoped>
    @import '../assets/styles/main';
    
  
    .text {
      font-size: 16px;
      color: #000;
      width: 516px;
      margin-top: 50px;
    }
  
    .image {
      width: 70px;
      height: auto;
    }
      
    .select-wrapper {
      margin-top: 50px;
    }
  
    .img {
      margin: 60px auto 0;
    }
  
    .tag {
      margin: 2px 3px;
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
  