<template>
  <AppLayout>
    <template #title>
      Рецепты
    </template>
    <template #controls>
      <router-link :to="getPeciePath('new')">
        <AppButton text="Добавить рецепт"/>
      </router-link>
    </template>
    <template #inner>
      <div class="wrap">
        <el-table :data="recipes" style="width: 100%">
          <el-table-column prop="idMeal" label="Id" width="70px"/>
          <el-table-column label="Image" width="90px">
            <template #default="scope">
              <router-link :to="getPeciePath(scope.row.idMeal)">
                <img :src="scope.row.strMealThumb" alt=""  class="image"/>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="strMeal" label="Name" />
          <el-table-column prop="strArea" label="Area"  width="120px"/>
          <el-table-column prop="strCategory" label="Category" />
          <el-table-column prop="strTags" label="Tags">
            <template #default="scope">
              <template v-if="scope?.row?.strTags">
                <el-tag 
                  v-for="(tag, key) in scope.row.strTags.split(',')"
                  :key="key"
                  type="primary"
                  class="tag"
                >
                  {{ tag }}
                </el-tag>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
  </AppLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RecipeService } from '../services'
import AppLayout from '../layout/AppLayout.vue';
import AppButton from '../components/AppButton.vue';
import { ROUTES_PATHS } from '../constans'

import { useRootStore }  from '../stores/root';
import { storeToRefs } from 'pinia'

const recipes = ref()

const fetchRecipes = async () => {
  try {
    recipes.value  = await RecipeService.getRecipesByLetter();
  } catch {

  }
}

const getPeciePath = (id) => {
  return `${ROUTES_PATHS.RECIPE.split(':')[0]}${id}` 
}

onMounted(fetchRecipes)

</script>

<style lang="less" scoped>
  @import '../assets/styles/main';
  

  .text {
    font-size: 16px;
    color: #000;
    width: 516px;
    margin-top: 50px;
  }

  .image {
    width: 70px;
    height: auto;
  }
    
  .select-wrapper {
    margin-top: 50px;
  }

  .img {
    margin: 60px auto 0;
  }

  .tag {
    margin: 2px 3px;
  }

  .cocktails {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -30px 0;
    padding-top: 60px;
    overflow-x: auto;
    max-height: 650px;
  }

</style>
