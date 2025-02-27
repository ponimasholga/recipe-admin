<template>
  <div class="user-create">
    <div class="user-create__form">
      <UserCreateForm />
    </div>
  </div>
</template>
  
<script setup>
  import UserCreateForm from '../components/AppForm/UserCreateForm.vue'
  import { ElementPlus } from '@element-plus/icons-vue'
  import { Delete, Edit } from '@element-plus/icons-vue'
  import AppButton from './AppButton.vue';

  const emptyUser = ref(
    {
      id: 0,
      email: '',
      name: '',
      password: '',
    }
  )

  const users = ref(null)
  const userTypeMethod = ref(false)
  const userNameMethod = ref('')
  const saveForm = ref(null)

  const user = ref(
    {
      email: 'user2.email',
      name: 'user2.email',
      password: 'user2.email',
    }
  )
  users.value = await getUsers()

  const getUsersMode = () => {
    userTypeMethod.value = !userTypeMethod.value
  }

  const addUserMode = () => {
    userNameMethod.value = 'add'
    getUsersMode()
  }

  async function getUsers() {
    return await $fetch('/api/users/users', {
      method: 'GET',
    })
  }

  const saveUser = () => {
    (userNameMethod.value === 'add') ? addUser() : updateUser()
  }

  async function addUser() {
    
    console.log('user: ', user.value)
    await $fetch('/api/users/users', {
      method: 'POST',
      body: {
        email: emptyUser.value.email,
        name: emptyUser.value.name,
        password: emptyUser.value.password,
      }
    })
  }

  async function updateUser() {
    console.log('user: ', user.value)
    await $fetch('/api/users/users', {
      method: 'PUT',
      body: {
        id: emptyUser.value.id,
        email: emptyUser.value.email,
        name: emptyUser.value.name,
        password: emptyUser.value.password,
      }
    })

    users.value = await getUsers()
    getUsersMode()
  }


  async function deleteUser(id) {
    console.log('id', id)
    await $fetch('/api/users/users', {
      method: 'DELETE',
      body: {
        id: id
      }
    })

    users.value = await getUsers()
    getUsersMode()
  }
  
</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

  .user-create {
    max-width: 600px
  }

  .user {

    &__list {
      margin: 0 40px;
    }

    &__delete {
      --button-bg-color: #ff0000;
      --button-hover-bg-color: #d10000;
      button-active-bg-color: #d10000;
      width: 100%;
    }

    &__save {
      margin-top: 40px;
    }

    &__item {
      display: flex;
      align-content: center;
    }

    &__btn {
      display: flex;
      align-content: center;
      justify-content: center;
      cursor: pointer;
      width: 25px;
      height: 25px;
    }

  }
</style>  