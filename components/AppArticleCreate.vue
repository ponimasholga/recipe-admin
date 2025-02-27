<template>
    <div class="user-create">
      <div class="user-create__form">
        <ArticleCreateForm />
      </div>
      <div class="user-create__aside">
        <AppTagsList />
      </div>
    </div>
  </template>
    
<script setup>
  import ArticleCreateForm from '../components/AppForm/ArticleCreateForm.vue'
  import AppTagsList from './AppTagsList.vue'
</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main';

  .user-create {
    display: flex;

    &__form {
      width: calc(100% - 450px);
      padding-right: 30px;
    }
    
    &__aside {
      width: 450px;
      padding-left: 30px;
    }
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