export const tasksModule = {
    state: () => ({
        boards: [
            {
                id:0,
                name: 'set',
                title:'Свободные',
                tasks: [
                    {
                        id: 121212,
                        title: 'Rebellion',
                        description: 'Recruit rebels, destroy the DeathStar...',
                        performer: 'Luke Skywalker',
                        status: 'set'
                    }
                ],
            },
            {
                id:1,
                name: 'progress',
                title:'На выполнении',
                tasks: [
                    {
                        id: 1212,
                        title: 'Спасти будущее',
                        description: 'Предотвратить восстание машин, не запускать скайнет...',
                        performer: 'Джон Коннор',
                        status: 'progress'
                    }
                ],
            },
            {
                id:2,
                name: 'done',
                title:'Завершенные',
                tasks: [
                    {
                        id: 123445667,
                        title: 'Space',
                        description: 'To make the first Spaceflight',
                        performer: 'Yuri Gagarin',
                        status: 'done'
                    }
                ],
            },
        ],
        currentList:'',
        currentTask:{},
        currentIndex: 0,
        dropIndex: 0,
        currentViewBoard:{}

    }),
    mutations: {
        setCurrentViewBoard(state, board){
            state.currentViewBoard = board
        },
        setTask(state, task) {
            state.boards[0].tasks.push(task)
        },
        addEditedTask(state, task){
            const findStatus = state.boards.find(item => {
                return (item.name === task.status)
            })
            findStatus.tasks.push(task)
        },
        deleteTask(state, task) {
            state.boards.forEach(item => {
                item.tasks = item.tasks.filter(ts => ts.id !== task.id)
            })
        },
        setCurrentDragStart(state, task) {
            state.currentTask = task;
            state.currentList = task.status

            const findBoard = state.boards.find(board => {
                return(board.name === task.status)
            })
            state.currentIndex = findBoard.tasks.indexOf(task)
        },
        setDropIndex(state, task){
            const findBoard = state.boards.find(board => {
                return(board.name === task.status)
            })
            state.dropIndex = findBoard.tasks.indexOf(task)
        },
        dropHandler(state, {id, name, flag}){
            if(flag){
                state.currentTask.status = name
                state.boards[id].tasks.splice(state.dropIndex , 0, state.currentTask)
                state.currentTask = {}
                state.currentList = ''
                state.dropIndex = 0;
            } else {
                state.boards[id].tasks.splice(state.dropIndex , 0, state.currentTask)
                state.dropIndex = 0;
            }
        },
    },
    actions: {
        editOne({state, commit}, task){
            console.log('TASK - ',task)
            commit('deleteTask', task)
            commit('addEditedTask',task)
        }
    },
    namespaced: true,
}