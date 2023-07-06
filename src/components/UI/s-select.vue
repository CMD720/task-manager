<template>
  <select class="selector" @change="changeOptions">
    <option selected disabled  :value="defaultValue.value">{{defaultValue.name}}</option>
    <option
        v-for="option in currentOption"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 's-select',
  data(){
    return{
      defaultValue:{},
      currentOption:[]
    }
  },
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    },
    valueSelect:{
      type: String,
      required: true,
    }
  },
  methods: {
    changeOptions(event) {
      this.$emit('update:modelValue', event.target.value)
    },
    setDefaultValue(){
      this.defaultValue = this.options.find(item => {
        return(item.value === this.valueSelect)
      })
      this.currentOption = this.options.filter(item => item.value !== this.defaultValue.value)
      this.$emit('update:modelValue', this.defaultValue.value)
    }
  },
  mounted() {
    this.setDefaultValue()
  }
}
</script>

<style lang="scss" scoped>
.selector {
  padding: 10px;
  background: white;
  border: 1px solid gainsboro;
  cursor: pointer;
}
</style>