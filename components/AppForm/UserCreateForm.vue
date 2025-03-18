<template>
  <form class="form form--createuser"  @submit="onSubmit">
    values = {{ values }}<br>
    errors = {{ errors }}
    <fieldset class="form__fieldset">
      <AppInput
        placeholder="Пример"
        type="text"
        label="Логин"
        name="username" 
        class="form__input"
      />
      <AppInput
        placeholder="Пример"
        type="text"
        label="Имя"
        name="name"
        class="form__input"
      />

      <AppInput
        placeholder="Пример"
        type="text"
        label="Телефон"
        name="phone"
        class="form__input"
      />

      <AppInput
        placeholder="Пример"
        type="text"
        label="E-mail"
        name="email"
        class="form__input"
      />

      <AppInput
        placeholder="Пример"
        type="password"
        label="Пароль"
        name="password" 
      />

    </fieldset>

    <button class='btn btn--wide btn--default'>asdasdasd</button>

    <div class="form__bottom">
      <AppButton text="Сохранить" class="form__btn"/>
    </div>
  </form>
</template>
  
  <script setup >
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import AppInput from '../components/AppForm/AppFormElement/AppInput.vue';
  import AppButton from '../components/AppButton.vue';

  
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
  })
  
  const loading = ref(false)
  const errorAuth = ref(false)

  const { values, errors , handleSubmit} =  useForm({
    validationSchema: yup.object({
      username: yup.string().required('Поле «Логин» обязательно для заполнения').max(100),
      name: yup.string().required('Поле «Логин» обязательно для заполнения').max(100),
      email: yup.string().required('Поле «E-mail» обязательно для заполнения').email('Поле «E-mail» должно быть действительным электронным адресом').max(100),
      password: yup.string().required('Поле «Пароль» обязательно для заполнения').min(6, 'Поле «Пароль» должно быть не менее 6 символов'),
    }),
  });
  
  const onSubmit = handleSubmit(values => {
    
  });
  </script>
  
  <style lang="less" scoped>
    @import '../assets/styles/main';
  </style>