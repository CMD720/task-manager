<template>
  <div class="login">
    <div>
      <span>
        Login
      </span>
      <s-input
          v-model="login"
          value="simle@gmail.com"
          type="text"
          placeholder="enter login"
      />
    </div>
    <div>
      <span>
        Password
      </span>
      <s-input
          v-model="password"
          value="simlepassword"
          type="password"
          placeholder="enter password"
      />
    </div>
    <div>
      <s-button @click="loginClick">
        Login
      </s-button>
    </div>
  </div>
</template>

<script>
import SInput from "@/components/UI/s-input.vue";
import SButton from "@/components/UI/s-button.vue";
import {mapMutations} from "vuex";
import router from "@/router";

export default {
  name:'login',
  components: {SButton, SInput},

  data(){
    return{
      login:'simle@gmail.com',
      password:'simlepassword',
    }
  },

  methods: {
    ...mapMutations({
      setLogin: "login/setLogin",
      setModal: "modal/setModal"
    }),

    loginClick(){
      if (this.login.toLowerCase() === 'simle@gmail.com' && this.password === 'simlepassword'){
        this.setLogin()
        this.setModal()
        router.push('/tasks')
      } else {
        alert('Неверный логин , пароль...')
      }

    },
  },
}
</script>

<style lang="scss" scoped>
.login{
  display: flex;
  flex-direction: column;

  span {
    margin: 10px 10px;
  }
}
</style>