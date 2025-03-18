<template>
  <AppDialog 
    :is-dialog-visible="isDialogVisible"
    title="Вы уверены?"
    description="Это действие не может быть отменено"
    @on-close="toggleAlertDialog(false)"
  >
    <div class="dialog__action">
      <AppButton
        :disabled="isLoading"
        @click="toggleAlertDialog(false)"
        text="Отмена"
        class="btn btn--small btn--primary dialog__btn"
      />

      <AppButton
        :disabled="isLoading"
        @click="emit('onCorfirm')"
        text="Да"
        class="btn btn--small btn--primary btn--green dialog__btn"
      />
    </div>

  </AppDialog>
</template>
    
<script setup lang="ts">
  import AppButton from '@/components/AppELement/AppButton.vue';
  import AppDialog from '@/components/AppELement/AppDialog.vue';

  const { isLoading, isAlertDialogVisible, toggleAlertDialog } = useStore();
  const emit = defineEmits(['onCorfirm'])
  const isDialogVisible = computed(() => isAlertDialogVisible.value)

</script>
      
<style lang="less">
  @import '../assets/styles/main';
</style>
