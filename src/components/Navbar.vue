<template>
  <div class="navbar">
    <div class="logo" @click="$router.push('/')">Task Manager</div>
    <div class="navbar__btns" v-if="this.auth">
      <i-button color="white" @click="openModal">
        +
      </i-button>
      <s-button color="white" @click="clickLogout">
        Logout
      </s-button>
    </div>
    <div v-else></div>
    <modal v-model:show="showModal">
      <add-task-form v-model:show="showModal"/>
    </modal>
  </div>
</template>

<script>
import SButton from "@/components/UI/s-button.vue";
import IButton from "@/components/UI/i-button.vue";
import SInput from "@/components/UI/s-input.vue";
import {mapState} from "vuex";
import router from "@/router";
import store from "@/store";
import Modal from "@/components/Modal.vue";
import AddTaskForm from "@/components/AddTaskForm.vue";

export default {
  components: {IButton, AddTaskForm, SInput, Modal, SButton},
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    clickLogout() {
      store.commit('login/setLogout')
      router.push('/')
    },
  },
  computed: {
    ...mapState({
      auth: state => state.login.auth,
      tasks: state => state.tasks.tasks
    }),
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  background: #42b983;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: white;
}

.logo {
  color: white;
  font-weight: bolder;
  font-size: 24px;
  cursor: pointer;
}

.navbar__btns {
  margin-left: auto;
  display: flex;
}
</style>