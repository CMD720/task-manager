<template>
  <div class="viewer">
    <div v-if="!edit">
      <div class="title">{{ task.title }}</div>
      <p>Instruction</p>
      <div class="description">{{ task.description }}</div>
      <p>Performer</p>
      <div class="description">{{ task.performer ? task.performer : 'неназначен' }}</div>
      <div class="status">{{task.status}}</div>
      <s-button @click="setEdit">
        Edit
      </s-button>
    </div>

    <div v-else>
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
      <div class="field">
      <span>
        Статус
      </span>
        <s-select
            v-model="status"
            :options="statusOptions"
            :valueSelect="this.task.status"
        />
      </div>
      <div class="field__btn">
        <s-button @click="saveTask">
          Save
        </s-button>
        <s-button @click="delTask">
          Delete
        </s-button>
      </div>
    </div>

  </div>
</template>

<script>
import SButton from "@/components/UI/s-button.vue";
import SInput from "@/components/UI/s-input.vue";
import SInputTextarea from "@/components/UI/s-input-textarea.vue";
import toggleMixin from "@/mixins/toggleMixin";
import {mapActions, mapMutations} from "vuex";
import SSelect from "@/components/UI/s-select.vue";

export default {
  name: 'task-viewer',
  components: {SSelect, SInputTextarea, SInput, SButton},
  data() {
    return {
      edit: false,
      title: this.task.title,
      description: this.task.description,
      performer: this.task.performer,
      status: '',
      statusOptions: [
        {value: 'set', name: 'свободное'},
        {value: 'progress', name: 'на выполнении'},
        {value: 'done', name: 'завершено'},
      ],
    }
  },
  mixins: [toggleMixin],

  props: {
    task: {
      type: Object,
      required: true
    },
  },
  methods: {
    ...mapMutations({
      addEditedTask: "tasks/addEditedTask",
      deleteTask: "tasks/deleteTask"
    }),
    ...mapActions({
      editOne: "tasks/editOne"
    }),
    setEdit() {
      this.edit = true
    },

    saveTask() {
      if (this.title !== '' || this.description !== '') {
        const task = {
          id: this.task.id,
          title: this.title,
          description: this.description,
          performer: this.performer,
          status: this.status,
        }
        this.deleteTask(task)
        this.addEditedTask(task)
        this.closeModal()
      } else {
        alert('заполните все поля со " * " ')
      }
    },

    delTask() {
      this.deleteTask(this.task)
      this.closeModal()
    },
  },


}
</script>

<style lang="scss" scoped>
.viewer {

  p {
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
  }

  .title {
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: bolder;
    text-align: center;
  }

  .description {
    margin-left: 15px;
    margin-bottom: 10px;
  }
  .status{
    margin: 5px;
  }

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