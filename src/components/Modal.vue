<template>
  <div class="modal" v-if="show" @click="closeModal">

    <div @click.stop class="modal__content">
      <div class="close" @click="closeModal">close</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";
import store from "@/store";

export default {
  name:'modal',
  computed: {
    store() {
      return store
    }
  },
  mixins:[toggleMixin]
}
</script>

<style lang="scss" scoped>
.modal{
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 1;

  .modal__content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    background-color: rgba(255,255,255,0.25);
    backdrop-filter: blur(5px);
    border: 1px solid #fff;
    border-bottom: 1px solid rgba(255,255,255, 0.25);
    border-right: 1px solid rgba(255,255,255, 0.25);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);

    padding: 20px;
    border-radius: 12px;
    width: 450px;
    height: auto;

    .close{
      color: gray;
      align-self: flex-end;
      cursor: pointer;

      &:hover{
        color: black;
        font-weight: bold;
      }
    }
  }
}
</style>