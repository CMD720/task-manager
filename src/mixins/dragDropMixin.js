import {mapMutations, mapState} from "vuex";

export default {
    computed: {
        ...mapState({
            boards: state => state.tasks.boards,
            currentList: state => state.tasks.currentList,
            currentTask: state => state.tasks.currentTask
        }),
    },

    methods: {
        ...mapMutations({
            dropHandler: "tasks/dropHandler",
            deleteTask: "tasks/deleteTask"
        }),
        dragOverHandler(event) {
            event.stopPropagation()
            if (event.target.className == 'task__item set' || 'task__item process' || 'task__item done') {
                event.target.style.boxShadow = '2px 2px 8px rgba(128,128,128, 0.5)'
            }
        },

        dropListHandler(id, name) {
            if (name !== this.currentList) {
                this.deleteTask(this.currentTask)
                this.dropHandler({id, name, flag:true})
            }else {
                this.deleteTask(this.currentTask)
                this.dropHandler({id, name, flag:false})
            }
        },
    },
}