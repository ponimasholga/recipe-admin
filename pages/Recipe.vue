<template>
  <AppLayout>
    <template #title>
      {{ isCreatingMode ? 'Новый рецепт' :  recipeUpdated.strMeal }} 
    </template>
    <template #controls>
      <AppButton text="Сохранить" @click="createOrUpdateRecipe"/>
    </template>
    <template #inner>
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <div class="label">Title</div>
            <el-input v-model="recipeUpdated.strMeal" placeholder="Please input" />
          </div>
          <div class="col">
            <div class="label">Area</div>
              <el-select
                v-model="recipeUpdated.strArea"
                placeholder="Select"
              >
              <el-option
                v-for="item in areas"
                :key="item.strArea"
                :label="item.strArea"
                :value="item.strArea"
              />
            </el-select>
          </div>
          <div class="col">
            <div class="label">Categories</div>
              <el-select
                v-model="recipeUpdated.strCategory"
                placeholder="Select"
              >
              <el-option
                v-for="item in categories"
                :key="item.strCategory"
                :label="item.strCategory"
                :value="item.strCategory"
              />
            </el-select>
          </div>
          
          <div class="ingredients">
            <div class="subtitle">
              Ingredients
            </div>
            <div class="ingredients__list">
              <div
                v-for="(ingredient, index) in recipeIgredients"
                :key="index.title"
                class="ingredients__item"
              >
                <div class="ingredients__number">
                    {{index + 1}}.
                </div>
                <div class="ingredients__name">
                  <el-input v-model="recipeIgredients[index].title" placeholder="Please input" />
                </div>
                <div class="ingredients__measure">
                  <el-input v-model="recipeIgredients[index].measure" placeholder="Please input" />
                </div>

                <div class="ingredients__delete">
                  <AppButton icon="Delete" circle="true" class="ingredients__remove" @click="() => removeIgredients(index)"/>
                </div>
               
              </div>
              <AppButton text="Добавить" class="ingredients__add" @click="addIgredients"/>
            </div>
          </div>
          <div class="col">
            <div class="label">Categories</div>
            <el-input
              v-model="recipeUpdated.strInstructions"
              style="width: 100%"
              :rows="9"
              type="textarea"
              placeholder="Please input"
            />
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RecipeService, CommonService } from '../services'
import AppLayout from '../layout/AppLayout.vue';
import AppButton from '../components/AppButton.vue';
import { useRoute } from 'vue-router'
import { useRootStore }  from '../stores/root';
import { storeToRefs } from 'pinia'

const route = useRoute()
const rootStore = useRootStore()
const recipeId = route?.params.id
const recipe = ref(RecipeService.getEmptyRecipe())
const recipeUpdated = ref(RecipeService.getEmptyRecipe())
const isCreatingMode = ref(true)
const recipeIgredients = ref([CommonService.getEmptyIngredient()])

const areas = computed(() => rootStore.areas)
const categories = computed(() => rootStore.categories)

const fetchRecipe = async () => {
  try {
    console.log('id = ', recipeId, route)
    const data = await RecipeService.getRecipeById(recipeId);
    recipe.value  = {...data};
    recipeUpdated.value = {...data};
    isCreatingMode.value = false;
  } catch (error) {
    console.log(error)
  }
}

const addIgredients = () => {
  recipeIgredients.value.push(CommonService.getEmptyIngredient())
}

const removeIgredients = (index) => {
  recipeIgredients.value.splice(index,1)
}

const normalizeRecipeIgredients = () => {
  const normalizeRecipeIgredients = []

  for (let i = 1; i<=20; i++) {
    if (recipe.value[`strIngredient${i}`]) {
      const ingr = {
        title: recipe.value[`strIngredient${i}`],
        measure: recipe.value[`strMeasure${i}`]
      }

      normalizeRecipeIgredients.push(ingr)

    }
  }

  recipeIgredients.value = normalizeRecipeIgredients
}

const createOrUpdateRecipe = () => {
  isCreatingMode.value ? createRecipe() : updateRecipe()
}

const createRecipe = async () => {

}

const updateRecipe = async () => {

}

onMounted(async () => {
  if (parseInt(recipeId)) {
    await fetchRecipe()
    normalizeRecipeIgredients()
  }
})

</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

  .text {
    font-size: 16px;
    color: #000;
    width: 516px;
    margin-top: 50px;
  }
    
  .select-wrapper {
    margin-top: 50px;
  }

  .img {
    margin: 60px auto 0;
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

  .ingredients__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .ingredients {
    width: calc(100% + 16px);
    margin: 0 8px 16px;
  }

  .ingredients__item {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .ingredients__number {
    color: @violet;
    font-weight: 700;
    line-height: 1;
    min-width: 25px;
    flex: none;
  }

  .ingredients__remove {
    background-color: red
  }

  .ingredients__add {
    width: 152px;
    margin-top: 10px;
  }
</style>
