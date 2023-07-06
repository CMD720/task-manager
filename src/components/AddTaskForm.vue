<template>
  <div class="add">
    <div class="field">
      <span>
        Заголовок *
      </span>
      <s-input
          v-model="title"
          type="text"
          placeholder="title"
      />
    </div>
    <div class="field">
      <span>
        Описание *
      </span>
      <s-input-textarea
          v-model="description"
          placeholder="description"
      />
    </div>
    <div class="field">
      <span>
        Исполнитель
      </span>
      <s-input
          v-model="performer"
          type="text"
          placeholder="contractor"
      />
    </div>
    <div class="field__btn">
      <s-button @click="addTask"  >
        Add
      </s-button>
      <s-button @click="clearForm">
        Clear all
      </s-button>
    </div>
  </div>
</template>

<script>
import SButton from "@/components/UI/s-button.vue";
import SInput from "@/components/UI/s-input.vue";
import {mapMutations} from "vuex";
import {nanoid} from "nanoid";
import SInputTextarea from "@/components/UI/s-input-textarea.vue";
import toggleMixin from "@/mixins/toggleMixin";

export default {
  components: {SInputTextarea, SInput, SButton},
  data() {
    return {
      title: '',
      description: '',
      performer: '',
    }
  },
  mixins:[toggleMixin],

  methods: {
    ...mapMutations({
      setTask: "tasks/setTask"
    }),
    addTask() {
      if(this.title !== '' && this.description !== ''){
        const task = {
          id: nanoid(),
          title: this.title,
          description: this.description,
          performer: this.performer,
          status:'set'
        }
        this.setTask(task)
        this.clearForm()
        this.closeModal()
      } else {
        alert('заполните все поля со " * " ')
      }

    },
    clearForm() {
      this.title = ''
      this.description = ''
      this.performer = ''
    }

  },
}
</script>

<style lang="scss" scoped>
.add {
  display: flex;
  flex-direction: column;

  .field {
    margin: 10px 0;


    span {
      margin: 10px 10px;
      color: black;
    }

  }

  .field__btn {
    display: flex;
    justify-content: space-between;
  }


}
</style>