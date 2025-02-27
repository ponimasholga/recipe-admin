<template>
  <AppLayout>
    <AppHeading
      title="Категории"  
      description="Категории товаров"
    >
    <template #action>
      <nuxt-link class="btn btn--primary" to="/categories/new">
        Добавить категорию
      </nuxt-link>
    </template>
    </AppHeading>
    <template #inner>
      <div class="table">
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
          <div class="table__td">
            Количество подкатегорий
          </div>
        </div>
        <div class="table__body">
          <div class="table__section"
            v-for="category in categories"
            :key="category.id"
          >
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
                <nuxt-link class="table__btn table__btn--change"  :to=urlPageDetail(category.id)>
                  <el-icon :size="20">
                    <Edit />
                  </el-icon>
                </nuxt-link>
                <div class="table__btn table__btn--delete">
                  <el-icon :size="20">
                    <Delete />
                  </el-icon>
                </div>
              </div>
            </div>
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
                  <div class="table__btn table__btn--delete">
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
    </template>  
  </AppLayout>
</template>

<script setup>
  import AppLayout from '../layout/AppLayout.vue';
  import AppHeading from '../components/AppELement/AppHeading.vue'
  import { Delete, Edit } from '@element-plus/icons-vue'
  import { useProductsStore }  from '../stores/products';

  const store = useProductsStore()
  const { fetchCategories } = store
  const { categories } = storeToRefs(store)

  const countSubcategory = (subCategory) => {
    return subCategory.length
  }

  const urlPageDetail = (id) => {
    return `/categories/${id}`
  }

  await fetchCategories()
</script>

<style lang="less" scoped>
  @import '../assets/styles/main';
</style>
