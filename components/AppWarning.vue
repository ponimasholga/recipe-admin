<template>
  <div class="warning">
    <div class="warning__wrap">
      <div class="warning__message">
        {{ message }}
      </div>
      <div class="warning__btn">
        <AppButton @click="close" text="Отмена" class="warning__btn"/>
        <AppButton @click="close" text="Да" class="warning__btn"/>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  import { computed, onMounted } from 'vue'
  import AppButton from '../components/AppButton.vue';

  const emit = defineEmits(['toggle'])

  const props = defineProps({
    message: {
      type: String,
      default: true,   
    },
  })
</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

  .warning {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;

    &__wrap{
      border: 1px solid @border;
      padding: 30px;
      border-radius: 20px;
      background-color: #fff;
      width: 360px;
      padding: 30px;
      -webkit-box-shadow: 0px 0px 8px 0px rgba(220, 223, 230, 0.8);
      -moz-box-shadow: 0px 0px 8px 0px rgba(220, 223, 230, 0.8);
      box-shadow: 0px 0px 8px 0px rgba(220, 223, 230, 0.8);
    }
  
    &__message {
      font-size: 20px;
      text-align: center;
      font-weight: 600
    }
  
    &__btn{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  
      &__nav {
        border: 0;
      }
    }
    
  </style>
  