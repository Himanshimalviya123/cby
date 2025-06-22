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
            
        }
    }
})
export const  {addtask}=todoslice.actions;
export default todoslice.reducer;