import { defineStore } from 'pinia';
import { ref } from 'vue'
import type { TToastStatus } from '@/types'

interface IToast {
  text: string;
  status: TToastStatus;
  id: number;
}

type ToastPayload = { timeout?: number; text: string };

const defaultTimeout = 2000;

const createToast = (text: string, status: TToastStatus): IToast => ({
  text,
  status,
  id: Math.random() * 1000,
});

export const useToastStore = defineStore('toast', () => {
  const toasts: Ref<IToast[]> = ref([])

  const updateState = (payload: ToastPayload, status: TToastStatus) => {

    const { text, timeout } = payload;
    const toast = createToast(text, status);

    toasts.value.push(toast)
  }

  const success = (payload: ToastPayload) => {
    updateState(payload, "success");
  }

  const warning = (payload: ToastPayload) => {
    updateState(payload, "warning");
  }

  const error = (payload: ToastPayload) => {
    updateState(payload, "error");
  }

  return {
    toasts,
    success,
    error,
    warning,
    updateState,
  }
})