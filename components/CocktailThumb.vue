<template>
  <div class="cocktail">
    <RouterLink :to="`/cocktail/${cocktail.idDrink}`" class="cocktail__link">
      <div class="cocktail__img">
        <img 
          class='cocktail__pucture'
          :src="cocktail.strDrinkThumb" 
          :alt="cocktail.strDrink"
        >
      </div>

      <span class='cocktail__text'>{{ cocktail.strDrink }}</span>
    </RouterLink>
  </div>
</template>

<script setup>
  const props = defineProps({
    cocktail: {
      type: Object,
      required: true
    }
  })
</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

  .cocktail {
    display: flex;
    flex-direction: column;
    width: calc(33% - 70px);
    margin: 0 35px 35px;

    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__img {
      max-width: 120px;
      height: 120px;
    }

    &__pucture {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__text {
      margin-top: 15px;
      font-size: 16px;
      line-height: 18.78px;
      letter-spacing: 0.1em;
      text-align: center;
      color: #fff;
    }
  }
</style>