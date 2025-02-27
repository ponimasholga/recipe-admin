<template>
  <div :class="mode">
    <div class="tag__number">
      {{ number }}.
    </div> 
    <nuxt-link v-if="link" class="tag__link">
      {{ item.title }}
    </nuxt-link>
    <span v-else class="tag__label">
      {{ item.title }}
    </span>
    <div v-if="type === 'active'" class="tag__action">
      <div class="tag__delete">
        <el-icon><Delete /></el-icon>
      </div>
    </div>
  </div>
</template>
    
  <script setup >
  import { Delete } from '@element-plus/icons-vue'
  
  const props = defineProps({
    link: {     
      type: Boolean,
      default: true, 
    },
    number: {
      type: Number,
      default: 1,
    },
    type: {
      type: String,
      default: 'default',
    },
    mode: {
      type: String,
      default: 'default',
    },
    item: {
      type: Object,
    }
  })

  const mode = computed(() => {
    return `tag tag--${props.mode}`
  })
    
</script>
    
<style lang="less">
  @import '../assets/styles/main';
  .tag {
    align-items: center;
    position: relative;
    padding: 10px 15px;
    font-size: 16px;
    outline: 0;
    border: 1px solid rgba(220, 223, 230, 0.8);
    border-bottom: 0;
    background-color: rgba(77, 6, 144, 0.05);

    &__action {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
    }

    &__delete {
      display: flex;
      align-items: center;
    }

    &--full {
      width: 100%;
      display: flex;
    }

    &__number {
      width: 30px;
      color: @violet;
      font-weight: bold;
    }

    &__link {
      font-weight: bold;
      text-decoration: underline;
    }

    &__label {
      font-weight: bold;
    }

    &:last-child {
      border-bottom: 1px solid rgba(220, 223, 230, 0.8);
    }
  }

</style>