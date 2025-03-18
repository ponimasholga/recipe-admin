<template>
  <div>
    <form class="form"  @submit="onSubmit">
      <fieldset
        class="form__fieldset"
      >
        <AppInput
          type="text"
          label="Email"
          name="email"
          placeholder="Пример"
        />
        <AppInput
          type="password"
          label="Пароль"
          name="password"
          placeholder="Пример"
        />
        <AppInput
          type="password"
          label="Подтверждение пароля"
          name="passwordConfirm"
          placeholder="Пример"
        />
      </fieldset>

      <div class="form__bottom">
        <Button
          class="form__btn"
          text="Отравить" 
          type="submit"
        />
      </div>
    </form>
  </div>
</template>

<script setup >
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import AppInput from '../components/AppForm/AppFormElement/AppInput.vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
})

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required('Поле «E-mail» обязательно для заполнения').email('Поле «E-mail» должно быть действительным электронным адресом').max(100),
    password: yup.string().required('Поле «Пароль» обязательно для заполнения').min(6, 'Поле «Пароль» должно быть не менее 6 символов'),
    passwordConfirm: yup
    .string()
    .required('Поле «Подтверждение пароля» обязательно для заполнения')
    .min(6, 'Поле «Подтверждение пароля» должно быть не менее 6 символов')
    .oneOf([yup.ref('password')]),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

</script>

<style lang="less">
@import '../assets/styles/main';
  
.form {
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