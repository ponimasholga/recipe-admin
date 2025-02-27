<template>
  <div class="auth">
    <AppButton @click="addAdmin" text="Добавить админа" /><br>
    <AppButton @click="addUser" text="Добавить пользователя" /><br>
    <AppButton @click="addTag" text="Добавить тег" /><br>
    <AuthForm title="Авторизация"/>
  </div>
</template>
  
<script setup>
import AuthForm from '../components/AppForm/AuthForm.vue';

async function addAdmin() {
  await $fetch('/api/auth/register', {
    method: 'POST',
    body: {
      email: 'admin1@mail.ru',
      name: 'admin2',
      username: 'admin2',
      password: '123123',
      repeatPassword: '123123',
    }
  })
}


async function addTag() {
  await $fetch('/api/tags/tag', {
    method: 'POST',
    body: {
      title: 'ЗДОРОВЫЕ ПРИВЫЧКИ'
    }
  })
}

async function addUser() {
  await $fetch('/api/auth/register2', {
    method: 'POST',
    body: {
      email: 'admin2@mail.ru',
      name: 'admin2',
      username: 'admin2',
      password: '123123',
      repeatPassword: '123123',
    }
  })
}


</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

  .auth {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
  }

</style>
  