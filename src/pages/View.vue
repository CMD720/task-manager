<template>
  <div class="list__view-wrapper">
    <h1 class="title">{{ currentViewBoard.title }} :</h1>

    <div class="list__view" v-if="currentViewBoard.tasks.length > 0"
         v-on:dragover.prevent="dragOverHandler($event)"
         @drop="dropListHandler(currentViewBoard.id, currentViewBoard.name)"
    >
      <task-item
          v-for="task in currentViewBoard.tasks"
          :task="task"
          :key="task.id"
          :style="currentViewBoard.name"
          :description="true"
      />
    </div>
    <div v-else>
      <h1>Out of tasks</h1>
    </div>
  </div>

  <s-button @click="$router.push('/tasks')">
    BACK
  </s-button>
</template>

<script>
import SButton from "@/components/UI/s-button.vue";
import router from "@/router";
import {mapGetters, mapMutations, mapState} from "vuex";
import TaskItem from "@/components/TaskItem.vue";
import ListTsk from "@/components/TaskList.vue";
import dragDropMixin from "@/mixins/dragDropMixin";

export default {
  components: {ListTsk, TaskItem, SButton},
  computed: {
    ...mapState({
      currentViewBoard: state => state.tasks.currentViewBoard
    }),
  },
  mixins:[dragDropMixin],
}
</script>

<style lang="scss" scoped>
.list__view-wrapper {
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-top: 20px;
  }

  .list__view {
    margin: 20px 10px;
    padding: 20px;
    border-radius: 12px;
    border: 2px solid gainsboro;
    width: 100%;
    height: auto;
    max-width: 700px;
  }
}

</style>