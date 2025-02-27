import { defineStore } from 'pinia';
import { CommonService } from '../services'
import { ref } from 'vue'
import axios from 'axios'
import { INGREDIENTS_URL, COCKTAILS_BY_INGR_URL } from '../constans'


/*

export const useRootStore = defineStore('root', {
    state: () => ({ 
      ingredients: [],
      ingredient: null,
      cocktails: [],
    }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      async getIngredients() {
        const data = await axios.get(INGREDIENTS_URL)
        this.ingredients = data?.data?.drinks
      },
      async getCocktails(ingredient) {
        const data = await axios.get(`${COCKTAILS_BY_INGR_URL}${ingredient}`)
        this.cocktails = data?.data?.drinks
      },
      setIngredient(val) {
        this.ingredient = val
      }
    },
  })

  export default eventHandler(async (event) => {
    const sql = usePostgres()
  
    const products = await sql`SELECT * FROM products`
  
    // Ensure the database connection is closed after the request is processed
    event.waitUntil(sql.end())
    return products
  })
*/



export const useRootStore = defineStore('root', () => {
  const areas = ref(null)
  const categories = ref(null)
  const ingredients = ref(null)

  async function getAreas() {
    const data = await CommonService.getAreas()
    

    areas.value = data
  }

  async function getCategories() {
    const data = await CommonService.getCategories()

    categories.value = data
  }

  async function getIngredients() {
    const data = await CommonService.getIngredients()

    ingredients.value = data
  }


  

  return { areas, categories, ingredients, getAreas, getCategories, getIngredients }

})