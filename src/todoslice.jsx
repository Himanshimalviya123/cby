  // \\\\\\\\\\\\\\\\\\\\\\( pay load )\\(addtask)\\(app.jsx,todoslice.jsx,store.jsx)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// import { createSlice } from "@reduxjs/toolkit";
// const todoslice=createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addtask:(state,actions)=>{
//             console.log(actions);
//             state.task.push(actions.payload)
            
//         }
//     }
// })
// export const  {addtask}=todoslice.actions;
// export default todoslice.reducer;
// \\\\\\\\\\\\(delete,del)\\\\\\\\(todo app)\\\\\(app.jsx,todoslice.jsx,store.jsx,main.jsx)\\\\\\\\\\\
// import { createSlice } from "@reduxjs/toolkit";
// const todoslice=createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addtask:(state,actions)=>{
//             console.log(actions);
//             state.task.push(actions.payload)
            
//         },
//         removetask:(state,actions)=>{
//             state.task=state.task.filter(item=>item.id!=actions.payload.id)
//         },
//         remByIndex:(state,actions)=>{
//             state.task.splice(actions.payload.id,1);
//             console.log(actions.payload.id);
            
//         }
//     }
// })
// export const  {addtask,removetask, remByIndex}=todoslice.actions;
// export default todoslice.reducer;
// \\\\\\\\\\\\\\\\\(delete,complete,incomplete,edit)\\\\(todo app)\\(app.jsx,todoslice.jsx,store.jsx,main.jsx)\\\\\\\\\\\\\\

import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    task: [],
  },

  reducers: {
    addTask: (state, actions) => {
      state.task.push(actions.payload);
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
    myEditSave: (state, actions) => {
      for (var i = 0; i < state.task.length; i++) {
        if (state.task[i].id == actions.payload.id) {
          state.task[i].work = actions.payload.work;
        }
      }
    },
  },
});

export const { addTask, RemoveTask, taskComplete, taskInComplete, myEditSave } =
  todoSlice.actions;
export default todoSlice.reducer;
//////////////////////////////////////////////////////////////////////////////////