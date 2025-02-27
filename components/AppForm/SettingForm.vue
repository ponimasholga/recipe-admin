<template>
    <form
        class="form form--inner">
        <fieldset
          class="form__fieldset"
        >
        {{ initialValues }}

        {{ adminInfo }}
          <div class="form__main">
            <div class="form__avatar">
              <input class="form__avatar-input" type="file">
              <div class="form__avatar-wrap">
                <img :src="adminInfo.profileImage" alt="Профиль">
              </div>
              <div class="form__avatar-text">
                Изменить аватарку
              </div>
            </div>

            <div class="form__body">
                <Input
                  type="text"
                  label="Логин"
                  name="username" 
                  class="form__input"
                />
                <Input
                  type="text"
                  label="E-mail"
                  name="email"
                  class="form__input"
                />
            </div>
          </div>
          
        </fieldset>

        <div class="form__bottom">
          <AppButton @click="onSubmit" text="Сохранить" class="form__btn"/>
        </div>
    </form>
  </template>
  
  <script setup >
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import Input from '../components/AppForm//Input.vue'
  import AppButton from '../components/AppButton.vue';
  import {useAuthStore} from './stores/auth'

  
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
  })


  const authStore = useAuthStore()

  const adminInfo = authStore.adminInfo
  
  const loading = ref(false)
  const errorAuth = ref(false)

  const initialValues = ref ({
    username: adminInfo.username,
    email: adminInfo.email,
  })

  const { values, errors } =  useForm({
    initialValues,
    validationSchema: yup.object({
      username: yup.string().required('Поле «Логин» обязательно для заполнения').max(100).default('some string'),
      email: yup.string().required('Поле «E-mail» обязательно для заполнения').email('Поле «E-mail» должно быть действительным электронным адресом').max(100),
    }),
  });
  
  async function onSubmit() {
    
    try {
      errorAuth.value = false
      loading.value = true
      
      //await login({
         //password: values.password,
         //username: values.username
       //})
        
      await loginPinia({
        password: values.password,
        username: values.username
      })
      
    } catch (error) {
  
      errorAuth.value = true
      console.log(error)
      
      } finally {
        loading.value = false
    }
  }
  
  </script>
  
  <style lang="less" scoped>
    @import '../assets/styles/main';
  </style>