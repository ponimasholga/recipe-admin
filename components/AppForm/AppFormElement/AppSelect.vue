<template>
  <div class="select">
    <div class="select__label">
      {{ label }}
    </div>

    {{ value }}

    <div class="select__box">
        <el-select
          v-model="value"
          :placeholder="placeholder"
        >
        <el-option
          v-for="item in items"
          :key="item.title"
          :label="item.title"
          :value="item.id"
        />
      </el-select>
    </div>
  </div>
</template>
    
  <script setup >
  import { View, Hide } from '@element-plus/icons-vue'
  import { useField } from 'vee-validate';
  
  const props = defineProps({
    items: {
      type: Object,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value:{
      type: String,
      default: ''
    }
  })

  const value = ref('')
  
</script>
    
<style lang="less">
  @import '../assets/styles/main';
  
  .select {
    width: 100%;
    margin-bottom: 25px;
  }
</style>