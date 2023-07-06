<template>
  <div
      draggable="true"
      class="task__item"
      :class="this.style"
      @click="openModal"
      @dragstart = "dragStartHandler(task)"
      @dragend = "dragEndHandler()"
      @dragleave = "dragLeaveHandler($event)"
      @dragover = "dragOverHandler()"
      @drop = "dropItemHandler($event, task)"
  >

    <div class="title">{{task.title}}</div>
    <div v-if="description" class="description">{{task.description}}</div>
  </div>
  <modal v-model:show="showModal" >
    <task-viewer :task="task" v-model:show="showModal"/>
  </modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import TaskViewer from "@/components/TaskViewer.vue";
import {mapMutations} from "vuex";

export default {
  name:'task-item',
  components: {TaskViewer, Modal},
  data() {
    return {
      showModal: false,
    }
  },
  props:{
    task:{
      type: Object,
      required:true
    },

    style: String,

    description:{
      type:Boolean,
      required: true
    }
  },
  // emits: ['dragStart','dragEnd','dragLeave','dragOver','dropItem'],
  methods: {
    ...mapMutations({
      setCurrentDragStart: "tasks/setCurrentDragStart",
      setDropIndex: "tasks/setDropIndex"
    }),
    openModal() {
      this.showModal = true

    },
    dragStartHandler(task){
      this.setCurrentDragStart(task)
    },
    dragEndHandler(){},

    dragLeaveHandler(event){
      event.target.style.boxShadow = 'none'
    },
    dragOverHandler(){},

    dropItemHandler(event){
      event.target.style.boxShadow = 'none'
      this.setDropIndex(this.task)
    },
  },
}
</script>

<style lang="scss" scoped>

.task__item{
  border-radius: 8px;
  width: 100%;
  height: 70px;
  cursor: pointer;
  margin-bottom: 10px;
  overflow:hidden;
  text-overflow: ellipsis;
  padding: 7px;
  //----------------
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover{
    box-shadow: 2px 2px 8px rgba(128,128,128, 0.5);
  }

  .title{
    font-size: 22px;
    font-weight: bolder;
    margin-bottom: 5px;
  }
  .description{
    margin-left: 10px;
  }
}

.set {
  background: rgba(66, 167, 185, 0.2) ;
}

.progress {
  background: rgba(227, 83, 83, 0.2) ;
}

.done {
  background: rgba(66, 185, 131, 0.2) ;
}
</style>