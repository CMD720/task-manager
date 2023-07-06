<template>
  <button
      class="btn"
      :class=color
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'i-button',

  props: {
    color: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin: 5px;
  width: 35px;
  border-radius: 50%;
  background: none;
  cursor: pointer;
}

.green {
  border: 2px solid #42b983;
  color: #42b983;
}

.red {
  border: 2px solid #e35353;
  color: #e35353;
}

.blue {
  border: 2px solid #42a7b9;
  color: #42a7b9;
}
.white {
  border: 2px solid white;
  color: white;
}
</style>