<template>
  <div class="text-input__wrap">
    <div class="text-input__label">
      {{ label }}
    </div>
    <div class="text-input__box">
      <textarea v-if="type === 'textarea'" class="text-textarea" v-model="value"/>

      <input
        v-else-if="type === 'password'" 
        class="text-input"
        ref="password"
        :type="passwordFieldType"
        :placeholder="placeholder"
        v-model="value"
      >

      <input
        v-else
        class="text-input"
        :type="type"
        :placeholder="placeholder"
        v-model="value"
      >
      <div
        v-if="type === 'password'"
        class="text-input__eyes"
        @click="togglePassword"
      >
        <el-icon v-if="isHidePassword"><Hide /></el-icon>
        <el-icon v-else><View/></el-icon>
      </div>
      
    </div>

    <div class="text-input__error">
      {{ errorMessage }}
    </div>
  </div>
</template>
  
<script setup >
import { View, Hide } from '@element-plus/icons-vue'
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
})

const password = ref('')
const passwordFieldType = ref("password");
const isHidePassword = ref(true)

const togglePassword = () => {
  isHidePassword.value = !isHidePassword.value;
  passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
}

const { value, errorMessage } = useField(() => props.name);
  
</script>
  
<style lang="less">
  @import '../assets/styles/main';

  .text-textarea {
    width: 100%;
    height: 45px;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 10px;
    outline: 0;
    border: 1px solid rgba(220, 223, 230, 0.8);
    height: 200px
  }
  
.text-input {
  width: 100%;
  height: 45px;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 10px;
  outline: 0;
  border: 1px solid rgba(220, 223, 230, 0.8);

  &__wrap {
    position: relative;
  }

  &__label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
  }

  &__error {
    font-size: 12px;
    margin-top: 5px;
    color: red;
    position: absolute;
    bottom: -18px;
  }
  
  &__wrap {
    margin-bottom: 26px;
  }

  &__box {
    position: relative;
  }

  &__eyes {
    display: flex;
    position: absolute;
    cursor: pointer;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }

  &__link {
    color: @white;

  }
}
</style>