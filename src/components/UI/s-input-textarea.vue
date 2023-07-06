<template>
  <textarea :value="modelValue" @input="updInput" class="input"/>
</template>

<script>
export default {
  name: 's-input-textarea',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }

}
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid gainsboro;
  border-radius: 8px;
  width: 100%;
  height: 100px;
  padding: 10px 15px;
  margin: 5px;
  resize: none;


  &:focus, &:hover {
    border: 1px solid #afaeae;
  }
}
</style>