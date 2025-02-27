import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useCountriesStore = defineStore('countries', () => {

  const countries = ref(null)
  const currentCountry = ref(null)
  const load = ref(false)

  const fetchCountries = async () => {
    try {
      const data = await $fetch('/api/countries/countries', {
        method: 'GET',
      })

      if (data) {
        countries.value = data
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  const fetchCountryById = async (id) => {
    try {
      const data = await $fetch(`/api/countries/get-country-by-id/${id}`, {
        method: 'GET',
      })
      //const { data } = await useFetch(`/api/countries/get-country-by-id/${id}`, {
        //server: true,
     // })

      if (data) {
        currentCountry.value = data,
        load.value = true
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  return {
    countries,
    fetchCountries,
    currentCountry,
    fetchCountryById,
    load
  }
})