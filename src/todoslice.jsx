import { createSlice } from "@reduxjs/toolkit";
const todoslice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addtask:(state,actions)=>{
            console.log(actions);
            state.task.push(actions.payload)
            
        },
         RemoveTask: (state, actions) => {
      state.task = state.task.filter((key) => key.id != actions.payload.id);
    },
     taskComplete: (state, actions) => {
      for (var i = 0; i < state.task.length; i++) {
        if (state.task[i].id == actions.payload.id) {
          state.task[i].taskStatus = true;
        }
      }
    },
    taskInComplete: (state, actions) => {
      for (var i = 0; i < state.task.length; i++) {
        if (state.task[i].id == actions.payload.id) {
          state.task[i].taskStatus = false;
        }
      }
    },
    }
})
export const  {addtask,RemoveTask}=todoslice.actions;
export default todoslice.reducer;