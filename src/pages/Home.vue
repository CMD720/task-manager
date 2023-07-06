<template>
  <div class="home">
    <h1 style="margin-bottom: 15px">Welcome to Task manager</h1>
    <div style="display: flex">
      <tooltip title="Press any button">
        <s-button style="width: 75px" color="green" @click="openModal">
          Please
        </s-button>
        <s-button style="width: 75px" color="blue" @click="openModal">
          Log
        </s-button>
        <s-button style="width: 75px" color="red" @click="openModal">
          In
        </s-button>
      </tooltip>
    </div>
    <modal v-model:show="showModal">
      <login @login="loginClick"/>
    </modal>
  </div>
</template>

<script>
import SButton from "@/components/UI/s-button.vue";
import SInput from "@/components/UI/s-input.vue";
import Tooltip from "@/components/Tooltip.vue";
import Modal from "@/components/Modal.vue";
import Login from "@/components/LoginForm.vue";
import {mapMutations, mapState} from "vuex";


export default {
  components: {Login, Modal, Tooltip, SInput, SButton},
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    loginClick() {
      this.setLogin()
      this.setModal()
    },
    ...mapMutations({
      setLogin: "login/setLogin",
      setModal: "modal/setModal"
    })
  },
  computed: {
    ...mapState({
      auth: state => state.login.auth,
    })
  }

}
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>