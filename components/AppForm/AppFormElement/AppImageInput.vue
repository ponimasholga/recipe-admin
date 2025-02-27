<template>
  <div class="image-upload">
    <div class="image-upload__box">
      <input 
        type="file" 
        id="scfile" 
        class="image-upload__file" 
        name="scImage" 
        autocomplete="off"
        @change="attachimage"
      />
      image = {{image}}
      <div class="image-upload__image">
        <img :src="preview" />
      </div>  
      <p v-if="image" class="mb-0">file name: {{ image.name }}</p>
      <p v-if="image" class="mb-0">size: {{ image.size/1024 }}KB</p>
      <div class="btn btn--default image-upload__label">{{ label }}</div>
    </div>
  </div>
</template>
      
<script setup >

  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    urlMedia:{
      type: String,
      default: ''
    }
  })

  const preview = ref(props.urlMedia)
  const image = ref(null)

  function attachimage(event) {
    event.preventDefault();
    const input = event.target;

    if (input.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.value = e.target.result;
      }
      image.value=input.files[0];
      reader.readAsDataURL(input.files[0]);
    }

    console.log('input', input)
    console.log('input', image.value)
    console.log('preview', preview.value)
  }
    
</script>
      
<style lang="less">
  @import '../assets/styles/main';
  
  .image-upload {
    max-width: 350px;
    margin-bottom: 25px;

    &__label {
      font-size: 20px;
    }

    &__box {
      position: relative;
    }

    &__file {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
      opacity: 0;
      z-index: 2;
    }

    &__image {
      margin-bottom: 35px;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(220, 223, 230, 0.8);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

  }
</style>