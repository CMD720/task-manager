<template>
  <div class="list__wrapper">
    <h1 class="title"
        :class=this.board.name
        @click="clickBoard"
    >
      {{this.board.title }}
    </h1>
    <div class="list" :class=this.board.name>
      <task-item
          v-for="task in board.tasks"
          :task="task"
          :key="task.id"
          :style="board.name"
          :description="false"
      />
    </div>
  </div>

</template>

<script>
import TaskItem from "@/components/TaskItem.vue";
import View from "@/pages/View.vue";
import {mapMutations} from "vuex";
import router from "@/router";

export default {
  components: {TaskItem},
  name: 'list-tsk',
  props: {
    board: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      boardID: this.board.id
    }
  },
  methods: {
    ...mapMutations({
      setCurrentViewBoard: "tasks/setCurrentViewBoard"
    }),
    openModal() {
      this.showModal = true
    },
    clickBoard(){
      this.setCurrentViewBoard(this.board)
      router.push({name:'view'})
    }
  },
}
</script>

<style lang="scss" scoped>
.list__wrapper {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 33%;
  height: auto;

  .title {
    text-align: center;
    padding: 3px;
    cursor: pointer;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .list {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 10px;
    min-height: 200px;
    height: calc(100vh - 180px);
  }
}

.set {
  border: 2px solid #42a7b9;
}

.progress {
  border: 2px solid #e35353;
}

.done {
  border: 2px solid #42b983;
}
</style>