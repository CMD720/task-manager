<template>
  <div class="tasks__wrapper">
    <list-tsk
        v-for="board in this.boards"
        :board="board"
        :key="board.name"
        v-on:dragover.prevent="dragOverHandler($event)"
        @drop="dropListHandler(board.id, board.name)"
    />
  </div>
</template>

<script>
import ListTsk from "@/components/TaskList.vue";
import SButton from "@/components/UI/s-button.vue";
import Tooltip from "@/components/Tooltip.vue";
import {mapGetters, mapMutations, mapState} from "vuex";
import dragDropMixin from "@/mixins/dragDropMixin";

export default {
  components: {Tooltip, SButton, ListTsk},
  data() {
    return {}
  },
  mixins:[dragDropMixin],
}


</script>

<style lang="scss" scoped>
.tasks__wrapper {
  display: flex;
}
</style>