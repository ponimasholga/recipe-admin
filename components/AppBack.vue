<template>
  <button class="back" @click="$router.back()">
    <el-icon><Back /></el-icon>
    <span>Назад</span>
  </button>
</template>

<script setup lang="ts">
  import { Back } from '@element-plus/icons-vue'

  const router = useRouter()

</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

  .back {
    display: inline-flex;
    font-size: 16px;
    margin-bottom: 15px;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.6;
    }

    span {
      margin-left: 5px;
    }
  }

</style>  
