<template>
    <form class="form form--createuser">
      values = {{ values.title }}<br>
      errors = {{ errors }}

      users = {{ users }}

      tags = {{ tags }}
      selectAuthor = {{ selectAuthor }}
      selectTags = {{ selectTags }}
      <fieldset class="form__fieldset">
        <AppInput
          placeholder="Пример"
          type="text"
          label="Название"
          name="title" 
          class="form__input"
        />
  
        <AppInput
          placeholder="Пример"
          type="textarea"
          label="Описание"
          name="text"
          class="form__input"
        />

        <div class="form__select">
          <div class="form__select-label">
            Автор
          </div>
          <el-select
            v-model="selectAuthor"
            placeholder="Автор"
          >
            <el-option
              v-for="user in users"
              :key="user.name"
              :label="user.name"
              :value="user.id"
            />
          </el-select>
        </div>

        <div class="form__select">
          <div class="form__select-label">
            Теги
          </div>
          <el-select
            v-model="selectTags"
            placeholder="Теги"
          >
            <el-option
              v-for="tag in tags"
              :key="tag.title"
              :label="tag.title"
              :value="tag.id"
            />
          </el-select>
        </div>
      </fieldset>

      <div class="form__bottom">
        <div class='btn btn--wide btn--default' @click="onSubmit">Сохранить</div>
      </div>
    </form>
  </template>
    
<script setup >
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import AppInput from '../components/AppForm/AppFormElement/AppInput.vue';
  import AppButton from '../components/AppButton.vue';
  import AppSelect  from '../components/AppForm/AppFormElement/AppSelect.vue';

  import { useUsersStore } from './stores/user'
  import { useTagsStore } from './stores/tag'

  const storeTag = useTagsStore()
  const { fetchTags } = storeTag
  const { tags } = storeToRefs(storeTag)

  const store = useUsersStore()
  const { fetchUsers } = store
  const { users } = storeToRefs(store)
  
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
  })

  const selectTags = ref('')
  const selectAuthor = ref('')

  const { values, errors , handleSubmit} =  useForm({
    validationSchema: yup.object({
      title: yup.string().required('Поле «Название» обязательно для заполнения').max(1000000),
      text: yup.string().required('Поле «Логин» обязательно для заполнения').max(1000000),
      email: yup.string().required('Поле «E-mail» обязательно для заполнения').email('Поле «E-mail» должно быть действительным электронным адресом').max(100),
      password: yup.string().required('Поле «Пароль» обязательно для заполнения').min(6, 'Поле «Пароль» должно быть не менее 6 символов'),
    }),
  });

  async function onSubmit() {
    console.log('onSubmit')
    await $fetch('/api/articles/article', {
      method: 'POST',
      body: {
        title: values.title,
        text: values.text,
        banner: 'https://fastly.picsum.photos/id/55/200/200.jpg?hmac=bZJlDgjT6ZbhsSE405Cdmv7eIH2M2P8FjGnOJwvryB8dd',
        tag: selectTags.value,
      }
    })
    return false
  }

  await fetchUsers()
  await fetchTags()

</script>
    
    <style lang="less" scoped>
      @import '../assets/styles/main';
    </style>