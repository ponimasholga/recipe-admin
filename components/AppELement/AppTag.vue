<template>
  <div :class="mode">
    <div class="tag__number">
      {{ number }}.
    </div> 
    <nuxt class="tag__label">
      {{ item.title }}
    </nuxt>
    <div v-if="type === 'small'" class="tag__delete">
      <el-icon><Delete /></el-icon>
    </div>
  </div>
</template>
    
  <script setup >
  import { Delete } from '@element-plus/icons-vue'
  
  const props = defineProps({
    name: {
      type: String,
      default: '',
    },
    number: {
      type: Number,
      default: 1,
    },
    type: {
      type: String,
      default: 'small',
    },
    item: {
      type: Object,
    }
  })

  const mode = computed(() => {
    return `tag tag--${props.type}`
  })
    
</script>
    
<style lang="less">
  @import '../assets/styles/main';
  .tag {
    align-items: center;
    padding: 10px 15px;
    font-size: 16px;
    outline: 0;
    border: 1px solid rgba(220, 223, 230, 0.8);
    border-bottom: 0;
    background-color: rgba(77, 6, 144, 0.05);

    &--full {
      width: 100%;
      display: flex;
    }

    &__number {
      width: 30px;
      color: @violet;
      font-weight: bold;
    }

    &__label {
      font-weight: bold;
      text-decoration: underline;
    }

    &:last-child {
      border-bottom: 1px solid rgba(220, 223, 230, 0.8);
    }
  }

</style>