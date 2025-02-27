<template>
    <div>
      <div class="countries">
        <div class="countries__main">
          <AppButton text="Добавить страну(кухню)" class="countries__add"/>
          <br>
          
          countries - {{ countries }}
          <div class="table">
            <div class="table__head">
              <div class="table__id">
                Id
              </div>
              <div class="table__td table__td--flag">
                Флаг
              </div>
              <div class="table__td table__td--long">
                Название
              </div>
            </div>
            <div class="table__body">
              <div class="table__row"
                v-for="(country, index) in countries"
                :key="index"
              >
                <div class="table__id">
                  {{ index+1 }}
                </div>
                <div class="table__td table__td--flag">
                  <img class="table__flag" :src="country.image" />
                </div>
                <div class="table__td table__td--long">
                  {{ country.title }}
                </div>
                <div class="table__control">
                  <nuxt-link class="countries__btn countries__btn--delete" :to="urlPageDetail(country.id)">
                    <el-icon :size="20">
                      <Edit />
                    </el-icon>
                  </nuxt-link>
                  <div class="countries__btn countries__btn--delete" @click="deletecountries(country.id)">
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
    </div>
    
  </template>
  
<script setup>
  import { ElementPlus } from '@element-plus/icons-vue'
  import { Delete, Edit } from '@element-plus/icons-vue'
    import AppButton from '../../components/AppButton.vue';
  import { useCountriesStore } from './stores/countries'

  function getImageUrl(name) {
    return new URL(`${name}`, import.meta.url).href
  }

  const urlPageDetail = (id) => {
    return `countries/${id}`
  }

  const store = useCountriesStore()
  const { fetchCountries } = store
  const { countries } = storeToRefs(store)

  await fetchCountries()
</script>
  
  <style lang="less" scoped>
    @import '../assets/styles/main';
  
    .countries {
  
      &__list {
        margin: 0 40px;
      }
  
      &__delete {
        --button-bg-color: #ff0000;
        --button-hover-bg-color: #d10000;
        button-active-bg-color: #d10000;
        width: 100%;
      }
  
      &__save {
        margin-top: 40px;
      }
  
      &__item {
        display: flex;
        align-content: center;
      }
  
      &__btn {
        display: flex;
        align-content: center;
        justify-content: center;
        cursor: pointer;
        width: 25px;
        height: 25px;
      }
  
    }
  </style>  