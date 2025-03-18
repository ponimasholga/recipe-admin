<template>
  <div
    v-if="isOpen"
    @update:open="emits('onClose')"
    class="dialog"
  >
    <div class="dialog__wrap">
      <div class="dialog__close" @click="emits('onClose')">х</div>
      <div v-if="title" class="dialog__title">{{ title }}</div>
      <div v-if="description" class="dialog__description">
        {{ description }}
      </div>
      <slot />
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import AppButton from '@/components/AppELement/AppButton.vue';

  const props = defineProps<{
    isDialogVisible: boolean
    title?: string
    description?: string
  }>()

  const emits = defineEmits(['onClose'])
  
  const isOpen = computed(({
    get() {
      return props.isDialogVisible;
    },
    set() {
      emits('onClose');
    }
  }))

</script>
    
<style lang="less">
  @import '../assets/styles/main';

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.6);
    
    &__wrap {
      width: 450px;
      border-radius: 20px;
      background-color: #fff;
      padding: 30px;
      position: relative;
    }

    &__close {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }

    &__title {
      font-weight: 600;
      margin-bottom: 15px;
      text-align: left;
    }

    &__action {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
    }

    &__description {
      margin-bottom: 15px;
      text-align: left;
    }

    &__btn {
      width: 100px;
    }
  }
</style>
  