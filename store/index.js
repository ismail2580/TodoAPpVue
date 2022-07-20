export const state = () =>({
    tasks:[]
});

export const mutations ={
    ADD_TASK(state, tasks){
        state.tasks = [{content:tasks, done: false}, ...state.tasks]
    },
    REMOVE_TASK(state, tasks){
        state.tasks.splice(state.tasks.indexOf(tasks),1)
    },
    TOGGLE_TASK(state, tasks){
        tasks.done = !tasks.done
    }
}