<template>
  <div>
    <NuxtLayout> 
      {{ adminInfo }}
      <NuxtPage/>
    </NuxtLayout>
    <div   v-if="adminToken" class="app-page">
      user - {{ adminInfo }}
      <AuthForm title="Авторизация"/>
    </div>
   
    <AppWarning message="Вы точно хотите выйти"/>
    
  </div>
</template>
<script setup>
import {useAuthStore} from './stores/auth'
import { onMounted } from 'vue'
import AppWarning from '../components/AppWarning.vue';
import AuthForm from '../components/AppForm/AuthForm.vue';

//const { useAuthAdmin , initAuth } = useAuth()
//const user = useAuthAdmin()

const authStore = useAuthStore()

const adminInfo = authStore.adminInfo

const { initAuthPinia } = authStore

const adminToken = computed(() => authStore.adminInfo.token);

onBeforeMount(() => {
  initAuthPinia()
});

</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

  .app-page {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
  }

</style>
