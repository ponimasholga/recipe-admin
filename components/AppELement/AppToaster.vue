<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="toastStore.length" class="toaster__wrapper">
        <TransitionGroup name="toast" tag="ul">
          <li
            v-for="toast in toastStore"
            :class="['toaster__inner', toastClassMap[toast.status]]"
            :key="toast.text"
          >
            <img src=""
              class="toaster__list-icon"
            />
            <span class="toaster__list-text">
              {{ toast.text }}
            </span>
          </li>
        </TransitionGroup>
      </div>
    </Transition>
  </Teleport>  
</template>
    
<script setup lang="ts">
  import { useToastStore } from "@/stores/toast";

  type TToastStatus = "success" | "warning" | "error";

  const toastClassMap: Record<TToastStatus, string> = {
    warning: "warning",
    error: "error",
    success: "success",
  };

  const toastStore = useToastStore().toasts;
</script>
    
<style lang="less">
  @import '../assets/styles/main';

  .toast-enter-active,
  .toast-leave-active {
    transition: opacity 0.5s ease;
  }

  .toast-enter-from,
  .toast-leave-to {
    opacity: 0;
  }
  
  .toaster {
    &__wrapper {
      position: fixed;
      bottom: 3%;
      right: 5%;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
      z-index: 100;
    }

    &__inner {
      list-style: none;
      width: 300px;
      padding: 10px;
      border: 1px solid rgba(220, 223, 230, 0.8);
      
      &.error {
        background-color: rgba(193, 40, 45, 0.05);
      }

      &.success {
        background-color: rgba(22, 95, 2, 0.05);
      }

      &.warning {
        background-color: rgba(179, 131, 0, 0.05);
      }
    }

    &__list {
      display: flex;
      align-items: center;
      gap: 1rem;
      border-radius: 0.3rem;
      border: 1px solid transparent;
      background-color: white;
      padding: 2.2px 1.6px;

      &-icon {
        width: 1.8px;
      }
    }

    &__list-text {
      font-size: 15px;
    }
  }
</style>
    