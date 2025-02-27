<template>
  <div>
    <h3>Тэги</h3>
    <div class="tags-list">
      <div class="tags-list__list">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          class="tags-list__item"
        >
          <div class="tags-list__number">
            {{index + 1}}.
          </div>
          <div class="tags-list__title">
            {{ tag.title }}
          </div>
          <div class="tags-list__delete">
            <AppButton icon="Delete" circle="true" class="tags-list__remove" @click="() => removeTag(tag.id)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script setup>
  import AppButton from '../components/AppButton.vue'
  import { Delete } from '@element-plus/icons-vue'
  import { useTagsStore } from './stores/tag'

  const store = useTagsStore()
  const { fetchTags } = store
  const { tags } = storeToRefs(store)

  const removeTag = (index) => {
    console.log('index', index)
  }

  await fetchTags()

</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main';

  .tags-list {
    &__number {
      color: @violet;
      font-weight: 700;
      font-size: 18px;
      line-height: 1;
      min-width: 22px;
      flex: none;
    }
    
    &__list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__title {
      font-size: 18px;
    }

    &__item {
      display: flex;
      align-items: center;
      position: relative;
    }

    &__remove {
      position: absolute;
      right: 0;
      top: 50%;
      background-color: red;
      transform: translateY(-50%);
    }
  }

</style>  