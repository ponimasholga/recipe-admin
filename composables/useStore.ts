import type { APIError } from '~/types'

interface State {
  isLoading: boolean,
  isError: boolean,
  appError: APIError | null,
  isAlertDialogVisible: boolean,
}

const state = reactive<State>({
  isLoading: false,
  isError: false,
  appError: null,
  isAlertDialogVisible: false,
})

export default () => {
  const { isLoading, appError, isError, isAlertDialogVisible } = toRefs(state);

  const toggleLoading = (v: boolean) => {
    state.isLoading = v;
  }

  const toggleError = (error: null | APIError) => {
    state.appError = error;
  }

  const showError = (error: APIError) => {
    console.log('APIError', error)
    return {
      title: error.statusCode,
      description: error.message ? error.message : error.statusMessage,
      info: error.data,
    }
  }

  const showMessage = (error: APIError) => {
    return {
      title: error.statusCode,
      description: error.message ? error.message : error.statusMessage,
      info: error.data,
    }
  }

  const toggleAlertDialog = (v: boolean) => {
    state.isAlertDialogVisible = v;
  }

  return {
    isLoading,
    appError,
    isError,
    toggleLoading,
    toggleError,
    showError,
    showMessage,
    toggleAlertDialog,
    isAlertDialogVisible,
  }
}
