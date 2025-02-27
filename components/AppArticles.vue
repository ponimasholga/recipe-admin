<template>
    <div>
      <div class="articles">
        <div v-if="!userTypeMethod" class="articles__main">
          <br>
          users - {{ users }}
          <div class="table">
            <div class="table__head">
              <div class="table__id">
                Id
              </div>
              <div class="table__td table__td--banner">
                Баннер
              </div>
              <div class="table__td">
                Название
              </div>
              <div class="table__td">
                Автор
              </div>
            </div>
            <div class="table__body">
              <div class="table__row"
                v-for="user in users"
                :key="user.id"
              >
                <div class="table__id">
                  {{ user.id }}
                </div>
                <div class="table__td">
                  <div class="tablet__banner">
                    <img src="" alt="">
                  </div>
                  {{ user.name }}
                </div>
                <div class="table__td">
                  {{ user.email }}
                </div>
                <div class="table__td">
                  {{ user.email }}
                </div>
                <div class="table__td">
                  <div class="table__author">
                    <div class="table__author-avatar">

                    </div>
                    <div class="table__author-name">

                    </div>
                  </div>
                </div>
                <div class="table__control">
                  <div class="user__btn user__btn--change" @click="deleteUser(user.id)">
                    <el-icon :size="20">
                      <Edit />
                    </el-icon>
                  </div>
                  <div class="user__btn user__btn--delete" @click="deleteUser(user.id)">
                    <el-icon :size="20">
                      <Delete />
                    </el-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </template>
  
  <script setup>
    import { ElementPlus } from '@element-plus/icons-vue'
    import { Delete, Edit } from '@element-plus/icons-vue'
    import AppButton from '../components/AppButton.vue';
  
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