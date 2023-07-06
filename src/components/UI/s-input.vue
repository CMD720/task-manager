<template>
  <input :value="modelValue" @input="updInput" class="input" type="text">
</template>

<script>
export default {
  name:'s-input',
  props:{
    modelValue:[String, Number],
  },
  methods: {
    updInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }

}
</script>

<style lang="scss" scoped>
input{
  width: 100%;
  border: 1px solid gainsboro;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 5px;
  

  &:focus, &:hover {
    border: 1px solid #afaeae;
  }
}
</style>