<template>
  <div>
    <div class="user">
      <div v-if="!userTypeAdd" class="user__main">
        <AppButton @click="addUsersMode" text="Добавить кухню" class="user__add"/>
        <br>
        users - {{ users }}
        <div class="user__table">
          <div class="user__table-head">
            <div class="user__table-id">
              Id
            </div>
            <div class="user__table-name">
              Имя
            </div>
            <div class="user__table-mail">
              E-mail
            </div>
          </div>
          <div class="user__table-body">
            <div class="user__table-row"
              v-for="user in users"
              :key="user.id"
            >
              <div class="user__table-id">
                {{ user.id }}
              </div>
              <div class="user__table-name">
                {{ user.name }}
              </div>
              <div class="user__table-mail">
                {{ user.email }}
              </div>
              <div class="user__table-control">
                <div class="user__btn user__btn--change">
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
      <div class="user__form" v-else>
        {{ emptyUser }}
          <form
            ref = 'saveForm'  
          >
            <div class="label">E-mail</div><br>
            <el-input v-model="emptyUser.email" placeholder="Please input" /><br>
            <div class="label">Name</div><br>
            <el-input v-model="emptyUser.name" placeholder="Please input" /><br>
            <div class="label">password</div><br>
            <el-input v-model="emptyUser.password" placeholder="Please input" />
          
            <AppButton @click="addUsers" text="Сохранить" class="user__save"/>
            
          </form>
      </div>
    </div>
  </div>
  
</template>

<script setup>
  import { ElementPlus } from '@element-plus/icons-vue'
  import { Delete, Edit } from '@element-plus/icons-vue'
  import AppButton from './AppButton.vue';

  const emptyUser = ref(
    {
      email: '',
      name: '',
      password: '',
    }
  )

  const users = ref(null)
  const userTypeAdd = ref(false)
  const saveForm = ref(null)

  const user = ref(
    {
      email: 'user2.email',
      name: 'user2.email',
      password: 'user2.email',
    }
  )
  users.value = await getUsers()

  async function getUsers() {
    return await $fetch('/api/users/users', {
      method: 'GET',
    })
  }


  const addUsersMode = () => {
    userTypeAdd.value = !userTypeAdd.value
  }

  async function addUsers() {
    
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

  async function deleteUser(id) {
    console.log('id', id)
    await $fetch('/api/users/users', {
      method: 'DELETE',
      body: {
        id: id
      }
    })

    users.value = await getUsers()
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

    &__table {
      &-head {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ebeef5;
        color: #909399;
        padding: 10px 0;
      }

      &-control {
        display: flex;
        align-items: center;
        gap: 4px
      }

      &-row {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ebeef5;
        color: #909399;
        padding: 15px 0;
      }

      &-id {
        padding: 0 10px;
        width: 60px;
      }

      &-name {
        padding: 0 10px;
        width: 200px;
      }

      &-mail {
        padding: 0 10px;
        width: 200px;
      }
    }

  }
</style>  