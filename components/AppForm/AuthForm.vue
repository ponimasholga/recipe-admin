<template>
  <div class="form__wrap">
    <div class="form__title">
      <h2>{{ title }}</h2>
    </div>
    <div  class="form__warning" v-if="errorAuth">
      Не вверные данные
    </div>
    <form class="form">
        <fieldset
          class="form__fieldset"
        >
          <Input
            type="text"
            label="Логин"
            name="username" 
          />
          <Input
            type="password"
            label="Пароль"
            name="password" 
          />
        </fieldset>

        <div class="form__bottom">
          <AppButton :disabled="!values" @click="onSubmit" text="Авторизоваться" class="form__btn"/>
        </div>
    </form>
  </div>
</template>

<script setup >
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import AppInput from '../components/AppForm/AppFormElement/AppInput.vue';
import AppButton from '../components/AppButton.vue';
import { useAuthStore } from '../stores/auth'

const store = useAuthStore()
const { loginPinia } = store

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
})

const loading = ref(false)
const errorAuth = ref(false)

const { values, errors } =  useForm({
  validationSchema: yup.object({
    username: yup.string().required('Поле «Логин» обязательно для заполнения').max(100),
    password: yup.string().required('Поле «Пароль» обязательно для заполнения').min(6, 'Поле «Пароль» должно быть не менее 6 символов'),
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

  .form {
    width: 600px;

    &__wrap {
      border: 1px solid @border;
      padding: 30px;
      border-radius: 20px;
      background-color: fade(@violet, 10);
      -webkit-box-shadow: 0px 0px 8px 0px rgba(220, 223, 230, 0.8);
      -moz-box-shadow: 0px 0px 8px 0px rgba(220, 223, 230, 0.8);
      box-shadow: 0px 0px 8px 0px rgba(220, 223, 230, 0.8);
    }

    &__warning {
      background-color: red;
      color: white;
      padding: 15px;
      border-radius: 20px;
      margin-bottom: 24px;
    }

    &__title {
      text-align: center;
      margin-bottom: 35px;
      color: @violet;
    }

    &__fieldset {
      border: 0;
      padding: 0;
    }

    &__btn {
      width: 100%;
      margin-top: 20px;
    }

    &__bottom {
      display: flex;
      justify-content: center;
    }

    &__links {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    &__link {
      color: @white;
      text-decoration: underline;
    }
  }
</style>