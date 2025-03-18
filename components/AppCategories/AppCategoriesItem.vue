<template>
  <div>
    <div class="table__row">
      <div class="table__id">
        {{ category.id }}
      </div>
      <div class="table__td table__td--banner">
        <div class="tablet__banner">
          <img src="" alt="">
        </div>
        {{ category.id }}
      </div>
      <div class="table__td">
        {{ category.title }}
      </div>
      <div class="table__td">
        {{ countSubcategory(category.subCategory) }}
      </div>
      <div class="table__control">
        <nuxt-link class="table__btn table__btn--change" :to=urlPageDetail(category.id)>
          <el-icon :size="20">
            <Edit />
          </el-icon>
        </nuxt-link>
        <div class="table__btn table__btn--delete" @click="toggleAlertDialog(true)">
          <el-icon :size="20">
            <Delete />
          </el-icon>
        </div>
      </div>
    </div>
    <AppAlertDialog 
      @on-corfirm="deleteCategory(category.id)"
    />
    <div 
      v-if="category.subCategory.length > 0" 
      class="table__block"
    >
      <h3>Подкатегории</h3>
      <div class="table__head">
        <div class="table__id">
          Id
        </div>
        <div class="table__td table__td--banner">
          Изображение
        </div>
        <div class="table__td">
          Название
        </div>
      </div>
      <div
        class="table__row table__row--sub"
        v-for="subCategory in category.subCategory"
        :key="subCategory.id"
      >
        <div class="table__id">
          {{ subCategory.id }}
        </div>
        <div class="table__td table__td--banner">
          <div class="tablet__banner">
            <img src="" alt="">
          </div>
          {{ subCategory.id }}
        </div>
        <div class="table__td">
          {{ subCategory.title }}
        </div>
        <div class="table__control">
          <div class="table__btn table__btn--delete" @click="deleteSubcategory(subCategory.id)">
            <el-icon :size="20">
              <Delete />
            </el-icon>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>
      
<script setup>
  import { Delete, Edit } from '@element-plus/icons-vue'
  import AppAlertDialog from '../components/AppELement/AppAlertDialog.vue';

  const props = defineProps({
    category: {
      type: Object,
      required: true
    },
  })


  const { isLoading, toggleLoading, toggleAlertDialog } = useStore();

  const countSubcategory = (subCategory) => {
    return subCategory.length
  }

    /*Удаление категории*/
  const deleteCategory = async (code) => {    
    try {
      toggleLoading(true)
      console.log('Удаление категории под номером № ', code);

      await $fetch(`/api/category/${code}`, {
        method: 'DELETE'
      })

      toggleAlertDialog(false)

    } catch (error){

    } finally {
      location.reload();
      toggleLoading(false)
    }
  }

  const urlPageDetail = (id) => {
    return `/categories/${id}`
  }

  async function deleteSubcategory(id) {
    console.log('deleteSubcategory', id)
    await $fetch(`/api/product/delete-subcategory-by-id/${Number(id)}`, {
      method: 'POST',
      body: {
        id: id
      }
    })
  }

</script>
    
<style lang="less" scoped>
  @import '../assets/styles/main';
</style>
    